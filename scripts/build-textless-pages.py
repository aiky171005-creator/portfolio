from copy import deepcopy
import os
from pathlib import Path
from lxml import etree
import unicodedata


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(os.environ.get("PORTFOLIO_SOURCE_ROOT", "")) / "svg"
if not os.environ.get("PORTFOLIO_SOURCE_ROOT"):
    raise RuntimeError("Set PORTFOLIO_SOURCE_ROOT to the local portfolio source directory.")
TEMP = Path("/tmp/do-sumi-textless")
TEMP.mkdir(parents=True, exist_ok=True)

PAGES = {
    11: "이포에이07.svg",
    12: "이포에이08.svg",
    17: "셀러블라썸05.svg",
    18: "셀러블라썸06.svg",
    19: "셀러블라썸07.svg",
    20: "셀러블라썸08.svg",
    27: "동동04.svg",
    29: "동동06.svg",
    33: "차란04.svg",
    34: "차란05.svg",
    36: "레진02.svg",
    37: "레진03.svg",
}


def y_position(node):
    transform = node.get("transform", "")
    if "translate(" not in transform:
        return None
    values = transform.split("translate(", 1)[1].split(")", 1)[0].replace(",", " ").split()
    return float(values[1]) if len(values) > 1 else 0


for page, filename in PAGES.items():
    expected = unicodedata.normalize("NFC", filename)
    source = next((path for path in SOURCE.glob("*.svg") if unicodedata.normalize("NFC", path.name) == expected), None)
    if source is None:
        raise FileNotFoundError(filename)
    tree = etree.parse(str(source), etree.XMLParser(huge_tree=True))
    root = tree.getroot()
    for node in list(root.iter()):
        if not isinstance(node.tag, str) or etree.QName(node).localname != "text":
            continue
        y = y_position(node)
        if y is not None and y <= 170:
            parent = node.getparent()
            if parent is not None:
                parent.remove(node)
    view_box = root.get("viewBox", "0 0 1400 960").split()
    if len(view_box) == 4:
        x, y, width, height = map(float, view_box)
        crop = height * 0.185
        root.set("viewBox", f"{x:g} {y + crop:g} {width:g} {height - crop:g}")
    output = TEMP / f"page-{page:02d}.svg"
    output.write_bytes(etree.tostring(root, xml_declaration=True, encoding="UTF-8"))
    print(output)
