#!/bin/bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

pkill -f "vite" >/dev/null 2>&1 || true
lsof -ti tcp:8080 | xargs kill -9 2>/dev/null || true

npm run dev -- --host 0.0.0.0 --port 8080 > /tmp/vite.log 2>&1 &
ssh -o StrictHostKeyChecking=no -R 80:localhost:8080 localhost.run > /tmp/vite-tunnel.log 2>&1 &

sleep 2

printf "Vite log:\n"
tail -n 5 /tmp/vite.log || true
printf "\nTunnel log:\n"
tail -n 8 /tmp/vite-tunnel.log || true
printf "\nTunnel URL:\n"
if rg -q "https?://[a-z0-9.-]+\\.lhr\\.life" /tmp/vite-tunnel.log; then
  rg -o "https?://[a-z0-9.-]+\\.lhr\\.life" /tmp/vite-tunnel.log | head -n 1
else
  printf "No lhr.life URL found. Retrying in foreground...\n"
  ssh -o StrictHostKeyChecking=no -R 80:localhost:8080 localhost.run
fi
