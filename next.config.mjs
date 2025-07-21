/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 画像の最適化を有効化
    unoptimized: false,
    // 必要な外部ドメインを追加
    domains: ['res.cloudinary.com'],
  },
  // スクリプトの最適化
  swcMinify: true,
  // 実験的な最適化機能を有効化
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
