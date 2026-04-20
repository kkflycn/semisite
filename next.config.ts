import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/semisite" : "",
  allowedDevOrigins: ["172.23.122.221"],
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
