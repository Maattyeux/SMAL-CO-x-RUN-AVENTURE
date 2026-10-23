"""Convertit les photos sources (assets-src/*.jpg) en WebP responsive.

Sortie : public/img/<nom>-<largeur>.webp pour deux largeurs, plus un
manifeste JSON (src/data/image-manifest.json) avec les dimensions réelles,
utilisé par le composant <Photo> pour réserver l'espace (pas de CLS).
Usage : python3 scripts/optimize_images.py
"""
import json
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets-src"
OUT = ROOT / "public" / "img"
MANIFEST = ROOT / "src" / "data" / "image-manifest.json"
OUT.mkdir(parents=True, exist_ok=True)

manifest = {}
for path in sorted(SRC.glob("*.jpg")):
    im = Image.open(path).convert("RGB")
    w, h = im.size
    portrait = h > w
    # Largeurs cibles : grand écran et mobile / vignette
    widths = [720, 1080] if portrait else [960, 1920]
    variants = []
    for tw in widths:
        tw = min(tw, w)
        th = round(h * tw / w)
        out = OUT / f"{path.stem}-{tw}.webp"
        im.resize((tw, th), Image.LANCZOS).save(out, "WEBP", quality=76, method=6)
        variants.append({"w": tw, "file": f"img/{out.name}"})
    manifest[path.stem] = {"w": w, "h": h, "variants": variants}
    print(path.stem, w, h, [v["w"] for v in variants])

MANIFEST.parent.mkdir(parents=True, exist_ok=True)
MANIFEST.write_text(json.dumps(manifest, indent=2))
