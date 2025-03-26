import Image from 'next/image'
import Link from 'next/link'
import AboutSection from '../components/base/AboutSection/AboutSection'
import Footer from '../components/base/Footer/Footer'
import Header from '../components/base/Header/Header'
import ProjectsSection from '../components/base/ProjectsSection/ProjectsSection'

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="kv">
        <div className="relative h-[161.8vw] w-full sm:h-5xl">
          <Image
            src="/IMG_1352.JPG"
            fill
            style={{ objectFit: 'cover' }}
            alt="key visual"
          />
          <div className="absolute bottom-2xl left-md ">
            <h1 className="w-3/5 text-md leading-md text-white-pink sm:w-full sm:text-md-pc">
              @kickbackstyles.official
              <br />
              2025.04.01 21:00 Releases First Item...!
            </h1>
          </div>
        </div>
      </div>
      <div className="sec-items sm:flex sm:flex-row-reverse">
        <div className="relative h-[161.8vw] w-full overflow-hidden sm:h-5xl sm:w-1/2">
          <div className="absolute bottom-lg left-md z-10 w-2xl sm:cursor-pointer">
            <p className="pb-xs text-white sm:pb-xxxxs ">
              AllItems
            </p>
            <div className="flex items-center gap-xs sm:gap-xxxxs">
              <div className="h-xxs w-full bg-white sm:h-xxxxs"></div>
              <div className="size-xxs bg-white sm:size-xxxxs"></div>
            </div>
          </div>
          <Link href="/items" className="group block size-full">
            <Image
              src="/IMG_1344.JPG"
              fill
              style={{ objectFit: 'cover' }}
              alt="Section items visual"
              className="duration-100 sm:group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="sm:h-5xl sm:w-1/2">
          <ul className="flex flex-nowrap overflow-x-scroll sm:h-full sm:flex-wrap sm:overflow-x-auto">
            <li className="relative flex h-[72.8vw] w-[46vw] min-w-[46vw] items-center overflow-hidden border-1 border-black bg-white sm:size-1/2 sm:min-w-0">
              <Link
                href="/items"
                className="group size-full sm:flex sm:items-center sm:justify-center "
              >
                <Image
                  src="/IMG_3220.png"
                  width={400}
                  height={400}
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                  alt="item 1"
                  className="h-full w-auto scale-90 sm:scale-105 sm:group-hover:hidden"
                />
                <div className="hidden size-full overflow-hidden sm:group-hover:block">
                  <Image
                    src="/IMG_1248_SP.JPG"
                    width={400}
                    height={400}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    alt="item 1"
                    className="sm:h-full sm:w-auto "
                  />
                </div>

                <div className="absolute bottom-xs left-sm">
                  <p className="text-sm leading-md sm:text-sm-pc sm:group-hover:text-white">
                    BackTextLongSleeve
                  </p>
                  <p className="sm:group-hover:text-white">¥4,500</p>
                </div>
              </Link>
            </li>
            <li className="relative flex h-[72.8vw] w-[46vw] min-w-[46vw] items-center overflow-hidden border-y-1 border-r-1 border-black bg-white sm:size-1/2 sm:min-w-0">
              <Link
                href="/items"
                className="group w-full sm:flex sm:h-full sm:items-center sm:justify-center "
              >
                <Image
                  src="/IMG_3224.png"
                  width={400}
                  height={400}
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                  alt="item 1"
                  className="h-auto w-full sm:scale-95 sm:group-hover:hidden"
                />
                <div className="hidden size-full overflow-hidden sm:group-hover:block">
                  <Image
                    src="/IMG_1317_SP.JPG"
                    width={400}
                    height={400}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    alt="item 1"
                    className="h-auto w-full "
                  />
                </div>

                <div className="absolute bottom-xs left-sm">
                  <p className="text-sm leading-md sm:text-sm-pc sm:group-hover:text-white">
                    BackTextLongSleeve
                  </p>
                  <p className="sm:group-hover:text-white">¥4,500</p>
                </div>
              </Link>
            </li>
            <li className="relative flex h-[72.8vw] w-[46vw] min-w-[46vw] items-center overflow-hidden border-y-1 border-r-1 border-black bg-white sm:size-1/2 sm:min-w-0 sm:border-l-1 sm:border-t-0">
              <Link
                href="/items"
                className="group size-full sm:flex sm:items-center sm:justify-center"
              >
                <Image
                  src="/IMG_3225.png"
                  width={400}
                  height={400}
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                  alt="item 1"
                  className="h-full w-auto scale-85 sm:scale-105 sm:group-hover:hidden"
                />
                <div className="hidden size-full overflow-hidden sm:group-hover:block">
                  <Image
                    src="/IMG_1333_SP.JPG"
                    width={400}
                    height={400}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    alt="item 1"
                    className="sm:h-full sm:w-auto "
                  />
                </div>

                <div className="absolute bottom-xs left-sm ">
                  <p className="text-sm leading-md sm:text-sm-pc sm:group-hover:text-white">
                    BackTextLongSleeve
                  </p>
                  <p className="sm:group-hover:text-white">¥4,500</p>
                </div>
              </Link>
            </li>
            {/* <li className='bg-white min-w-[46vw] sm:min-w-0 w-[46vw] sm:w-1/2 h-[72.8vw] sm:h-1/2 relative flex items-center border-black border-b-1 border-r-1'>
              <Link href='/items' className='w-full sm:h-full sm:flex sm:items-center sm:justify-center group'>
                <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' style={{ objectFit: 'cover' }} alt='item 1' className='w-full h-auto sm:group-hover:hidden' />
                <div className='w-full h-full hidden overflow-hidden sm:group-hover:block'>
                  <Image src='/ebb1ef1a-19b1-4c38-849d-a05bb06b7f95.jpeg' width={400} height={400} sizes='100vw' style={{ objectFit: 'cover' }} alt='item 1' className='w-full h-auto ' />
                </div>

                <div className='absolute left-sm bottom-xs'>
                  <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                  <p>¥4,500</p>
                </div>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
  )
}
