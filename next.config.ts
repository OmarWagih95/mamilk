import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains:["tyfa2qhumr.ufs.sh","images.pexels.com","example.com"],
          remotePatterns: [
                  {
                    protocol: "https",
                    hostname: "images.pexels.com",
                  },
          ]
      
      }
};

export default nextConfig;
