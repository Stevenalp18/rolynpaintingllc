#!/bin/sh
# Pulls the job photos from the old WordPress site into public/assets.
# Run once from the project root: npm run images
set -e
B="https://rolynpaintingllc.com/wp-content/uploads/2022/08"
D="public/assets"
mkdir -p "$D"
curl -fsSL "$B/Interior-Home-scaled.jpg" -o "$D/residential.jpg"
curl -fsSL "$B/casino.jpg"               -o "$D/commercial.jpg"
curl -fsSL "$B/house9-scaled.jpg"        -o "$D/carpentry.jpg"
curl -fsSL "$B/Carpentry-2-scaled.jpg"   -o "$D/drywall.jpg"
curl -fsSL "$B/deck-scaled.jpg"          -o "$D/deck.jpg"
curl -fsSL "$B/Deck-Stain-scaled.jpg"    -o "$D/power-washing.jpg"
echo "Saved 6 photos to $D"
