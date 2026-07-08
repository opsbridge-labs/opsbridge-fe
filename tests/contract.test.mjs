import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const app = read("src/features/dashboard/dashboard.tsx");
const main = read("src/main.tsx");

assert.match(app, /OpsBridge/);
assert.match(app, /D3 trend chart/);
assert.match(main, /createRoot/);
