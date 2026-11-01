import fs from "node:fs/promises";
import path from "node:path";
import sharp from "../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js";

const directory = path.resolve("public/projects/extracted");
const files = (await fs.readdir(directory)).filter((file) => file.endsWith(".svg"));

for (const file of files) {
  const target = path.join(directory, file);
  const source = await fs.readFile(target);
  if (!/viewBox="0 0 1400 960"/.test(source.toString())) continue;
  const { info } = await sharp(source, { density: 72 })
    .ensureAlpha()
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 4 })
    .png()
    .toBuffer({ resolveWithObject: true });

  const padding = 18;
  const isDongdongBackground = file === "dongdong-background-art.svg";
  const isE4AIcon = file.startsWith("e4a-icon-");
  const rawLeft = Math.abs(info.trimOffsetLeft ?? 0);
  const rawTop = Math.abs(info.trimOffsetTop ?? 0);
  const centerX = rawLeft + info.width / 2;
  const centerY = rawTop + info.height / 2;
  const left = isDongdongBackground ? 0 : isE4AIcon ? Math.max(0, centerX - 95) : Math.max(0, rawLeft - padding);
  const top = isDongdongBackground ? 0 : isE4AIcon ? Math.max(0, centerY - 125) : Math.max(0, rawTop - padding);
  const width = isDongdongBackground ? 720 : isE4AIcon ? Math.min(190, 1400 - left) : Math.min(1400 - left, info.width + padding * 2);
  const height = isDongdongBackground ? 960 : isE4AIcon ? Math.min(250, 960 - top) : Math.min(960 - top, info.height + padding * 2);
  const svg = source.toString().replace(/viewBox="[^"]+"/, `viewBox="${left} ${top} ${width} ${height}"`);
  await fs.writeFile(target, svg);
  console.log(`${file}: ${left} ${top} ${width} ${height}`);
}
