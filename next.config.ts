import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  distDir: "dist",
  turbopack: {
    root: "/home/samarth/portfolios/portfolio-resume",
  },
};

export default nextConfig;
