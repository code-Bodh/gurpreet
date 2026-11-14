#!/usr/bin/env bash
cd "$(dirname "$0")"
PID_FILE=".next_dev.pid"

if [ -f "$PID_FILE" ]; then
  PID=$(cat "$PID_FILE")
  if kill -0 "$PID" 2>/dev/null; then
    kill "$PID"
    echo "Stopped Next.js dev server (PID: $PID)."
  fi
  rm -f "$PID_FILE"
fi

# Kill any stray next-dev or node processes running on port 3000
PIDS=$(lsof -ti :3000 2>/dev/null)
if [ -n "$PIDS" ]; then
  echo "Terminating process on port 3000 ($PIDS)..."
  kill -9 $PIDS 2>/dev/null || true
fi

echo "Development server stopped."
