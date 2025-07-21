'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CldImage } from 'next-cloudinary'
import { useEffect, useRef } from 'react'
import Button from '../../button/Button/Button'

// ScrollTriggerの初期化
gsap.registerPlugin(ScrollTrigger)

const ProjectsSection = (): JSX.Element => {
  const ref = useRef(null)

  const getOptimizedImageUrl = (url: string, width: number) => {
    try {
      const baseUrl = url.split('/upload/')[0] + '/upload/'
      const imagePath = url.split('/upload/')[1]
      return `${baseUrl}w_${width},f_auto,q_auto,c_scale,dpr_auto/${imagePath}`
    } catch (error) {
      console.error('Error optimizing image URL:', error)
      return url
    }
  }

  useEffect(() => {
    const windowWidth = window.innerWidth

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: windowWidth < 640 ? 'top+=10% bottom' : 'top bottom',
          end: windowWidth < 640 ? 'bottom-=10% top' : 'bottom-=40% top',
          scrub: true,
        },
      })
      .to(ref.current, {
        y: window.innerWidth < 640 ? '+=250' : '+=300',
        ease: 'none',
      })
  }, [])

  return (
    <div className="sec-projects">
      <div className="relative h-[161.8vw] w-full overflow-hidden sm:h-[48vw]">
        <div className="relative h-full w-auto sm:flex sm:w-full sm:items-center">
          <picture>
            {/* PC用画像 */}
            <source
              media="(min-width: 1024px)"
              srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753086619/IMG_1311_dbyieu.jpg', 2048)} 2048w,
                ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753086619/IMG_1311_dbyieu.jpg', 1440)} 1440w`}
              sizes="2048px"
            />
            {/* タブレット用画像 */}
            <source
              media="(min-width: 640px)"
              srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753088473/IMG_1309_kucyu3.jpg', 1024)} 1024w,
                ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753088473/IMG_1309_kucyu3.jpg', 768)} 768w`}
              sizes="1024px"
            />
            {/* SP用画像 */}
            <source
              media="(max-width: 639px)"
              srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753088473/IMG_1309_kucyu3.jpg', 828)} 828w,
                ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753088473/IMG_1309_kucyu3.jpg', 640)} 640w`}
              sizes="100vw"
            />
            <CldImage
              src={getOptimizedImageUrl(
                'https://res.cloudinary.com/dvahtyhva/image/upload/v1753086341/IMG_1382_uejf9w.jpg',
                1024,
              )}
              ref={ref}
              width={1440}
              height={960}
              className="sm:scale-100 absolute scale-110 top-[-20%] h-full w-auto object-cover sm:top-[-60%] sm:block sm:h-auto sm:w-full"
              alt="projects background image"
              loading="lazy"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 1024px, 1440px"
            />
          </picture>
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
