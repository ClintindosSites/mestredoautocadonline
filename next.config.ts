import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mestredoautocad.com.br",
          },
        ],
        destination: "https://mestredaarquitetura.com.br/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.mestredoautocad.com.br",
          },
        ],
        destination: "https://mestredaarquitetura.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
