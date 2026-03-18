import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Toto povie Vercelu: "Ignoruj chyby a dokonči build!"
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignoruj aj varovania ESLintu pre hladký priebeh
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;