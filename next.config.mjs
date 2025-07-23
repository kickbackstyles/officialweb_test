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
  // SEO最適化
  compress: true,
  poweredByHeader: false,
  // リダイレクト設定
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  // ヘッダー設定
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
