'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CldImage } from 'next-cloudinary'
import { useEffect, useRef } from 'react'
import Button from '../../button/Button/Button'
import { getOptimizedImageUrl } from '../../Hooks/getOptimizedUrl'

// ScrollTriggerの初期化
gsap.registerPlugin(ScrollTrigger)

const AboutSection = (): JSX.Element => {
  const ref = useRef(null)


  useEffect(() => {
    const windowWidth = window.innerWidth

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: windowWidth < 640 ? 'top+=10% bottom' : 'top+=20% bottom',
          end: windowWidth < 640 ? 'bottom-=10% top' : 'bottom-=20% top',
          scrub: true,
        },
      })
      .to(ref.current, {
        y: window.innerWidth < 640 ? '+=250' : '+=300',
        ease: 'none',
      })
  }, [])

  return (
    <div className="sec-aboutus">
      <div className="flex h-[161.8vw] w-full items-center justify-center overflow-hidden sm:h-[48vw]">
        <div className="relative size-full ">
          <picture>
            {/* PC用画像 */}
            <source
              media="(min-width: 1024px)"
              srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743104649/IMG_1255_sshe9q.jpg', 2048)} 2048w,
                ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743104649/IMG_1255_sshe9q.jpg', 1440)} 1440w`}
              sizes="2048px"
            />
            {/* タブレット用画像 */}
            <source
              media="(min-width: 640px)"
              srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743104649/IMG_1255_sshe9q.jpg', 1024)} 1024w,
                ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743104649/IMG_1255_sshe9q.jpg', 768)} 768w`}
              sizes="1024px"
            />
            {/* SP用画像 */}
            <source
              media="(max-width: 639px)"
              srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743241755/IMG_1278_ni8hxd_s71vqh.jpg', 828)} 828w,
                ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743241755/IMG_1278_ni8hxd_s71vqh.jpg', 640)} 640w`}
              sizes="100vw"
            />
            <CldImage
              src={getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743104649/IMG_1255_sshe9q.jpg', 1024)}
              ref={ref}
              width={1440}
              height={960}
              className="absolute object-cover top-[-40%] h-full w-auto scale-125 sm:left-auto sm:top-[-30%] sm:block sm:h-auto sm:w-full sm:scale-110"
              alt="aboutus image"
              loading="lazy"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 1024px, 1440px"
              quality={85}
            />
          </picture>
        </div>
        <div className="absolute z-10 flex flex-col gap-md">
          <CldImage
            src={getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743103642/IMG_2467_nivvkc.png', 1024)}
            width={1024}
            height={500}
            alt="with all my love"
            className="mb-md h-auto w-[86vw] object-cover sm:mb-sm sm:w-5xl"
            loading="lazy"
            sizes="(max-width: 639px) 86vw, 1024px"
          />
          <div className="mx-auto w-[50vw] sm:flex sm:justify-center sm:gap-xl">
            <Button
              href="https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr"
              text="@kickbackstyles.official"
              color="white"
              size="sm"
              sizePc="sm-pc"
              className="mb-lg sm:mb-0 sm:w-2xl"
            />
            <Button
              href="/aboutus"
              text="AboutUs"
              color="white"
              size="sm"
              sizePc="sm-pc"
              className="sm:w-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
