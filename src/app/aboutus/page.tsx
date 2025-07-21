import type { Metadata } from 'next'
import AU from './AU/AU'

export const metadata: Metadata = {
  title: 'AboutUs | KickBackStyles',
  description:
    'KickBackStylesは、「みんなに愛を届けよう」をコンセプトに生まれたアパレルブランドです。ファッションを通じて、心温まるつながりを広げていきます。',
  openGraph: {
    title: 'AboutUs | KickBackStyles',
    description:
      'KickBackStylesは、「みんなに愛を届けよう」をコンセプトに生まれたアパレルブランドです。ファッションを通じて、心温まるつながりを広げていきます。',
    images: [
      { url: '/ogp/thumbnail.png', width: 1200, height: 630 },
    ],
  },
}

const AboutUs = (): JSX.Element => {
  return <AU />
}

export default AboutUs
