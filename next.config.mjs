/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/de",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
