'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Button from '../../button/Button/Button'

// ScrollTriggerの初期化
gsap.registerPlugin(ScrollTrigger)

const ProjectsSection = (): JSX.Element => {
  const ref = useRef(null)
  const refSp = useRef(null)

  useEffect(() => {
    const windowWidth = window.innerWidth

    gsap
      .timeline({
        scrollTrigger: {
          trigger: windowWidth < 640 ? refSp.current : ref.current,
          start: windowWidth < 640 ? 'top+=10% center' : 'top bottom', // スクロール開始位置
          end: windowWidth < 640 ? 'bottom-=10% center' : 'bottom-=40% top', // スクロール終了位置
          scrub: true, // スクロールに合わせてアニメーションを遅延させる

        },
      })
      .to(windowWidth < 640 ? refSp.current : ref.current, {
        y: window.innerWidth < 640 ? '+=50' : '+=300',

        ease: 'none', // イージングなし
      })
  }, [])

  return (
    <div className="sec-projects">
      <div className="relative h-[161.8vw] w-full overflow-hidden sm:h-[48vw]">
        <div className="relative h-full w-auto sm:flex sm:w-full sm:items-center">
          <Image
            src="/IMG_1311.JPG"
            ref={ref}
            style={{ objectFit: 'cover' }}
            width={2000}
            height={5000}
            className="sm:scale-120 absolute hidden sm:top-[-40%] sm:block sm:h-auto sm:w-full"
            alt="projects background image"
          />
          <Image
            src="/IMG_1311_SP.JPG"
            ref={refSp}
            style={{ objectFit: 'cover' }}
            width={1000}
            height={2000}
            className="absolute h-full w-auto scale-150 sm:hidden"
            alt="projects background image"
          />
        </div>
        <div className="absolute bottom-2xl left-md sm:bottom-lg">
          <h2 className="mb-xl text-lg text-white sm:mb-sm sm:text-md-pc">
            Projects
          </h2>
          <p className="mb-md mr-xl leading-md text-white sm:mb-xs sm:w-4xl">
            KickBackStyles is dedicated to spreading love to many people. To
            achieve this, we organize crowdfunding campaigns and pop-up events,
            creating opportunities to connect with a wide range of people.
          </p>
          <p className="mb-xl mr-xl leading-md text-white sm:mb-md sm:w-4xl">
            KickBackStylesはたくさんの人に愛を届ける活動を行っています。そのためにクラウドファンディングやPopUpを開催し、たくさんの方々と繋がれる機会を作っています。
          </p>
          <div className="w-3xl sm:w-xl">
            <Button
              href="/projects"
              text="ViewMore"
              color="white"
              size="sm"
              sizePc="sm-pc"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
