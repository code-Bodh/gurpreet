#!/usr/bin/env bash
cd "$(dirname "$0")"
export PATH="$HOME/.local/node/bin:$PATH"

PID_FILE=".next_dev.pid"

if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  echo "Next.js dev server is already running (PID $(cat "$PID_FILE"))."
  echo "Open http://localhost:3000 in your browser."
  exit 0
fi

echo "Starting Next.js development server (Hot Reload enabled)..."
nohup npx next dev -p 3000 > .next_dev.log 2>&1 &
DEV_PID=$!
echo $DEV_PID > "$PID_FILE"

sleep 2
if kill -0 "$DEV_PID" 2>/dev/null; then
  echo "Next.js dev server is running (PID: $DEV_PID)."
  echo "URL: http://localhost:3000"
  echo "To stop: ./stop-dev.sh"
else
  echo "Failed to start. Check .next_dev.log for details."
  exit 1
fi
