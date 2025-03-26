'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Button from '../../button/Button/Button'

// ScrollTriggerの初期化
gsap.registerPlugin(ScrollTrigger)

const AboutSection = (): JSX.Element => {
  const ref = useRef(null)
  const refSp = useRef(null)
  useEffect(() => {
    const windowWidth = window.innerWidth

    gsap
      .timeline({
        scrollTrigger: {
          trigger: windowWidth < 640 ? refSp.current : ref.current,
          start: windowWidth < 640 ? 'top+=10% center' : 'top+=20% bottom', // スクロール開始位置
          end: windowWidth < 640 ? 'bottom-=10% center' : 'bottom-=20% top', // スクロール終了位置
          scrub: true, // スクロールに合わせてアニメーションを遅延させる

        },
      })
      .to(windowWidth < 640 ? refSp.current : ref.current, {
        y: window.innerWidth < 640 ? '+=50' : '+=300',

        ease: 'none', // イージングなし
      })
  }, [])

  return (
    <div className="sec-aboutus">
      <div className="flex h-[161.8vw] w-full items-center justify-center overflow-hidden sm:h-[48vw]">
        <div className="relative size-full ">
          <Image
            src="/IMG_1255.JPG"
            ref={ref}
            style={{ objectFit: 'cover' }}
            width={2000}
            height={5000}
            className="absolute hidden sm:block sm:top-[-30%] sm:left-auto sm:w-full sm:h-auto sm:scale-110"
            alt="aboutus image"
          />
          <Image
            src="/IMG_1255_SP.JPG"
            ref={refSp}
            style={{ objectFit: 'cover' }}
            width={1000}
            height={2000}
            className="absolute top-[-10%] h-full w-auto scale-150 sm:hidden"
            alt="aboutus image"
          />
        </div>
        <div className=" absolute z-10 flex flex-col gap-md">
          <Image
            src="/IMG_2467.png"
            width={500}
            height={500}
            alt="with all my love"
            className="mb-md h-auto w-[86vw] sm:mb-sm sm:w-5xl"
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
