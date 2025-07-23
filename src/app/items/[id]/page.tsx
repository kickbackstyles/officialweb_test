import { PrismaClient } from '@prisma/client'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '../../../components/base/Footer/Footer'
import Header from '../../../components/base/Header/Header'
import SingleUkv from '../../../components/base/Ukv/SIngleUkv/SingleUkv'
const prisma = new PrismaClient()

export const generateMetadata = async ({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> => {
  // ブログの詳細データを取得する関数
  const itemData = await prisma.item.findUnique({
    where: { id: Number(params.id) },
    include: {
      colors: {
        include: {
          images: true, // colorsの中のimagesを取得
        },
      },
      sizes: true, // sizesも取得
      tags: {
        // TagsOnItemsを通じてtagsを取得
        include: {
          tag: true,
        },
      },
    },
  })

  if (!itemData) {
    return {
      title: 'アイテムが見つかりません',
      description: 'お探しのアイテムは見つかりませんでした。',
    }
  }

  const tags = itemData.tags.map(t => t.tag.title).join(', ')
  const price = itemData.discountPrice || itemData.price

  return {
    title: itemData.title,
    description: `${itemData.title} - ${itemData.context || 'KickBackStylesのアイテム'}。価格: ${price}円。${tags}`,
    keywords: ['KickBackStyles', itemData.title, 'ファッション', 'アパレル', ...itemData.tags.map(t => t.tag.title)],
    openGraph: {
      title: `${itemData.title} | KickBackStyles`,
      description: `${itemData.title} - ${itemData.context || 'KickBackStylesのアイテム'}。価格: ${price}円。`,
      images: [
        { 
          url: itemData.thumbnailImage || '/ogp/thumbnail.png', 
          width: 1200, 
          height: 630,
          alt: itemData.title
        }
      ],
      type: 'website',
    },
    alternates: {
      canonical: `/items/${params.id}`,
    },
  }
}

interface Image {
  id: number
  url: string
  alt: string
}

interface ItemColor {
  id: number
  title: string
  itemId: number
  images: Image[]
}

interface Tag {
  id: number
  title: string
  itemId: number
}

interface Size {
  id: number
  title: string
  itemId: number
  images: Image[]
}

type Item = {
  id: number
  title: string
  context?: string
  price: number
  colors?: ItemColor[]
  sizes: Size[]
  tags: Tag[]
  baseUrl?: string
}

const DetailPage = async ({ params }: { params: { id: number } }) => {
  const item = await prisma.item.findUnique({
    where: { id: Number(params.id) },
    include: {
      colors: {
        include: {
          images: true, // colorsの中のimagesを取得
        },
      },
      sizes: true, // sizesも取得
      tags: {
        // TagsOnItemsを通じてtagsを取得
        include: {
          tag: true,
        },
      },
     
    },
  })



  if (!item) {
    notFound()
  }

  return (
    <div>
      <Header color="black" />
      <SingleUkv itemData={item as unknown as Item} />

      <Footer />
    </div>
  )
}
export default DetailPage
