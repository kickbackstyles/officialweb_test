import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import localfont from 'next/font/local'
import { Providers } from '../../providers'
import { GoogleAnalytics } from "@next/third-parties/google";
import NextTopLoader from 'nextjs-toploader';
import StructuredData from '../components/StructuredData'
import ServiceWorker from '../components/ServiceWorker'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'オフィシャルサイト | KickBackStyles',
    template: '%s | KickBackStyles'
  },
  description:
    'KickBackStyles公式サイト | 7月25日 21:00〜 Release New Items...! 新たな夏のアイテム、バックプリントTシャツとナイロンショーツが登場! Check it out!',
  keywords: ['KickBackStyles', 'ファッション', 'Tシャツ', 'ナイロンショーツ', 'バックプリントTシャツ'],
  authors: [{ name: 'KickBackStyles' }],
  creator: 'KickBackStyles',
  publisher: 'KickBackStyles',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kickbackstyles.com'), // 実際のドメインに変更してください
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://kickbackstyles.com', // 実際のドメインに変更してください
    title: 'オフィシャルサイト | KickBackStyles',
    description:
      'KickBackStyles公式サイト | 7月25日 21:00〜 Release New Items...! 新たな夏のアイテム、バックプリントTシャツとナイロンショーツが登場! Check it out!',
    siteName: 'KickBackStyles',
    images: [
      { 
        url: '/ogp/thumbnail.png', 
        width: 1200, 
        height: 630,
        alt: 'KickBackStyles - オフィシャルサイト'
      },
    ],
  },
  
  verification: {
    google: 'your-google-verification-code', // Google Search Consoleの検証コード
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'KickBackStyles',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#00a6f4',
    'msapplication-config': '/browserconfig.xml',
  },
}

const hackNard = localfont({
  src: [
    {
      path: '/fonts/HackNerdFont-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/HackNerdFont-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  return (
    <html lang="ja" className="">
      <body
        className={`${hackNard.className} overflow-x-hidden text-sm text-black sm:text-sm-pc`}
      >
        <NextTopLoader
          color="#00a6f4"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          shadow="none"
        />
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <SpeedInsights />
        <StructuredData />
        <ServiceWorker />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
