import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import localfont from 'next/font/local'
import { Providers } from '../../providers'
import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID} />
        <SpeedInsights />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
