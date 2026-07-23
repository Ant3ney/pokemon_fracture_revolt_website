import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname:
          "/Ant3ney/pokemon_fr_dialog_proto/main/public/game/dialog-background.png",
        search: "",
      },
    ],
  },
};

export default nextConfig;
