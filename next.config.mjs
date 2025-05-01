/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  // Très important pour GitHub Pages :
  basePath: '/portfolio-website', // Remplacez par le nom de votre dépôt GitHub
  images: {
    unoptimized: true,
  },
}

export default nextConfig
