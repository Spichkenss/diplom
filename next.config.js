/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")(
  "./src/app/config/localization/i18n.ts",
);

const nextConfig = withNextIntl({
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
});

module.exports = nextConfig;
