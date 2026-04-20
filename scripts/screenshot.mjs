/**
 * Screenshot tool for visual QA.
 * Usage: node scripts/screenshot.mjs [page-path]
 * Examples:
 *   node scripts/screenshot.mjs              # screenshots all pages
 *   node scripts/screenshot.mjs /            # just homepage
 *   node scripts/screenshot.mjs /equipment   # equipment list
 */

import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../.screenshots");

const BASE_URL = "http://localhost:3000";

const ALL_PAGES = [
  { path: "/", name: "home" },
  { path: "/equipment", name: "equipment-list" },
  { path: "/equipment/ps-001", name: "equipment-detail" },
  { path: "/services", name: "services" },
  { path: "/about", name: "about" },
  { path: "/contact", name: "contact" },
  { path: "/nonexistent", name: "404" },
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

async function screenshot(page, url, filePath) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });

  // Scroll slowly through full page to trigger all whileInView animations
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  const step = 400;
  for (let y = 0; y <= pageHeight; y += step) {
    await page.evaluate((pos) => window.scrollTo(0, pos), y);
    await page.waitForTimeout(150);
  }
  // Wait for all animations to complete (do NOT scroll back — keeps opacity:1)
  await page.waitForTimeout(1000);

  await page.screenshot({ path: filePath, fullPage: true });
  console.log(`  ✓ ${filePath.replace(OUT_DIR + "/", "")}`);
}

async function main() {
  const targetPath = process.argv[2];
  const pages = targetPath
    ? ALL_PAGES.filter((p) => p.path === targetPath) || [
        { path: targetPath, name: targetPath.replace(/\//g, "-").slice(1) || "home" },
      ]
    : ALL_PAGES;

  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ args: ["--no-sandbox"] });

  for (const viewport of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const pg = await ctx.newPage();
    console.log(`\n[${viewport.name} ${viewport.width}×${viewport.height}]`);

    for (const { path, name } of pages) {
      const file = join(OUT_DIR, `${viewport.name}-${name}.png`);
      await screenshot(pg, `${BASE_URL}${path}`, file);
    }

    await ctx.close();
  }

  await browser.close();
  console.log(`\nDone. Screenshots in ${OUT_DIR}`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
