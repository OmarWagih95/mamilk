import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains:["tyfa2qhumr.ufs.sh","images.pexels.com","example.com"],
  //         remotePatterns: [
  //                 {
  //                   protocol: "https",
  //                   hostname: "images.pexels.com",
  //                 },
  //         ]
      
  //     }
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tyfa2qhumr.ufs.sh",
      },
            {
              protocol: "https",
              hostname: "images.pexels.com",

            },
            {
              protocol: "https",
              hostname: "utfs.io",

            },
            {
              protocol: "https",
              hostname: "nos3hy6pzl.ufs.sh",

            },
    ]

}
};

export default nextConfig;
