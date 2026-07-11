import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 85], // Add 85 to the list
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: true, // If using styled-components
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
