import fs from "node:fs/promises";
import path from "node:path";
import sharp from "../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js";

const projectRoot = path.resolve(import.meta.dirname, "..");
const sourceRoot = process.env.PORTFOLIO_SOURCE_ROOT;
if (!sourceRoot) throw new Error("Set PORTFOLIO_SOURCE_ROOT to the local portfolio source directory.");
const e4aSource = path.join(sourceRoot, "E4A소스");
const celeSource = path.join(sourceRoot, "셀러블라썸 소스");

async function findNormalized(directory, wanted) {
  const files = await fs.readdir(directory);
  const normalizedWanted = wanted.normalize("NFC");
  const match = files.find((file) => file.normalize("NFC") === normalizedWanted);
  if (!match) throw new Error(`Missing source asset: ${wanted}`);
  return path.join(directory, match);
}

async function convert(sourceDirectory, sourceName, outputRelative, options = {}) {
  const source = await findNormalized(sourceDirectory, sourceName);
  const output = path.join(projectRoot, "public", outputRelative);
  await fs.mkdir(path.dirname(output), { recursive: true });
  let pipeline = sharp(source);
  if (options.trim) pipeline = pipeline.trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } });
  await pipeline
    .resize({ width: options.width ?? 1800, height: options.height ?? 1800, fit: "inside", withoutEnlargement: options.withoutEnlargement ?? true })
    .webp({ quality: 95, alphaQuality: 100, effort: 5 })
    .toFile(output);
  process.stdout.write(`${outputRelative}\n`);
}

await convert(e4aSource, "아미노리젠_단상자정면.png", "projects/e4a/cutout-amino.webp", { width: 1800, height: 1600, trim: true, withoutEnlargement: false });
await convert(e4aSource, "크레아틴_상자_정면_누끼.png", "projects/e4a/cutout-creatine.webp", { width: 1800, height: 1600, trim: true, withoutEnlargement: false });
await convert(e4aSource, "프리워크아웃_누끼.png", "projects/e4a/cutout-preworkout.webp", { width: 1800, height: 1600, trim: true, withoutEnlargement: false });
await convert(celeSource, "도록2.jpg", "projects/celeblossom/catalog-spread.webp", { width: 2400, height: 1800 });
