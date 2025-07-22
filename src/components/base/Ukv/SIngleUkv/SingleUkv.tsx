'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'
import { CldImage } from 'next-cloudinary'
import React, { useState } from 'react'
import { getOptimizedImageUrl } from '../../../Hooks/getOptimizedUrl'
import Button from '../../../button/Button/Button'
import '../Ukv.modules.css'

interface Image {
  id: number
  url: string
  alt: string
  priority?: number
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

interface Item {
  id: number
  title: string
  context?: string
  price: number
  colors?: ItemColor[]
  sizes: Size[]
  tags: Tag[]
  discountPrice?: number
}

interface SingleUkvProps {
  title?: string
  english?: string
  japanese?: string
  itemData: Item | Item[] | undefined
}

const SingleUkv: React.FC<SingleUkvProps> = ({ itemData }) => {
  // itemDataが配列の場合は最初の要素を取り出す
  const item = Array.isArray(itemData) ? itemData[0] : itemData
  // itemから色情報にアクセス
  const colorTitle = item?.colors?.[0]?.title || ''

  const [selectedColorTitle, setSelectedColorTitle] = useState<string | null>(
    colorTitle,
  )

  const handleColorClick = (title: string) => {
    setSelectedColorTitle(title) // 選択された色のタイトルを状態に保存
    const splideElements = document.querySelectorAll('.splide')
    splideElements.forEach((element) => {
      element.classList.add('is-overflow')
    })
  }

  const selectedColor = item?.colors?.find(
    (color) => color?.title === selectedColorTitle,
  )
  const selectedImages = selectedColor ? selectedColor?.images : []


  return (
    <div>
      <div className="absolute left-0 top-0 z-0 hidden h-[17.01vw] w-full border-b-1 border-black sm:block"></div>
      <div className=" sm:flex sm:items-end">
        <div className="relative hidden h-[144vw] w-full sm:z-10 sm:flex sm:h-[48vw] sm:w-5xl sm:items-center sm:justify-center sm:overflow-hidden">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${getOptimizedImageUrl(selectedImages[0]?.url, 1024)} 1024w,
                ${getOptimizedImageUrl(selectedImages[0]?.url, 768)} 768w`}
              sizes="(max-width: 767px) 767px, 1024px"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`${getOptimizedImageUrl(selectedImages[0]?.url, 767)} 767w,
                ${getOptimizedImageUrl(selectedImages[0]?.url, 480)} 480w`}
              sizes="(max-width: 767px) 767px, 1024px"
            />
            <CldImage
              src={`${getOptimizedImageUrl(selectedImages[0]?.url, 1024)} 1024w,
                ${getOptimizedImageUrl(selectedImages[0]?.url, 768)} 768w`}
              sizes="(max-width: 767px) 767px, 1024px"
              width={1024}
              height={1024}
              alt="key visual"
              className="sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2 sm:h-auto sm:w-full"
            />
          </picture>
        </div>

        {/* sp slider  */}
        <div className="sm:hidden">
          {item?.colors?.map((color, index) => (
            <div
              key={index}
              className={`${color.title !== selectedColorTitle ? 'hidden' : 'block'}`}
            >
              <Splide
                options={{
                  pagination: true,
                  arrows: false,
                  rewind: false,
                  updateOnMove: true,
                }}
              >
                {color.images
                  .sort((a, b) => (a.priority || 0) - (b.priority || 0))
                  .map((image, index) => (
                  <SplideSlide key={index}>
                    {/* 画像は縦より横の方が大きく切る */}
                    <CldImage
                      src={`${getOptimizedImageUrl(image?.url, 800)}`}
                      width={800}
                      height={800}
                      className="h-full object-cover"
                      alt={image?.alt}
                      loading="lazy"
                      sizes="(max-width: 767px) 100vw, 800px"
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          ))}
          <div className="mb-xl ml-md mr-lg mt-md">
            <h2 className="mb-md text-md font-bold">{item?.title}</h2>
            <p className="mb-md">{item?.context?.split('<br/>').map((line, index, array) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}</p>
            <div className="mb-lg flex gap-xs">
              <p
                className={`${item?.discountPrice ? 'block' : 'hidden'} flex items-center border-1 border-black px-xxs text-xs text-black sm:px-xxxs sm:text-xs-pc`}
              >
                40%off
              </p>
              <div className={`${item?.discountPrice ? 'block' : 'hidden'}`}>
                <p
                  className={`realPrice ${item?.discountPrice ? 'text-xs text-gray line-through sm:text-xs-pc ' : ''}`}
                >
                  {item?.price} JPY
                  <span
                    className={`font-normal ${item?.discountPrice ? 'hidden' : 'block'}`}
                  >
                    （Tax included）
                  </span>
                </p>
                {item?.discountPrice && (
                  <p className="font-bold leading-[120%]">
                    {item?.discountPrice} JPY
                    <span className="font-normal">（Tax included）</span>
                  </p>
                )}
              </div>
              <p
                className={`${item?.discountPrice ? 'hidden' : 'block'} mb-lg font-bold leading-[120%]`}
              >
                {item?.price} JPY
                <span className="font-normal">（Tax included）</span>
              </p>
            </div>
            <Button href="https://kickbackstyles-official.myshopify.com/" text="Shop" color="black" size="sm" />
          </div>
          <div className="mx-md mb-xl sm:hidden">
            <p className="mb-xs">
              Size:{' '}
              {item?.sizes?.map((size, index) => (
                <span key={index} className="">
                  {size.title}{' '}
                  <span
                    className={`${index === item?.colors?.length ? 'hidden' : ''}`}
                  >
                    /
                  </span>{' '}
                </span>
              ))}
            </p>
            <p className="mb-sm">
              Color: <span className="font-bold">{selectedColorTitle}</span>
            </p>
            <ul className="flex flex-wrap gap-xs">
              {item?.colors?.map((color, index) => (
                <li
                  key={index}
                  onClick={() => handleColorClick(color.title)}
                  className={`size-3xl overflow-hidden sm:cursor-pointer flex items-center justify-center   ${color.title === selectedColorTitle ? 'opacity-50' : 'opacity-100'}`}
                  tabIndex={index}
                >
                  <CldImage
                    src={`${getOptimizedImageUrl(color.images[0].url, 300)}`}
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover' }}
                    className=""
                    alt="color1"
                    loading="lazy"
                    sizes="300px"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden flex-1 sm:mb-sm sm:ml-md sm:mr-lg sm:block sm:w-auto">
          <h2 className="sm:mb-sm sm:text-md-pc">{item?.title}</h2>

          <div className="relative block">
            <p className="sm:mb-xxs">
              {item?.context?.split('<br/>').map((line, index, array) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>

            {/* discountPrice false */}
            <p
              className={`${item?.discountPrice ? 'hidden' : 'block'} sm:mb-md sm:font-bold`}
            >
              {item?.price} JPY
              <span className="sm:font-normal">（Tax included）</span>
            </p>
            {/* discountPrice true */}
            <div
              className={`${item?.discountPrice ? 'flex' : 'hidden'} sm:mb-md sm:gap-xxs`}
            >
              <p
                className={` flex items-center border-1 border-black px-xxs text-xs text-black sm:px-xxxs sm:text-xs-pc`}
              >
                40%off
              </p>
              <div className="">
                <p className="realPrice text-xs text-gray line-through sm:text-xs-pc">
                  {item?.price} JPY
                </p>

                {item?.discountPrice && (
                  <p className="font-bold leading-[120%]">
                    {item?.discountPrice} JPY
                    <span className="font-normal">（Tax included）</span>
                  </p>
                )}
              </div>
              <p
                className={`${item?.discountPrice ? 'hidden' : 'block'} mb-lg font-bold leading-[120%]`}
              >
                {item?.price} JPY
                <span className="font-normal">（Tax included）</span>
              </p>
            </div>
            <Button href="https://kickbackstyles-official.myshopify.com/" text="Shop" color="black" sizePc="sm" />

            <div className="mx-md mb-xl sm:absolute sm:mb-sm sm:ml-0 sm:mr-lg sm:mt-md sm:w-full sm:flex-1">
              <p className="mb-xs sm:mb-xxxs ">
                Size:{' '}
                {item?.sizes.map((size, index) => (
                  <span key={index} className="">
                    {size.title}{' '}
                    <span
                      className={`${index === item?.colors?.length ? 'hidden' : ''}`}
                    >
                      /
                    </span>{' '}
                  </span>
                ))}
              </p>
              <p className="mb-sm sm:mb-xxxs">
                Color: <span className="font-bold">{selectedColorTitle}</span>
              </p>
              <ul className="flex flex-wrap gap-xs sm:gap-xxxs">
                {item?.colors?.map((color, index) => (
                  <li
                    key={index}
                    onClick={() => handleColorClick(color.title)}
                    className={`size-3xl overflow-hidden sm:size-xl sm:cursor-pointer flex items-center justify-center ${color.title === selectedColorTitle ? 'opacity-50' : 'opacity-100'}`}
                    tabIndex={index}
                  >
                    <CldImage
                      src={`${getOptimizedImageUrl(color.images[0].url, 300)}`}
                      width={300}
                      height={300}
                      style={{ objectFit: 'cover' }}
                      className="sm:h-auto sm:w-full"
                      alt="color1"
                      loading="lazy"
                      sizes="300px"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:w-full sm:items-start">
        <div className="hidden sm:block sm:w-5xl">
          <div>
            {item?.colors?.map((color, index) => (
              <ul
                key={index}
                className={`flex flex-nowrap overflow-x-scroll sm:h-full sm:flex-wrap sm:overflow-x-auto ${color.title !== selectedColorTitle ? 'hidden' : 'block'}`}
              >
                {color.images
                  .sort((a, b) => (a.priority || 0) - (b.priority || 0))
                  .map((image, index) => (
                  <li
                    key={index}
                    className={`${index === 0 ? 'hidden' : ''} relative flex w-[46vw] items-center border-y-1 border-r-1 border-black bg-white sm:h-4xl sm:w-1/2 sm:overflow-hidden`}
                  >
                    <CldImage
                      src={`${getOptimizedImageUrl(image.url, 500)}`}
                      width={500}
                      height={500}
                      style={{ objectFit: 'cover' }}
                      className="sm:size-full"
                      alt={image.alt}
                      loading="lazy"
                      sizes="(max-width: 767px) 46vw, (max-width: 1023px) 500px, 1000px"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleUkv
