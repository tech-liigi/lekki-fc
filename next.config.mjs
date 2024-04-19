/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "86rhna6o",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_SECRET_TOKEN: "sklzk83A0DzTkQePCAxcJUTsENVrGvuiFbETw3xFeRt1XjcZ8gOLIzoXyw5A8zBlV99qWAUkySPPxFejyENBc6yOeMrX1IoCE54DCyxafznRYilR2Jwo2kBNg7WRov1nbB1Pe8tyjT44UwFr3IyzTAqLlK4ruXEVdFP8WoflqKwfxfm5easS",
  },
};

export default nextConfig;
