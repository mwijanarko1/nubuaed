import { createSecurityHeaders } from "./src/lib/securityHeaders.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: createSecurityHeaders(process.env.NODE_ENV),
      },
    ];
  },
};

export default nextConfig;
