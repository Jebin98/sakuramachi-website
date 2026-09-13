#!/usr/bin/env bash
# Re-encode the two hero clips from the handoff's web media set.
#
# Both clips are cut to the shorter one's length, because that is all the carousel ever
# plays, and scaled to 660px wide, which covers the 330px card on a 2x display. Posters are
# frame 0 of each clip, so the still and the first video frame are identical.
#
# Needs ffmpeg:  brew install ffmpeg
set -euo pipefail

SRC="${1:-../design_handoff_sakuramachi_site/design-reference/media}"
OUT="$(dirname "$0")/../public/media/video"
LIMIT=6.05   # the shorter clip's duration

mkdir -p "$OUT"

for clip in brownie cookie; do
  echo "encoding $clip..."
  ffmpeg -y -v error -i "$SRC/$clip-break.webm" -an -t "$LIMIT" -vf scale=660:-2 \
    -c:v libx264 -profile:v main -level 4.0 -pix_fmt yuv420p -crf 30 -preset slower \
    -movflags +faststart "$OUT/hero-$clip.mp4"
  ffmpeg -y -v error -i "$SRC/$clip-break.webm" -vf "select=eq(n\,0),scale=660:-2" \
    -vframes 1 -q:v 6 "$OUT/hero-$clip.jpg"
done

ls -la "$OUT"
