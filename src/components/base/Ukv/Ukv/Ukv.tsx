'use client'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import React from 'react'
import '../Ukv.modules.css'

interface UkvProps {
  src?: string
  imgPosition?: string
  title?: string
  english?: string
  japanese?: string
  itemsPage?: boolean
  q?: string
  srcSp?: string
}

const Ukv: React.FC<UkvProps> = ({
  src,
  srcSp,
  imgPosition = '',
  itemsPage = false,
  title,
  english,
  japanese,
  q,
}) => {
  const getOptimizedImageUrl = (url: string, width: number) => {
    try {
      const baseUrl = url.split('/upload/')[0] + '/upload/'
      const imagePath = url.split('/upload/')[1]
      return `${baseUrl}w_${width},f_auto,q_auto,c_scale,dpr_auto/${imagePath}`
    } catch (error) {
      // エラーが発生した場合は元のURLを返す
      console.error('Error optimizing image URL:', error)
      return url
    }
  }
  return (
    <div>
      <div className="absolute left-0 top-0 z-0 hidden h-[17.01vw] w-full border-b-1 border-black sm:block"></div>
      <div className="sm:mb-xl sm:flex sm:items-end ">
        <div className="relative h-[140vw] w-full overflow-hidden sm:z-10 sm:flex sm:h-[48vw] sm:w-5xl sm:items-center sm:justify-center">
          <picture>
            {/* PC用画像 */}
            <source
              media="(min-width: 640px)"
              srcSet={
                src
                  ? `${getOptimizedImageUrl(src, 1440)} 1440w,
            ${getOptimizedImageUrl(src, 1024)} 1024w`
                  : ''
              }
              
            />
            {/* SP用画像 */}
            <source
              media="(max-width: 639px)"
              srcSet={
                srcSp
                  ? `${getOptimizedImageUrl(srcSp, 639)} 639w,
                ${getOptimizedImageUrl(srcSp, 480)} 480w`
                  : ''
              }
              sizes="100vw"
            />
            <CldImage
              src={src ? getOptimizedImageUrl(src, 1024) : ''}
              width={1440}
              height={960}
              alt="key visual"
              className={`absolute left-0 sm:top-0 h-full w-auto sm:block ${imgPosition} object-cover w-full`}
              style={{ objectFit: 'cover' }}
              priority={!itemsPage}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 1024px, 1440px"
            />
          </picture>
        </div>

        <div className="hidden flex-1 sm:mb-sm sm:ml-md sm:mr-lg sm:block sm:w-auto">
          <h2 className="sm:mb-sm sm:text-md-pc">
            {title}
            <span className={`${q && itemsPage ? '' : 'hidden'} `}>
              :{' '}
              {q === 'newarrivals'
                ? 'NewArrivals'
                : q
                  ? q.charAt(0).toUpperCase() + q.slice(1)
                  : undefined}
            </span>
          </h2>

          {/* Its itemsPage */}
          <ul
            className={`${itemsPage ? 'sm:block' : 'sm:hidden'} sm:flex sm:flex-col sm:gap-xxs`}
          >
            <li>
              <Link href="/items?q=newarrivals" className="sm:hover:text-gray">
                NewArrivals
              </Link>
            </li>
            {/* <li>
              <Link href="/items?q=gifts" className="sm:hover:text-gray">
                Gifts
              </Link>
            </li> */}
            <li>
              <Link href="/items?q=unisex" className="sm:hover:text-gray">
                Unisex
              </Link>
            </li>
            <li>
              <Link href="/items?q=women" className="sm:hover:text-gray">
                Women
              </Link>
            </li>
            <li>
              <Link href="/items?q=men" className="sm:hover:text-gray">
                Men
              </Link>
            </li>
            <li>
              <Link href="/items?q=accessories" className="sm:hover:text-gray">
                Accessories
              </Link>
            </li>
          </ul>

          {/* Not itemsPage */}
          <div className={`${itemsPage ? 'sm:hidden' : 'sm:block '}`}>
            <p className="mb-xxs leading-md">{english}</p>
            <p className="leading-md">{japanese}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Ukv
