import fs from "node:fs/promises";
import path from "node:path";
import sharp from "../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js";

const inputDirectory = "/tmp/do-sumi-textless";
const outputDirectory = path.resolve("public/work-clean");
await fs.mkdir(outputDirectory, { recursive: true });

for (const file of (await fs.readdir(inputDirectory)).filter((name) => name.endsWith(".svg"))) {
  const source = await fs.readFile(path.join(inputDirectory, file));
  const output = path.join(outputDirectory, file.replace(/\.svg$/, ".webp"));
  const page = file.match(/page-(\d+)/)?.[1];
  if (page === "36" || page === "37") {
    const original = path.resolve(`public/work/page-${page}.webp`);
    const metadata = await sharp(original).metadata();
    const cover = await sharp({
      create: {
        width: Math.round((metadata.width ?? 1400) * 0.38),
        height: Math.round((metadata.height ?? 960) * 0.18),
        channels: 3,
        background: { r: 14, g: 14, b: 14 },
      },
    }).webp({ quality: 100 }).toBuffer();
    await sharp(original).composite([{ input: cover, top: 0, left: 0 }]).webp({ quality: 92 }).toFile(output);
    console.log(output);
    continue;
  }
  try {
    await sharp(source, { density: 144 }).resize({ width: 1800, withoutEnlargement: true }).webp({ quality: 92 }).toFile(output);
  } catch {
    const original = path.resolve(`public/work/page-${page}.webp`);
    const metadata = await sharp(original).metadata();
    const cropTop = Math.round((metadata.height ?? 960) * 0.185);
    await sharp(original)
      .extract({ left: 0, top: cropTop, width: metadata.width ?? 1400, height: (metadata.height ?? 960) - cropTop })
      .webp({ quality: 92 })
      .toFile(output);
  }
  console.log(output);
}
