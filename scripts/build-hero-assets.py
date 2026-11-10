#!/usr/bin/env python3
"""
scripts/build-hero-assets.py
Processes CV/intro.mp4 into seamless looping hero.mp4 and hero.webm,
generates portrait-bust.webp and og.jpg.
"""
import os
import sys
import subprocess
import numpy as np
import soundfile as sf
from PIL import Image, ImageDraw

INPUT_VIDEO = "CV/intro.mp4"
HERO_DIR = "public/hero"
PUBLIC_DIR = "public"
TEMP_DIR = "/tmp/hero_build"

os.makedirs(HERO_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

# 1. Probe input video
w_out = subprocess.check_output([
    "ffprobe", "-v", "error", "-select_streams", "v:0",
    "-show_entries", "stream=width,height,r_frame_rate",
    "-of", "csv=p=0", INPUT_VIDEO
], text=True).strip().split(",")
w, h, fps = w_out[0], w_out[1], w_out[2]
fps_val = eval(fps)

dur_out = subprocess.check_output([
    "ffprobe", "-v", "error",
    "-show_entries", "format=duration",
    "-of", "csv=p=0", INPUT_VIDEO
], text=True).strip()
duration = float(dur_out)
print(f"[1] Input video: {w}x{h} @ {fps_val:.2f} fps, duration = {duration:.3f}s")

# 2. Extract and prepare seamless audio loop using numpy
audio_raw_wav = os.path.join(TEMP_DIR, "raw_audio.wav")
subprocess.check_call([
    "ffmpeg", "-y", "-i", INPUT_VIDEO,
    "-vn", "-acodec", "pcm_s16le", "-ar", "48000", "-ac", "2",
    audio_raw_wav
])

data, sr = sf.read(audio_raw_wav)
fade_duration = 0.5 # 0.5s cross-fade
L = int(fade_duration * sr)

head = data[:L]
body = data[L:]
fade_out = np.linspace(1.0, 0.0, L, endpoint=False)[:, np.newaxis]
fade_in = np.linspace(0.0, 1.0, L, endpoint=False)[:, np.newaxis]

blended = body[-L:] * fade_out + head * fade_in
looped_audio = np.concatenate([body[:-L], blended], axis=0)

audio_loop_wav = os.path.join(TEMP_DIR, "audio_loop.wav")
sf.write(audio_loop_wav, looped_audio, sr)
actual_loop_duration = len(looped_audio) / sr
print(f"[2] Seamless audio created: {actual_loop_duration:.3f}s (cut {fade_duration}s crossfade)")

# 3. Create seamless video loop using ffmpeg xfade
part_a_len = duration - fade_duration
offset = part_a_len - fade_duration

crop_filter = "crop=800:1000:715:25,scale=768:960,colorlevels=rimax=0.98:gimax=0.98:bimax=0.98"

vf_xfade = (
    f"[0:v] {crop_filter},split=2[v1][v2]; "
    f"[v1] trim=start={fade_duration}:end={duration},setpts=PTS-STARTPTS[v_body]; "
    f"[v2] trim=start=0:end={fade_duration},setpts=PTS-STARTPTS[v_head]; "
    f"[v_body][v_head] xfade=transition=fade:duration={fade_duration}:offset={offset}[v_xfaded]; "
    f"[v_xfaded] format=yuv420p [v_final]"
)

# Export hero.mp4
hero_mp4 = os.path.join(HERO_DIR, "hero.mp4")
print(f"[3] Encoding {hero_mp4} (H.264 CRF 24 + AAC 96k)...")
subprocess.check_call([
    "ffmpeg", "-y",
    "-i", INPUT_VIDEO,
    "-i", audio_loop_wav,
    "-filter_complex", vf_xfade,
    "-map", "[v_final]",
    "-map", "1:a",
    "-t", f"{actual_loop_duration:.4f}",
    "-c:v", "libx264", "-crf", "24", "-preset", "slow", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "96k",
    "-movflags", "+faststart",
    hero_mp4
])

# Export hero.webm
hero_webm = os.path.join(HERO_DIR, "hero.webm")
print(f"[4] Encoding {hero_webm} (VP9 CRF 36 + Opus 80k)...")
subprocess.check_call([
    "ffmpeg", "-y",
    "-i", INPUT_VIDEO,
    "-i", audio_loop_wav,
    "-filter_complex", vf_xfade,
    "-map", "[v_final]",
    "-map", "1:a",
    "-t", f"{actual_loop_duration:.4f}",
    "-c:v", "libvpx-vp9", "-crf", "36", "-b:v", "0",
    "-c:a", "libopus", "-b:a", "80k",
    hero_webm
])

# 5. Extract portrait bust (head to shirt, 480x600)
portrait_raw = os.path.join(TEMP_DIR, "portrait_raw.jpg")
subprocess.check_call([
    "ffmpeg", "-y", "-ss", "00:00:02.500", "-i", INPUT_VIDEO,
    "-vf", "crop=480:600:720:30",
    "-vframes", "1",
    portrait_raw
])

portrait_webp = os.path.join(PUBLIC_DIR, "portrait-bust.webp")
im = Image.open(portrait_raw)
im.save(portrait_webp, "WEBP", quality=92)
print(f"[5] Saved portrait bust: {portrait_webp} (480x600)")

# 6. Generate og.jpg (1200x630)
og_jpg = os.path.join(PUBLIC_DIR, "og.jpg")
bg_color = (244, 242, 238) # #f4f2ee
og_im = Image.new("RGB", (1200, 630), bg_color)
draw = ImageDraw.Draw(og_im)

bust_thumb = im.resize((360, 450), Image.Resampling.LANCZOS)
og_im.paste(bust_thumb, (760, 90))

og_im.save(og_jpg, "JPEG", quality=90)
print(f"[6] Saved Open Graph card: {og_jpg} (1200x630)")

print("\n--- HERO VIDEO PIPELINE FINISHED SUCCESSFULLY ---")
