import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // No server needed — static export is ~0 MB RAM vs 5 GB for `next start`.
  // reactCompiler adds Babel transform + memory for little gain on static content.
  reactCompiler: false,
};

export default nextConfig;
