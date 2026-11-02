import path from "node:path";
import sharp from "../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js";

const projectRoot = path.resolve(import.meta.dirname, "..");
const source = path.join(projectRoot, "public/work/page-04.webp");
const output = path.join(projectRoot, "public/work-clean/page-04-hq.webp");
const metadata = await sharp(source).metadata();
const pixel = await sharp(source).extract({ left: 10, top: 10, width: 1, height: 1 }).raw().toBuffer();
const background = { r: pixel[0], g: pixel[1], b: pixel[2], alpha: 1 };
const cover = await sharp({
  create: {
    width: Math.round((metadata.width ?? 1595) * 0.565),
    height: Math.round((metadata.height ?? 1094) * 0.16),
    channels: 4,
    background,
  },
}).png().toBuffer();

await sharp(source)
  .composite([{ input: cover, left: 0, top: 0 }])
  .webp({ quality: 96, effort: 5 })
  .toFile(output);
