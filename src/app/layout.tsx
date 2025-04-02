import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import localfont from 'next/font/local'
import { Providers } from '../../providers'
import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics'
import NextTopLoader from 'nextjs-toploader';
import './globals.css'

export const metadata: Metadata = {
  title: 'オフィシャルサイト | KickBackStyles',
  description:
    'KickBackStyles公式サイト | 4/1 21:00〜 初アイテム発売！ WAMLロングスリーブTシャツが登場。今ならShopify10名様限定40%オフセール実施中🔥 限定セールをお見逃しなく！',
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
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID} />
        <SpeedInsights />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
