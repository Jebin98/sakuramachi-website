#!/usr/bin/env node
/**
 * Verifies every link in the built static export.
 *
 *  - in-page anchors  -> the target id must exist in out/index.html
 *  - local assets     -> the file must exist under out/
 *  - outbound links   -> must answer 2xx/3xx over the network
 *
 * Instagram serves a 400 to desktop user agents on its ig.me deep links, so the
 * outbound checks go out with a mobile user agent, which is what real visitors send.
 */
import { readFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const OUT = path.resolve(process.cwd(), "out");
const PAGE = path.join(OUT, "index.html");

const MOBILE_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";

const uniq = (xs) => [...new Set(xs)];
const matchAll = (html, re) => uniq([...html.matchAll(re)].map((m) => m[1]));

let html;
try {
  html = await readFile(PAGE, "utf8");
} catch {
  console.error(`✗ ${PAGE} not found. Run "npm run build" first.`);
  process.exit(1);
}

const hrefs = matchAll(html, /href="([^"]+)"/g);
const srcs = uniq([
  ...matchAll(html, /\ssrc="([^"]+)"/g),
  ...matchAll(html, /poster="([^"]+)"/g),
]);
const ids = new Set(matchAll(html, /\sid="([^"]+)"/g));

const failures = [];
const results = [];

// 1. In-page anchors
for (const href of hrefs.filter((h) => h.startsWith("#"))) {
  const id = href.slice(1);
  const ok = ids.has(id);
  results.push([ok, `anchor  ${href}`, ok ? "target present" : "NO ELEMENT WITH THAT ID"]);
  if (!ok) failures.push(href);
}

// 2. Local assets referenced by the page
for (const ref of uniq([...hrefs, ...srcs]).filter((r) => r.startsWith("/") && !r.startsWith("//"))) {
  const file = path.join(OUT, decodeURIComponent(ref.split("?")[0]));
  let ok = true;
  try {
    await access(file, constants.R_OK);
  } catch {
    ok = false;
  }
  results.push([ok, `asset   ${ref}`, ok ? "on disk" : "MISSING FROM out/"]);
  if (!ok) failures.push(ref);
}

// 3. Outbound links
for (const url of hrefs.filter((h) => /^https?:\/\//.test(h))) {
  let ok = false;
  let note = "";
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: { "user-agent": MOBILE_UA, accept: "text/html,*/*" },
      signal: AbortSignal.timeout(20_000),
    });
    ok = res.status >= 200 && res.status < 400;
    note = `HTTP ${res.status}`;
  } catch (err) {
    note = `request failed: ${err.message}`;
  }
  results.push([ok, `outbound ${url}`, note]);
  if (!ok) failures.push(url);
}

for (const [ok, label, note] of results) {
  console.log(`${ok ? "✓" : "✗"} ${label}  —  ${note}`);
}

console.log(`\n${results.length - failures.length}/${results.length} links OK`);
if (failures.length) {
  console.error(`\n✗ ${failures.length} broken:\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
