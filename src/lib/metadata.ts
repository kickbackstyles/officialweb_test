import type { Metadata } from 'next'

interface GenerateMetadataOptions {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = '/ogp/thumbnail.png',
  url,
  type = 'website',
  noIndex = false
}: GenerateMetadataOptions): Metadata {
  const siteTitle = `${title} | KickBackStyles`
  const siteUrl = url || 'https://kickbackstyles.com'

  return {
    title,
    description,
    keywords: ['KickBackStyles', ...keywords],
    robots: noIndex ? {
      index: false,
      follow: false,
    } : {
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
    openGraph: {
      title: siteTitle,
      description,
      url: siteUrl,
      siteName: 'KickBackStyles',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'ja_JP',
      type,
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateProductMetadata(
  productName: string,
  description: string,
  price: number,
  image: string,
  url: string,
  tags: string[] = []
): Metadata {
  return generateMetadata({
    title: productName,
    description: `${productName} - ${description}。価格: ${price}円。`,
    keywords: [productName, 'ファッション', 'アパレル', ...tags],
    image,
    url,
    type: 'website',
  })
}

export function generateArticleMetadata(
  title: string,
  description: string,
  image: string,
  url: string,
  publishedTime?: string,
  modifiedTime?: string
): Metadata {
  const metadata = generateMetadata({
    title,
    description,
    image,
    url,
    type: 'article',
  })

  if (publishedTime || modifiedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
    }
  }

  return metadata
} 