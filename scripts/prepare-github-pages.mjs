import fs from "node:fs/promises";
import path from "node:path";

const outputRoot = path.resolve(import.meta.dirname, "../dist/client");

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

const htmlFiles = (await walk(outputRoot)).filter((file) => file.endsWith(".html"));
for (const source of htmlFiles) {
  const relative = path.relative(outputRoot, source);
  if (relative === "index.html" || relative === "404.html" || relative.endsWith(`${path.sep}index.html`)) continue;
  const destination = path.join(outputRoot, relative.slice(0, -5), "index.html");
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.copyFile(source, destination);
}

await fs.writeFile(path.join(outputRoot, ".nojekyll"), "");
