import type { Metadata } from 'next'
import AU from './AU/AU'

export const metadata: Metadata = {
  title: 'AboutUs',
  description:
    'KickBackStylesは、「みんなに愛を届けよう」をコンセプトに生まれたアパレルブランドです。ファッションを通じて、心温まるつながりを広げていきます。',
  keywords: ['KickBackStyles', 'アパレルブランド', 'ファッション', '愛を届ける', 'コンセプト', 'ブランドストーリー'],
  openGraph: {
    title: 'AboutUs | KickBackStyles',
    description:
      'KickBackStylesは、「みんなに愛を届けよう」をコンセプトに生まれたアパレルブランドです。ファッションを通じて、心温まるつながりを広げていきます。',
    images: [
      { 
        url: '/ogp/thumbnail.png', 
        width: 1200, 
        height: 630,
        alt: 'KickBackStyles About Us'
      },
    ],
  },
  alternates: {
    canonical: '/aboutus',
  },
}

const AboutUs = (): JSX.Element => {
  return <AU />
}

export default AboutUs
