#!/usr/bin/env python3
"""Cut the circular browser-tab icon from the hand-drawn brand mark.

The supplied logo is a 4:3 JPEG: the cake slice sits above the hand-lettered wordmark on a
soft pink ground that fades to white at the edges. A tab icon is 16-32px, where the wordmark
is unreadable mush, so this crops to the cake slice alone and masks it to a circle.

The artwork itself is untouched - no recolouring, no blend mode, no added backdrop. The pink
inside the circle is the logo's own ground.

    pip install pillow
    python3 scripts/make-favicon.py
"""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT.parent / "design_handoff_sakuramachi_site/design-reference/media/logo-sakuramachi.jpg"
OUT = ROOT / "public"

# Centre of the cake slice in the 2048x1536 original, and a radius that leaves a little
# clear space around it. Measured from the ink bounds: the slice is 708x607 at (717,343).
CENTRE = (1071, 646)
RADIUS = 470

# iOS fills a transparent home-screen icon with black, so that one gets an opaque ground.
CREAM_50 = (0xFF, 0xFD, 0xF8)

SUPERSAMPLE = 4


def circle_mask(size: int) -> Image.Image:
    """An anti-aliased circular alpha mask, drawn big and scaled down."""
    big = Image.new("L", (size * SUPERSAMPLE, size * SUPERSAMPLE), 0)
    ImageDraw.Draw(big).ellipse((0, 0, size * SUPERSAMPLE - 1, size * SUPERSAMPLE - 1), fill=255)
    return big.resize((size, size), Image.LANCZOS)


def disc(art: Image.Image, size: int, ground: tuple[int, int, int] | None = None) -> Image.Image:
    icon = art.resize((size, size), Image.LANCZOS).convert("RGBA")
    icon.putalpha(circle_mask(size))
    if ground is None:
        return icon
    plate = Image.new("RGBA", (size, size), (*ground, 255))
    plate.alpha_composite(icon)
    return plate


def main() -> None:
    cx, cy = CENTRE
    art = Image.open(SRC).convert("RGB").crop((cx - RADIUS, cy - RADIUS, cx + RADIUS, cy + RADIUS))

    disc(art, 32).save(OUT / "favicon-32.png", optimize=True)
    disc(art, 192).save(OUT / "favicon-192.png", optimize=True)
    disc(art, 180, ground=CREAM_50).save(OUT / "apple-touch-icon.png", optimize=True)

    # /favicon.ico is still requested by browsers and by link unfurlers that ignore <link>.
    disc(art, 64).save(OUT / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

    for name in ("favicon-32.png", "favicon-192.png", "apple-touch-icon.png", "favicon.ico"):
        print(f"  {name:24} {(OUT / name).stat().st_size / 1024:6.1f} KB")


if __name__ == "__main__":
    main()
