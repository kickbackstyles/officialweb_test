'use client'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { getOptimizedImageUrl } from '../components/Hooks/getOptimizedUrl'
import AboutSection from '../components/base/AboutSection/AboutSection'
import Footer from '../components/base/Footer/Footer'
import Header from '../components/base/Header/Header'
import ProjectsSection from '../components/base/ProjectsSection/ProjectsSection'

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="kv">
        <div className="relative h-[168vw] w-full sm:h-5xl">
          <picture>
            <source
              media="(min-width: 640px)"
              srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753084364/IMG_1319_n1dbbu.jpg', 2048)} 2048w,
                ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753084364/IMG_1319_n1dbbu.jpg', 1440)} 1440w`}
              sizes="2048px"
            />
            <source
              media="(max-width: 639px)"
              srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753088803/IMG_1312_wselq5.jpg', 767)} 767w,
                ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753088803/IMG_1312_wselq5.jpg', 480)} 480w`}
              sizes="767px"
            />
            <CldImage
              src={getOptimizedImageUrl(
                'https://res.cloudinary.com/dvahtyhva/image/upload/v1753084364/IMG_1319_n1dbbu.jpg',
                1024,
              )}
              sizes="(max-width: 639px) 767px, (max-width: 1023px) 1024px, 1440px"
              fill
              className="left-0 top-0 h-full w-auto object-cover brightness-[0.9] sm:h-auto sm:w-full"
              alt="key visual"
              priority
            />
          </picture>

          <div className="absolute bottom-2xl left-md sm:bottom-[18%] ">
            <h1 className="w-3/5 text-md leading-md text-white sm:w-full sm:text-md-pc">
              @kickbackstyles.official
              <br />
              2025.07.25 21:00~ Releases New Items...!
              <br />
              <span className='flex gap-sm sm:gap-xxs items-center mt-md sm:mt-xxs sm:mb-xxxs'><img src='/t-shirt.svg' alt='BackPrintT-Shirt' className='w-[6vw] h-[6vw] sm:w-[2vw] sm:h-[2vw]' />BackPrintT-Shirt</span>
              <span className='flex gap-sm sm:gap-xxs items-center'><img src='/shorts.svg' alt='NylonShorts' className='w-[6vw] h-[6vw] sm:w-[2vw] sm:h-[2vw]' />NylonShorts</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="sec-items sm:flex sm:flex-row-reverse">
        <div className="relative h-[161.8vw] w-full overflow-hidden sm:h-5xl sm:w-1/2">
          <div className="absolute bottom-lg left-md z-10 w-2xl sm:cursor-pointer">
            <p className="pb-xs text-white sm:pb-xxxxs ">AllItems</p>
            <div className="flex items-center gap-xs sm:gap-xxxxs">
              <div className="h-xxs w-full bg-white sm:h-xxxxs"></div>
              <div className="size-xxs bg-white sm:size-xxxxs"></div>
            </div>
          </div>
          <Link href="/items" className="group relative block size-full">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743106008/IMG_1344_rhkg3e.jpg', 1000)} 1000w,
                  ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743106008/IMG_1344_rhkg3e.jpg', 800)} 800w`}
                sizes="1000px"
              />
              <source
                media="(min-width: 640px)"
                srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743106008/IMG_1344_rhkg3e.jpg', 750)} 750w,
                  ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743106008/IMG_1344_rhkg3e.jpg', 500)} 500w`}
                sizes="100vw"
              />
              <source
                media="(max-width: 639px)"
                srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743106008/IMG_1344_rhkg3e.jpg', 750)} 750w,
                  ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1743106008/IMG_1344_rhkg3e.jpg', 500)} 500w`}
                sizes="100vw"
              />
              <CldImage
                src={getOptimizedImageUrl(
                  'https://res.cloudinary.com/dvahtyhva/image/upload/v1743106008/IMG_1344_rhkg3e.jpg',
                  500,
                )}
                fill
                style={{ objectFit: 'cover' }}
                alt="Section items visual"
                className="duration-100 sm:group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 750px, 1000px"
              />
            </picture>
          </Link>
        </div>
        <div className="sm:h-5xl sm:w-1/2">
          <ul className="flex flex-nowrap overflow-x-scroll sm:h-full sm:flex-wrap sm:overflow-x-auto">
            {/* 3アイテム以上 */}

            {/* <li className="relative flex h-[72.8vw] w-[46vw] min-w-[46vw] items-center overflow-hidden border-y-1 border-r-1 border-black bg-white sm:size-1/2 sm:min-w-0"> */}

            {/* 2アイテム */}
            <li className="relative flex h-[72.8vw] w-1/2 min-w-[46vw] items-center overflow-hidden border-y-1 border-r-1 border-black bg-white sm:size-1/2 sm:min-w-0">
              <Link
                href="/items/15"
                className="group w-full h-full sm:flex  sm:items-center sm:justify-center "
              >
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753082082/IMG_1529_vlauak.jpg', 800)} 800w,
                      ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753082082/IMG_1529_vlauak.jpg', 600)} 600w`}
                    sizes="800px"
                  />
                  <source
                    media="(min-width: 640px)"
                    srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753082082/IMG_1529_vlauak.jpg', 600)} 600w,
                      ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753082082/IMG_1529_vlauak.jpg', 400)} 400w`}
                    sizes="600px"
                  />
                  <CldImage
                    src={getOptimizedImageUrl(
                      'https://res.cloudinary.com/dvahtyhva/image/upload/v1753082082/IMG_1529_vlauak.jpg',
                      400,
                    )}
                    width={800}
                    height={800}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 600px, 800px"
                    alt="KickBackStyles BackPrintT-Shirt"
                    className="h-auto w-full sm:h-auto sm:w-full object-cover sm:group-hover:hidden"
                    loading="lazy"
                  />
                </picture>
                <div className="hidden size-full overflow-hidden sm:group-hover:block">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083249/IMG_1482_mx8o4s.jpg', 800)} 800w,
                        ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083249/IMG_1482_mx8o4s.jpg', 600)} 600w`}
                      sizes="800px"
                    />
                    <source
                      media="(min-width: 640px)"
                      srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083249/IMG_1482_mx8o4s.jpg', 600)} 600w,
                        ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083249/IMG_1482_mx8o4s.jpg', 400)} 400w`}
                      sizes="600px"
                    />
                    <CldImage
                      src={getOptimizedImageUrl(
                        'https://res.cloudinary.com/dvahtyhva/image/upload/v1753083249/IMG_1482_mx8o4s.jpg',
                        400,
                      )}
                      width={800}
                      height={800}
                      sizes="(max-width: 639px) 46vw, (max-width: 1023px) 600px, 800px"
                      alt="KickBackStyles BackPrintT-Shirt"
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                </div>

                <div className="absolute bottom-xs left-sm">
                  <p className="text-sm leading-md sm:text-sm-pc sm:group-hover:text-white text-white">
                    BackPrintT-Shirt
                  </p>
                  <div className="flex gap-xxs sm:gap-xxxs">
                    {/* <p
                      className="flex items-center border-1 border-black px-xxs text-xs text-black sm:px-xxxs sm:text-xs-pc sm:group-hover:border-white sm:group-hover:text-white"
                    >
                      40%off
                    </p> */}

                    <div>
                      {/* <p
                        className='realPrice text-xs text-gray line-through sm:text-xs-pc sm:group-hover:text-white'
                      >
                        ¥7,790
                      </p> */}

                      <p className="leading-[120%]  sm:group-hover:text-white text-white">7,790 JPY</p>

                    </div>
                  </div>
                </div>
              </Link>
            </li>
            {/* 3アイテム以上 */}
            {/* <li className="relative flex h-[72.8vw] w-[46vw] min-w-[46vw] items-center overflow-hidden border-y-1 border-r-1 border-black bg-white sm:size-1/2 sm:min-w-0 sm:border-l-1 sm:border-t-0"> */}

            {/* 2アイテム */}
              <li className="relative flex h-[72.8vw] w-1/2 min-w-[46vw] items-center overflow-hidden border-y-1 border-r-1 border-black bg-white sm:size-1/2 sm:min-w-0 sm:border-l-1 sm:border-t-0"> 
              <Link
                href="/items/16"
                className="group size-full sm:flex sm:items-center sm:justify-center"
              >
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083690/IMG_1526_d1fo7c.jpg', 800)} 800w,
                      ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083690/IMG_1526_d1fo7c.jpg', 600)} 600w`}
                    sizes="800px"
                  />
                  <source
                    media="(min-width: 640px)"
                    srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083690/IMG_1526_d1fo7c.jpg', 600)} 600w,
                      ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083690/IMG_1526_d1fo7c.jpg', 400)} 400w`}
                    sizes="600px"
                  />
                  <CldImage
                    src={getOptimizedImageUrl(
                      'https://res.cloudinary.com/dvahtyhva/image/upload/v1753083690/IMG_1526_d1fo7c.jpg',
                      400,
                    )}
                    width={800}
                    height={800}
                    sizes="(max-width: 639px) 46vw, (max-width: 1023px) 600px, 800px"
                    alt="KickBackStyles NylonShorts"
                    className="h-auto w-full object-cover sm:group-hover:hidden"
                    loading="lazy"
                  />
                </picture>
                <div className="hidden size-full overflow-hidden sm:group-hover:block">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083689/IMG_1527_wrbijt.jpg', 800)} 800w,
                        ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083689/IMG_1527_wrbijt.jpg', 600)} 600w`}
                      sizes="800px"
                    />
                    <source
                      media="(min-width: 640px)"
                      srcSet={`${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083689/IMG_1527_wrbijt.jpg', 600)} 600w,
                        ${getOptimizedImageUrl('https://res.cloudinary.com/dvahtyhva/image/upload/v1753083689/IMG_1527_wrbijt.jpg', 400)} 400w`}
                      sizes="600px"
                    />
                    <CldImage
                      src={getOptimizedImageUrl(
                        'https://res.cloudinary.com/dvahtyhva/image/upload/v1753083689/IMG_1527_wrbijt.jpg',
                        400,
                      )}
                      width={800}
                      height={800}
                      sizes="(max-width: 639px) 46vw, (max-width: 1023px) 600px, 800px"
                      alt="KickBackStyles ナイロンショーツ"
                      className="object-cover sm:h-auto sm:w-full"
                      loading="lazy"
                    />
                  </picture>
                </div>

                <div className="absolute bottom-xs left-sm ">
                  <p className="text-sm leading-md sm:text-sm-pc sm:group-hover:text-white text-white">
                    NylonShorts
                  </p>
                  <div className="flex gap-xxs sm:gap-xxxs">
                      {/* <p
                        className="flex items-center border-1 border-black px-xxs text-xs text-black sm:px-xxxs sm:text-xs-pc sm:group-hover:border-white sm:group-hover:text-white"
                      >
                        40%off
                      </p> */}

                    <div>
                      {/* <p
                        className='realPrice text-xs text-gray line-through sm:text-xs-pc sm:group-hover:text-white'
                      >
                        ¥7,790
                      </p> */}

                      <p className="leading-[120%]  sm:group-hover:text-white text-white">5,650 JPY</p>

                    </div>
                  </div>
                </div>
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
  )
}
