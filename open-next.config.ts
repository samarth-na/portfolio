// default open-next.config.ts file created by @opennextjs/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

const cloudflareConfig = defineCloudflareConfig({
  // For best results consider enabling R2 caching
  // See https://opennext.js.org/cloudflare/caching for more details
  // incrementalCache: r2IncrementalCache
});

export default {
  ...cloudflareConfig,
  // Explicit build command to avoid recursion when `bun run build` is
  // `opennextjs-cloudflare build`. OpenNext will run `bun run build:next`
  // (which is `next build`) instead of `bun run build` itself.
  // See https://opennext.js.org/cloudflare/cli#build-command
  buildCommand: "bun run build:next",
};
