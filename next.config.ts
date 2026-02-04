import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"h3.googleusercontent.com  "
      }
    ]
  }
};

export default nextConfig;
