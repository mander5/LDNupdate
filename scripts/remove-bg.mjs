import { PNG } from 'pngjs';
import jpeg from 'jpeg-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../src/assets');

const logos = [
  { input: 'logo1.png', output: 'logo1.png' },
  { input: 'logo2.jpg', output: 'logo2.png' },
  { input: 'logo3.png', output: 'logo3.png' },
  { input: 'logo4.png', output: 'logo4.png' },
  { input: 'logo5.png', output: 'logo5.png' },
];

function colorDist(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1-r2)**2 + (g1-g2)**2 + (b1-b2)**2);
}

function decodeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') {
    const raw = jpeg.decode(fs.readFileSync(filePath), { useTArray: true });
    // jpeg-js gives RGBA already
    return { width: raw.width, height: raw.height, data: Buffer.from(raw.data) };
  }
  const png = PNG.sync.read(fs.readFileSync(filePath));
  return { width: png.width, height: png.height, data: png.data };
}

function sampleBgColor(data, width, height) {
  // Sample a ring of pixels around the border and pick the most common approximate color
  const samples = [];
  const step = 4;
  for (let x = 0; x < width; x += step) {
    samples.push([x, 0]);
    samples.push([x, height - 1]);
  }
  for (let y = 0; y < height; y += step) {
    samples.push([0, y]);
    samples.push([width - 1, y]);
  }

  const counts = {};
  for (const [x, y] of samples) {
    const idx = (y * width + x) * 4;
    // Quantize to nearest 8 to group similar colors
    const r = Math.round(data[idx]     / 8) * 8;
    const g = Math.round(data[idx + 1] / 8) * 8;
    const b = Math.round(data[idx + 2] / 8) * 8;
    const key = `${r},${g},${b}`;
    counts[key] = (counts[key] || 0) + 1;
  }

  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return top.split(',').map(Number);
}

function removeBg(inputPath, outputPath, tolerance = 50) {
  const { width, height, data } = decodeImage(inputPath);
  const [bgR, bgG, bgB] = sampleBgColor(data, width, height);
  console.log(`  bg colour sampled: rgb(${bgR}, ${bgG}, ${bgB})`);

  const out = new PNG({ width, height, filterType: -1 });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i], g = data[i+1], b = data[i+2];
      const dist = colorDist(r, g, b, bgR, bgG, bgB);

      out.data[i]     = r;
      out.data[i + 1] = g;
      out.data[i + 2] = b;

      if (dist < tolerance) {
        out.data[i + 3] = 0;
      } else if (dist < tolerance * 1.6) {
        // soft edge — fade out anti-aliasing fringe
        out.data[i + 3] = Math.round(255 * (dist - tolerance) / (tolerance * 0.6));
      } else {
        out.data[i + 3] = 255;
      }
    }
  }

  fs.writeFileSync(outputPath, PNG.sync.write(out));
  console.log(`  saved → ${path.basename(outputPath)}`);
}

for (const { input, output } of logos) {
  const inputPath  = path.join(assetsDir, input);
  const outputPath = path.join(assetsDir, output);
  console.log(`\nProcessing ${input}…`);
  try {
    removeBg(inputPath, outputPath);
  } catch (err) {
    console.error(`  FAILED: ${err.message}`);
  }
}

console.log('\nDone.');
