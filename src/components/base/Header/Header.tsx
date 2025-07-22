'use client'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Button from '../../button/Button/Button'

interface HeaderProps {
  color?: string // colorプロパティを追加
}

const Header: React.FC<HeaderProps> = ({ color = 'white' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

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

  return (
    <>
      <header className="fixed z-50 h-auto w-full ">
        <div className="sticky z-50 flex items-center justify-between border-b-1 border-black bg-white px-md py-sm sm:items-start sm:border-none sm:bg-transparent sm:py-0 ">
          <div
            className={`${isMenuOpen ? 'items-center justify-center' : 'items-baseline justify-normal gap-xs'} relative flex cursor-pointer flex-col sm:hidden`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`${isMenuOpen ? 'absolute rotate-45' : 'rotate-0'} block h-[2px] w-lg bg-black duration-300`}
            ></span>
            <span
              className={`${isMenuOpen ? 'opacity-0 ' : 'opacity-1'} block h-[2px] w-[5.4vw] bg-black duration-300`}
            ></span>
            <span
              className={`${isMenuOpen ? 'absolute -rotate-45' : 'rotate-0'} block h-[2px] w-lg bg-black duration-300`}
            ></span>
          </div>
          <Link
            href="/"
            className="block h-[13.1vw] w-2xl sm:fixed sm:top-md sm:size-lg"
          >
            <CldImage
              src={getOptimizedImageUrl(
                'https://res.cloudinary.com/dvahtyhva/image/upload/v1743103638/kbs_web_logo_qh6ka2.png',
                500,
              )}
              width={500}
              height={500}
              className="h-auto w-full object-cover"
              alt="logo image"
              priority
              sizes="(max-width: 639px) 13.1vw, 500px"
            />
          </Link>
          <div className="relative size-[8vw] sm:hidden">
            <Link href="https://shop.kickbackstyles.com" className='block'>
              <CldImage
                src={getOptimizedImageUrl(
                  'https://res.cloudinary.com/dvahtyhva/image/upload/v1743103637/shopping-bag-svgrepo-com_mqgl0y.svg',
                  100,
                )}
                fill
                className="object-cover"
                alt="shopping bag"
                priority
                sizes="8vw"
              />
            </Link>
          </div>
          <ul className="hidden flex-col items-end gap-xxxs sm:fixed sm:right-md sm:top-md sm:flex">
            <li className="group relative flex items-center">
              <Link
                href="/items"
                className={`text-${color} block  ${color === 'white' ? 'group-hover:text-black' : 'group-hover:text-gray'}`}
              >
                Items
              </Link>
              <div className="absolute -right-xxs hidden size-xxxs bg-black group-hover:block"></div>
            </li>
            {/* <li className="group relative flex items-center">
              <Link
                href="/gifts"
                className={`text-${color} block ${color === 'white' ? 'group-hover:text-black' : 'group-hover:text-gray'}`}
              >
                Gifts
              </Link>
              <div className="absolute -right-xxs hidden size-xxxs bg-black group-hover:block"></div>
            </li> */}
            <li className="group relative flex items-center">
              <Link
                href="/aboutus"
                className={`text-${color} block ${color === 'white' ? 'hover:text-black' : 'hover:text-gray'}`}
              >
                AboutUs
              </Link>
              <div className="absolute -right-xxs hidden size-xxxs bg-black group-hover:block"></div>
            </li>
            <li className="group relative mb-xs flex items-center">
              <Link
                href="/projects"
                className={`text-${color} block ${color === 'white' ? 'group-hover:text-black' : 'group-hover:text-gray'}`}
              >
                Projects
              </Link>
              <div className="absolute -right-xxs hidden size-xxxs bg-black group-hover:block"></div>
            </li>
            <div className="w-full">
              <Button
                color={color}
                href="https://shop.kickbackstyles.com"
                text="Shop"
                size=""
                sizePc="sm-pc"
                className=""
              />
            </div>
          </ul>
        </div>

        <div
          className={`${isMenuOpen ? 'visible overscroll-contain opacity-100' : 'invisible overscroll-auto opacity-0'} hamburger-menu fixed z-20 h-[92vh] w-full overflow-y-auto bg-white duration-300 sm:hidden`}
        >
          <div className="flex">
            <Link
              href="/items?q=newarrivals"
              className="relative block w-full"
              {...(pathname == '/items'
                ? { onClick: () => setIsMenuOpen(!isMenuOpen) }
                : {})}
            >
              <div className="relative h-5xl w-full overflow-hidden">
                <CldImage
                  src={getOptimizedImageUrl(
                    'https://res.cloudinary.com/dvahtyhva/image/upload/v1753091696/IMG_1531_mrvzlb.jpg',
                    400,
                  )}
                  width={400}
                  height={1000}
                  alt="New Arrivals"
                  className="absolute h-auto w-full object-cover"
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
              <p className="absolute bottom-xs left-xs text-white">
                NewArrival
              </p>
            </Link>
            <Link
              href="/projects/"
              className="relative block w-full"
              {...(pathname === '/projects/'
                ? { onClick: () => setIsMenuOpen(!isMenuOpen) }
                : {})}
            >
              <div className="relative h-5xl w-full overflow-hidden">
                <CldImage
                  src={getOptimizedImageUrl(
                    'https://res.cloudinary.com/dvahtyhva/image/upload/v1753091424/IMG_1429_ow0w0c.jpg',
                    400,
                  )}
                  width={400}
                  height={1000}
                  alt="New information"
                  className="absolute h-auto w-full object-cover"
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
              <p className="absolute bottom-xs left-xs text-white">
                NewInformation
              </p>
            </Link>
          </div>
          <ul>
            <li className="flex items-center justify-between border-y-1 border-black">
              <Link
                href="/items"
                className="flex w-full items-center justify-between px-md py-lg font-bold"
                {...(pathname === '/items'
                  ? { onClick: () => setIsMenuOpen(!isMenuOpen) }
                  : {})}
              >
                <p>Items</p>
                <div className="relative h-sm w-[1.25vw]">
                  <CldImage
                    src={getOptimizedImageUrl(
                      'https://res.cloudinary.com/dvahtyhva/image/upload/v1743103639/arrowtoright_dko3cl.png',
                      20,
                    )}
                    fill
                    alt="arrow to right"
                    className="object-cover"
                    sizes="1.25vw"
                  />
                </div>
              </Link>
            </li>
            {/* <li className="flex items-center justify-between border-b-1 border-black">
              <Link
                href="/gifts"
                className="flex w-full items-center justify-between px-md py-lg font-bold"
                {...(pathname === '/gifts'
                  ? { onClick: () => setIsMenuOpen(!isMenuOpen) }
                  : {})}
              >
                <p>Gift</p>
                <div className="relative h-sm w-[1.25vw]">
                  <CldImage
                    src={getOptimizedImageUrl(
                      'https://res.cloudinary.com/dvahtyhva/image/upload/v1743103639/arrowtoright_dko3cl.png',
                      20,
                    )}
                    fill
                    alt="arrow to right"
                    className="object-cover"
                    sizes="1.25vw"
                  />
                </div>
              </Link>
            </li> */}
            <li className="flex items-center justify-between border-b-1 border-black">
              <Link
                href="/aboutus"
                className="flex w-full items-center justify-between px-md py-lg font-bold"
                {...(pathname === '/aboutus'
                  ? { onClick: () => setIsMenuOpen(!isMenuOpen) }
                  : {})}
              >
                <p>AboutUs</p>
                <div className="relative h-sm w-[1.25vw]">
                  <CldImage
                    src={getOptimizedImageUrl(
                      'https://res.cloudinary.com/dvahtyhva/image/upload/v1743103639/arrowtoright_dko3cl.png',
                      20,
                    )}
                    fill
                    alt="arrow to right"
                    className="object-cover"
                    sizes="1.25vw"
                  />
                </div>
              </Link>
            </li>
            <li className="flex items-center justify-between border-b-1 border-black">
              <Link
                href="/projects"
                className="flex w-full items-center justify-between px-md py-lg font-bold"
                {...(pathname === '/projects'
                  ? { onClick: () => setIsMenuOpen(!isMenuOpen) }
                  : {})}
              >
                <p>Projects</p>
                <div className="relative h-sm w-[1.25vw]">
                  <CldImage
                    src={getOptimizedImageUrl(
                      'https://res.cloudinary.com/dvahtyhva/image/upload/v1743103639/arrowtoright_dko3cl.png',
                      20,
                    )}
                    fill
                    alt="arrow to right"
                    className="object-cover"
                    sizes="1.25vw"
                  />
                </div>
              </Link>
            </li>
          </ul>
          <div>
            <div className="flex h-[50vw]">
              <Link
                href="https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr"
                className="flex w-full flex-col items-center justify-center gap-sm border-b-1 border-r-1 border-black py-2xl"
              >
                <div className="relative size-lg">
                  <CldImage
                    src={getOptimizedImageUrl(
                      'https://res.cloudinary.com/dvahtyhva/image/upload/v1743103638/instagram_wyvwbt.png',
                      100,
                    )}
                    fill
                    alt="instagram icon"
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
                <p>@kickbackstyles.official</p>
              </Link>
              <Link
                href="https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr"
                className="flex w-full flex-col items-center justify-center gap-sm border-b-1 border-black py-2xl"
              >
                <div className="relative h-lg w-[4.74vw]">
                  <CldImage
                    src={getOptimizedImageUrl(
                      'https://res.cloudinary.com/dvahtyhva/image/upload/v1743103637/tiktok_al5d9j.png',
                      100,
                    )}
                    fill
                    alt="tiktok icon"
                    className="object-cover"
                    sizes="4.74vw"
                  />
                </div>
                <p>@kickbackstyles_official</p>
              </Link>
            </div>
            <div className="flex h-[50vw]">
              <div className="flex w-full flex-col items-center justify-center gap-sm border-b-1 border-r-1 border-black py-2xl">
                <div className="relative size-xl">
                  <CldImage
                    src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103638/kbs_logo_wwedmt.png"
                    width={100}
                    height={100}
                    alt="kbs logo icon"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
              <div className=" w-full border-b-1 border-black py-2xl">
                <div className="flex items-center justify-center">
                  <div>
                    <p className="mb-sm">Location: Ise, Mie</p>
                    <Link href="tel:08015849291" className="mb-md block">
                      Tel: 080-1584-9291
                    </Link>

                    {/* button */}
                    <Button
                      color="black"
                      text="Contact"
                      href="/contact"
                      size="sm"
                      sizePc=""
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
