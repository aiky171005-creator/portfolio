from copy import deepcopy
import os
from pathlib import Path
from lxml import etree
import base64

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "projects" / "extracted"
OUT.mkdir(parents=True, exist_ok=True)
SOURCE_DIR = Path(os.environ.get("PORTFOLIO_SOURCE_ROOT", "")) / "svg"
if not os.environ.get("PORTFOLIO_SOURCE_ROOT"):
    raise RuntimeError("Set PORTFOLIO_SOURCE_ROOT to the local portfolio source directory.")


def local_name(node):
    return etree.QName(node).localname if isinstance(node.tag, str) else ""


def load(relative_path):
    tree = etree.parse(str(ROOT / relative_path), etree.XMLParser(huge_tree=True))
    root = tree.getroot()
    groups = [node for node in root if local_name(node) == "g"]
    defs = next((node for node in root if local_name(node) == "defs"), None)
    return root, groups, defs


def find_source(label):
    for path in SOURCE_DIR.glob("*.svg"):
        root = etree.parse(str(path), etree.XMLParser(huge_tree=True)).getroot()
        text = " ".join("".join(root.itertext()).split())
        if label in text:
            groups = [node for node in root if local_name(node) == "g"]
            defs = next((node for node in root if local_name(node) == "defs"), None)
            return root, groups, defs
    raise FileNotFoundError(label)


def export_embedded_image(node, name):
    href = node.get("{http://www.w3.org/1999/xlink}href") or node.get("href")
    header, data = href.split(",", 1)
    extension = "png" if "png" in header else "jpg"
    (OUT / f"{name}.{extension}").write_bytes(base64.b64decode(data))


def write_asset(name, source_root, defs, nodes):
    attributes = {key: value for key, value in source_root.attrib.items() if key not in {"id", "viewBox", "width", "height"}}
    root = etree.Element(source_root.tag, nsmap=source_root.nsmap, **attributes)
    root.set("viewBox", "0 0 1400 960")
    root.set("preserveAspectRatio", "xMidYMid meet")
    if defs is not None:
        root.append(deepcopy(defs))
    wrapper = etree.SubElement(root, f"{{{source_root.nsmap[None]}}}g")
    for node in nodes:
        wrapper.append(deepcopy(node))
    (OUT / f"{name}.svg").write_bytes(etree.tostring(root, xml_declaration=True, encoding="UTF-8"))


# E4A: the filenames supplied with the original export do not match their contents.
root, groups, defs = load("public/projects/e4a/point-font.svg")
for name, nodes in {
    "e4a-font-system": list(groups[0])[1:],
    "e4a-color-system": list(groups[1])[1:],
    "e4a-symbol-system": [list(groups[2])[0]],
    "e4a-logo-system": [list(groups[3])[0]],
    "e4a-graphic-system": list(groups[4])[1:],
}.items():
    write_asset(name, root, defs, nodes)

root, groups, defs = load("public/projects/e4a/icons.svg")
glyphs = [child for row in groups for child in row if local_name(child) == "g"]
if len(glyphs[-1]) == 2 and all(local_name(child) == "g" for child in glyphs[-1]):
    glyphs = glyphs[:-1] + list(glyphs[-1])
for index, node in enumerate(glyphs):
    write_asset(f"e4a-point-{index + 1:02d}", root, defs, [node])

root, groups, defs = find_source("10도 우상향 그래픽 모티브에 맞춘 아이콘 디자인")
for index, node in enumerate(groups[0]):
    write_asset(f"e4a-icon-{index + 1:02d}", root, defs, [node])

# Celeblossom flowers: seven independent bouquet stages.
root, groups, defs = load("public/projects/celeblossom/graphic-system.svg")
flowers = [flower for row in groups[0] for flower in row if local_name(flower) == "g"]
for index, node in enumerate(flowers):
    write_asset(f"cele-flower-{index + 1:02d}", root, defs, [node])

root, groups, defs = find_source("POSTER")
poster_flowers = [flower for row in groups[0] for flower in row if local_name(flower) == "g"]
for index, node in enumerate(poster_flowers):
    write_asset(f"cele-poster-flower-{index + 1:02d}", root, defs, [node])

# CRACK: six top-level character groups.
root, groups, defs = load("public/projects/crack/characters.svg")
for index, node in enumerate(groups[0]):
    write_asset(f"crack-character-{index + 1:02d}", root, defs, [node])

root, groups, defs = find_source("PANTONE Bright Green C")
write_asset("crack-logo-system", root, defs, [list(groups[2])[0]])

# Dongdong and Charan: remove the embedded photo and retain only vector identity groups.
root, groups, defs = load("public/projects/dongdong/system.svg")
write_asset("dongdong-background-art", root, defs, [groups[0]])
write_asset("dongdong-logo-system", root, defs, list(groups[4])[1:])
write_asset("dongdong-graphic-system", root, defs, list(groups[5])[1:])

root, groups, defs = load("public/projects/charan/system.svg")
write_asset("charan-logo-system", root, defs, list(groups[4])[1:])

root, _, _ = find_source("누와라엘리야 언덕 위 얼그레이")
charan_images = [node for node in root.iter() if local_name(node) == "image"]
for index, node in enumerate(charan_images[2:10]):
    export_embedded_image(node, f"charan-tea-{index + 1:02d}")

root, _, _ = find_source("BANNER_CONTENTS")
lezhin_images = [node for node in root.iter() if local_name(node) == "image"]
export_embedded_image(lezhin_images[0], "lezhin-phone-layer")
export_embedded_image(lezhin_images[1], "lezhin-background-layer")
