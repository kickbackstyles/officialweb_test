import { PrismaClient } from '@prisma/client'
import type { Metadata } from 'next'
import Link from 'next/link'
import AboutSection from '../../components/base/AboutSection/AboutSection'
import Footer from '../../components/base/Footer/Footer'
import Header from '../../components/base/Header/Header'
import ProjectsSection from '../../components/base/ProjectsSection/ProjectsSection'
import Ukv from '../../components/base/Ukv/Ukv/Ukv'
import ImageComp from '../../components/image/ImageComp/ImageComp'

export const metadata: Metadata = {
  title: 'Items | KickBackStyles',
  description:
    'KickbackStyles初のアイテムが登場! With All My Love ロングスリーブTシャツをチェック!',
  openGraph: {
    title: 'Items | KickBackStyles',
    description:
      'KickbackStyles初のアイテムが登場! With All My Love ロングスリーブTシャツをチェック!',
    images: [
      { url: '/ogp/thumbnail.png', width: 1200, height: 630 },
    ],
  },
}

const prisma = new PrismaClient()

const getItems = async (searchParams: {
  [key: string]: string | string[] | undefined
}) => {
  const paramValue = searchParams['q'] || ''
  // 配列の場合は最初の要素を使用、文字列の場合はそのまま使用
  const params =
    typeof paramValue === 'string' ? paramValue : paramValue[0] || ''

  if (params !== '') {
    const items = await prisma.item.findMany({
      where: {
        tags: {
          some: {
            tag: {
              title: {
                contains: params, // searchParamsと同じtitleを持つTagを持つItemを取得
                mode: 'insensitive', // 大文字小文字を区別しない場合
              },
            },
          },
        },
      },
      // include: {
      //     tags: true // タグ情報も取得する場合
      // }
    })
    return { items, params }
  } else {
    const items = await prisma.item.findMany()
    return { items, params: '' }
  }
}

const Items = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const { items, params } = await getItems(searchParams)

  const itemsPage = true

  return (
    <div>
      <Header color="black" />
      <Ukv
        src="https://res.cloudinary.com/dvahtyhva/image/upload/v1753092258/IMG_1490_a5oavy.jpg"
        srcSp="https://res.cloudinary.com/dvahtyhva/image/upload/v1753092258/IMG_1490_a5oavy.jpg"
        imgPosition="bottom-0"
        itemsPage={itemsPage}
        title="Items"
        q={params}
      />
      <div className="mb-xl ml-md mt-3xl flex gap-xl sm:hidden">
        <h2 className="mb-md text-md font-bold">Items</h2>

        <ul className="flex flex-col gap-md">
          <li>
            <Link
              href="/items?q=newarrivals"
              className={`${params === 'newarrivals' ? 'font-bold' : ''}`}
            >
              NewArrivals
            </Link>
          </li>
          {/* <li>
            <Link
              href="/items?q=gifts"
              className={`${params === 'gifts' ? 'font-bold' : ''}`}
            >
              Gifts
            </Link>
          </li> */}
          <li>
            <Link
              href="/items?q=unisex"
              className={`${params === 'unisex' ? 'font-bold' : ''}`}
            >
              Unisex
            </Link>
          </li>
          <li>
            <Link
              href="/items?q=women"
              className={`${params === 'women' ? 'font-bold' : ''}`}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              href="/items?q=men"
              className={`${params === 'men' ? 'font-bold' : ''}`}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              href="/items?q=accessories"
              className={`${params === 'accessories' ? 'font-bold' : ''}`}
            >
              Accessories
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="flex flex-wrap">
          {items.map((item, index) => (
            <li
              className={`relative flex h-[72.8vw] w-1/2 items-center border-black bg-white sm:h-[44.41vw] sm:w-[calc(100%/3)] 
                                ${index === 0
                  ? 'border-1'
                  : index === 1
                    ? 'border-y-1 border-r-1'
                    : index === 2
                      ? 'border-b-1 border-r-1 sm:border-y-1 sm:border-r-1'
                      : index > 2
                        ? 'border-b-1 border-r-1'
                        : ''
                }`}
              key={index}
            >
              <Link
                href={`/items/${item.id}`}
                className="w-full sm:flex sm:h-full sm:items-center sm:justify-center overflow-hidden"
              >
                <ImageComp
                  src={`${item.thumbnailImage}`}
                  width={400}
                  height={400}
                  sizes="100vw"
                  alt={item.title}
                  className="h-auto w-full object-cover"
                />

                <div className="absolute bottom-xs left-sm z-10">
                  <p className="text-sm leading-md text-white sm:text-sm-pc">
                    {item.title}
                  </p>

                  <div className="flex gap-xxs sm:gap-xxxs">
                    <p
                      className={`${item.discountPrice ? 'block' : 'hidden'} flex items-center border-1 border-black px-xxs text-xs text-white sm:px-xxxs sm:text-xs-pc`}
                    >
                      40%off
                    </p>

                    <div>
                      <p
                        className={`realPrice ${item.discountPrice ? 'text-xs text-white line-through sm:text-xs-pc ' : 'text-white'}`}
                      >
                        {item.price} JPY
                      </p>
                      {item.discountPrice && (
                        <p className="leading-[120%] text-white">{item.discountPrice} JPY</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default Items
