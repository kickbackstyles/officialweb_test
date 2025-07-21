'use client'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import Button from '../../button/Button/Button'

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div>
        <div className="flex flex-wrap border-t-1 border-black">
          <Link
            href="https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr"
            className="group flex h-4xl w-1/2 flex-col items-center justify-center gap-sm border-b-1 border-r-1 border-black sm:h-2xl sm:w-[calc(100%/3)]"
          >
            <div className="size-lg sm:size-sm">
              <CldImage
                src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103638/instagram_wyvwbt.png"
                width={100}
                height={100}
                className="h-auto w-full duration-100 sm:group-hover:scale-110"
                alt="instagram icon"
              />
            </div>

            <p>@kickbackstyles.official</p>
          </Link>
          <Link
            href="https://www.tiktok.com/@kickbackstyles_official?lang=ja-JP"
            className="group flex h-4xl w-1/2 flex-col items-center justify-center gap-sm border-b-1 border-black sm:h-2xl sm:w-[calc(100%/3)] sm:border-r-1"
          >
            <div className="h-lg w-[4.74vw] sm:size-sm ">
              <CldImage
                src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103637/tiktok_al5d9j.png"
                width={100}
                height={100}
                className="h-auto w-full duration-100 sm:h-full sm:w-auto sm:group-hover:scale-125"
                alt="tiktok icon"
              />
            </div>
            <p>@kickbackstyles_official</p>
          </Link>
          <div className="flex h-4xl w-1/2 flex-col items-center justify-center gap-sm border-b-1 border-r-1 border-black sm:h-2xl sm:w-[calc(100%/3)]">
            <div className="size-2xl sm:size-lg">
              <CldImage
                src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103638/kbs_web_logo_qh6ka2.png"
                width={100}
                height={100}
                className="h-auto w-full"
                alt="kbs logo icon"
              />
            </div>
          </div>
          <div className=" flex h-4xl w-1/2 items-center justify-center border-b-1 border-black sm:h-2xl sm:w-[calc(100%/3)] sm:border-r-1">
            <div className="flex items-center justify-center">
              <div>
                <p className="mb-sm sm:mb-xxs sm:flex sm:items-center sm:gap-xxs">
                  <span className="hidden size-xxs sm:block">
                    <CldImage
                      src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103638/mappin_rcxhyg.png"
                      width={40}
                      height={40}
                      className="h-full w-auto"
                      alt="map icon"
                    />
                  </span>
                  Location: Ise, Mie
                </p>
                <Link
                  href="tel:08015849291"
                  className="mb-md block sm:mb-sm sm:flex sm:items-center sm:gap-xxs"
                >
                  <span className="hidden size-xxs sm:block">
                    <CldImage
                      src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103637/phone_mjlkcj.png"
                      width={40}
                      height={40}
                      className="h-full w-auto"
                      alt="map icon"
                    />
                  </span>
                  Tel: 080-1584-9291
                </Link>

                {/* button */}
                <Button
                  color="black"
                  text="Contact"
                  href="/contact"
                  size="sm"
                  sizePc="sm-pc"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between border-b-1 border-black px-lg py-xl sm:h-2xl sm:w-[calc(100%/3*2)] sm:justify-start sm:gap-md sm:py-sm">
            <div>
              <ul className="flex flex-col gap-sm sm:gap-xxxs">
                <li>
                  <Link href="/items" className="font-bold">
                    Items:
                  </Link>
                </li>
                <li>
                  <Link href="/items?q=newarrival" className="">
                    NewArrivals
                  </Link>
                </li>
                {/* <li>
                  <Link href="/items?q=gift" className="">
                    Gift
                  </Link>
                </li> */}
                <li>
                  <Link href="/items?q=women" className="">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="/items?q=men" className="">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="/items?q=accessories" className="">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:flex sm:gap-md">
              <ul className="mb-md flex flex-col gap-sm sm:mb-0 sm:gap-xxxs">
                <li>
                  <Link href="/aboutus" className="font-bold">
                    AboutUs:
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr"
                    className=""
                  >
                    KickBackStyles
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-sm sm:gap-xxxs">
                <li>
                  <Link href="/projects" className="font-bold">
                    Projects:
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="">
                    NewInformation
                  </Link>
                </li>
                {/* <li>
                  <Link href="/projects?q=donation" className="">
                    Donation
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-sm sm:gap-xxxs">
                <li>
                  <Link href="/legal" className="font-bold">
                    Legal:
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="">
                    PrivacyPolicy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-xl w-full items-center justify-center sm:h-md">
        <p className="flex items-center gap-xs text-xs sm:gap-xxxxs sm:text-[0.7vw]">
          <span className="block size-sm sm:size-xxs">
            <CldImage
              src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103638/copyright-icon_e7gusf.png"
              width={30}
              height={30}
              className="h-auto w-full"
              alt="copyright"
            />
          </span>
          <span className="block">KickBackStyles 2025</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
