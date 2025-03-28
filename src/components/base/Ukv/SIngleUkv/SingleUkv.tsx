'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'
import { CldImage } from 'next-cloudinary'
import React, { useState } from 'react'
import Button from '../../../button/Button/Button'
import '../Ukv.modules.css'

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

interface Item {
  id: number
  title: string
  context?: string
  price: number
  colors?: ItemColor[]
  sizes: Size[]
  tags: Tag[]
}

interface SingleUkvProps {
  title?: string
  imgPosition?: string
  english?: string
  japanese?: string
  itemData: Item | Item[] | undefined
}

const SingleUkv: React.FC<SingleUkvProps> = ({ itemData, imgPosition }) => {
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

  const getOptimizedImageUrl = (url: string, width: number) => {
    try {
      const baseUrl = url.split('/upload/')[0] + '/upload/';
      const imagePath = url.split('/upload/')[1];
      return `${baseUrl}w_${width},f_auto,q_auto/${imagePath}`;
    } catch (error) {
      // エラーが発生した場合は元のURLを返す
      console.error('Error optimizing image URL:', error);
      return url;
    }
  };

  return (
    <div>
      <div className="absolute left-0 top-0 z-0 hidden h-[17.01vw] w-full border-b-1 border-black sm:block"></div>
      <div className=" sm:flex sm:items-end">
        <div className="relative hidden h-[144vw] w-full sm:z-10 sm:flex sm:h-[48vw] sm:w-5xl sm:items-center sm:justify-center sm:overflow-hidden">
          <CldImage
            src={`${getOptimizedImageUrl(selectedImages[0].url, 1440)}`}
            width={1440}
            height={1440}
            alt="key visual"
            className={`sm:absolute sm:h-auto sm:w-full ${imgPosition} `}
            style={{ objectFit: 'cover' }}
            priority
          />
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
                }}
              >
                {color.images.map((image, index) => (
                  <SplideSlide key={index}>
                    {/* 画像は縦より横の方が大きく切る */}
                    <img
                      src={`${getOptimizedImageUrl(image.url, 500)}`}
                      className="h-full object-cover"
                      alt={image.alt}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          ))}
          <div className="mb-xl ml-md mr-lg mt-md">
            <h2 className="mb-md text-md font-bold">{item?.title}</h2>
            <p className="mb-sm">{item?.context}</p>
            <p className="mb-lg font-bold">
              ¥{item?.price}
              <span className="font-normal">（税込）</span>
            </p>
            <Button href="/" text="Shop" color="black" size="sm" />
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
                  className={`size-3xl overflow-hidden sm:cursor-pointer  ${color.title === selectedColorTitle ? 'opacity-50' : 'opacity-100'}`}
                  tabIndex={index}
                >
                  <CldImage
                    src={`${getOptimizedImageUrl(color.images[0].url, 300)}`}
                    width={300}
                    height={400}
                    style={{ objectFit: 'cover' }}
                    className=""
                    alt="color1"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden flex-1 sm:mb-sm sm:ml-md sm:mr-lg sm:block sm:w-auto">
          <h2 className="sm:mb-sm sm:text-md-pc">{item?.title}</h2>

          <div className="relative block">
            <p className="sm:mb-xxxxs">{item?.context}</p>
            <p className="sm:mb-md sm:font-bold">
              ¥{item?.price}
              <span className="sm:font-normal">（税込）</span>
            </p>
            <Button href="/" text="Shop" color="black" sizePc="sm" />

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
                    className={`size-3xl overflow-hidden sm:size-xl sm:cursor-pointer ${color.title === selectedColorTitle ? 'opacity-50' : 'opacity-100'}`}
                    tabIndex={index}
                  >
                    <CldImage
                      src={`${getOptimizedImageUrl(color.images[0].url, 300)}`}
                      width={300}
                      height={300}
                      style={{ objectFit: 'cover' }}
                      className="sm:h-auto sm:w-full"
                      alt="color1"
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
                {color.images.map((image, index) => (
                  <li
                    key={index}
                    className={`${index === 0 ? 'hidden' : ''} relative flex w-[46vw] items-center border-y-1 border-r-1 border-black bg-white sm:h-4xl sm:w-1/2 sm:overflow-hidden`}
                  >
                    <CldImage
                      src={`${getOptimizedImageUrl(image.url, 500)}`}
                      width={500}
                      height={800}
                      style={{ objectFit: 'cover' }}
                      className="sm:size-full"
                      alt={image.alt}
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
