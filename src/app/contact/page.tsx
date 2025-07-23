import type { Viewport, Metadata } from 'next'
import ContactComp from '../../components/base/Contact/Contact'
import Footer from '../../components/base/Footer/Footer'
import Header from '../../components/base/Header/Header'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'KickBackStylesへのお問い合わせはこちらから。商品について、イベントについて、その他ご質問がございましたらお気軽にお問い合わせください。',
  keywords: ['KickBackStyles', 'お問い合わせ', 'コンタクト', 'サポート', 'カスタマーサービス'],
  openGraph: {
    title: 'Contact | KickBackStyles',
    description: 'KickBackStylesへのお問い合わせはこちらから。商品について、イベントについて、その他ご質問がございましたらお気軽にお問い合わせください。',
    images: [
      { 
        url: '/ogp/thumbnail.png', 
        width: 1200, 
        height: 630,
        alt: 'KickBackStyles Contact'
      },
    ],
  },
  alternates: {
    canonical: '/contact',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const Contact = (): JSX.Element => {
  return (
    <div>
      <Header color="black" />
      <ContactComp />
      <Footer />
    </div>
  )
}

export default Contact
