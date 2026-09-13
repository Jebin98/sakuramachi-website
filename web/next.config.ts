import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export: the page has no server, no data layer and no auth. */
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
