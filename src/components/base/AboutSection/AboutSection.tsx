'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CldImage } from 'next-cloudinary'
import { useEffect, useRef } from 'react'
import Button from '../../button/Button/Button'

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
          start: windowWidth < 640 ? 'top+=10% bottom' : 'top+=20% bottom', // スクロール開始位置
          end: windowWidth < 640 ? 'bottom-=10% top' : 'bottom-=20% top', // スクロール終了位置
          scrub: true, // スクロールに合わせてアニメーションを遅延させる

        },
      })
      .to(ref.current, {
        y: window.innerWidth < 640 ? '+=250' : '+=300',

        ease: 'none', // イージングなし
      })
  }, [])

  return (
    <div className="sec-aboutus">
      <div className="flex h-[161.8vw] w-full items-center justify-center overflow-hidden sm:h-[48vw]">
        <div className="relative size-full ">
          <picture>
            {/* PC用画像 */}
            <source
              media="(min-width: 640px)"
              srcSet="https://res.cloudinary.com/dvahtyhva/image/upload/w_2048,f_auto,q_auto/v1743104649/IMG_1255_sshe9q.jpg 2048w,
            https://res.cloudinary.com/dvahtyhva/image/upload/w_1536,f_auto,q_auto/v1743104649/IMG_1255_sshe9q.jpg 1536w"
              sizes="100vw"
            />
            {/* SP用画像 */}
            <source
              media="(max-width: 639px)"
              srcSet="https://res.cloudinary.com/dvahtyhva/image/upload/w_828,f_auto,q_auto/v1743103658/IMG_1255_SP_pe2vvd.jpg 828w,
            https://res.cloudinary.com/dvahtyhva/image/upload/w_640,f_auto,q_auto/v1743103658/IMG_1255_SP_pe2vvd.jpg 640w"
              sizes="100vw"
            />
            <CldImage
              src="https://res.cloudinary.com/dvahtyhva/image/upload/w_1024,f_auto,q_auto/v1743104649/IMG_1255_sshe9q.jpg"
              ref={ref}
              width={2000}
              height={1400}
              className="absolute object-cover top-[-20%] h-full w-auto scale-125 sm:left-auto sm:top-[-30%] sm:block sm:h-auto sm:w-full sm:scale-110"
              alt="aboutus image"
              loading="lazy"
            />
          </picture>
        </div>
        <div className=" absolute z-10 flex flex-col gap-md">
          <CldImage
            src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103642/IMG_2467_nivvkc.png"
            width={1024}
            height={500}
            alt="with all my love"
            className="mb-md h-auto w-[86vw] object-cover sm:mb-sm sm:w-5xl"
            loading="lazy"
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
