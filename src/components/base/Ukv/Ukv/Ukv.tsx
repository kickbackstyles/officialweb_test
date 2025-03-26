import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '../Ukv.modules.css'

interface UkvProps {
  src?: string
  imgPosition?: string
  title?: string
  english?: string
  japanese?: string
  itemsPage?: boolean
  q?: string
  srcSp?: string
}

const Ukv: React.FC<UkvProps> = ({
  src,
  srcSp,
  imgPosition = '',
  itemsPage = false,
  title,
  english,
  japanese,
  q,
}) => {
  return (
    <div>
      <div className="absolute left-0 top-0 z-0 hidden h-[17.01vw] w-full border-b-1 border-black sm:block"></div>
      <div className="sm:mb-xl sm:flex sm:items-end ">
        <div className="relative h-[144vw] w-full overflow-hidden sm:z-10 sm:flex sm:h-[48vw] sm:w-5xl sm:items-center sm:justify-center">
          <Image
            src={`/${src}`}
            width={900}
            height={900}
            alt="key visual"
            className={`sm:block hidden h-full w-auto sm:absolute sm:block${imgPosition} `}
            style={{ objectFit: 'cover' }}
          />
          <Image
            src={`/${srcSp}`}
            style={{ objectFit: 'cover' }}
            width={700}
            height={1000}
            className="absolute h-full w-auto scale-150 sm:hidden"
            alt="projects background image"
          />
        </div>

        <div className="hidden flex-1 sm:mb-sm sm:ml-md sm:mr-lg sm:block sm:w-auto">
          <h2 className="sm:mb-sm sm:text-md-pc">
            {title}
            <span className={`${q && itemsPage ? '' : 'hidden'} `}>
              :{' '}
              {q === 'newarrivals'
                ? 'NewArrivals'
                : q
                  ? q.charAt(0).toUpperCase() + q.slice(1)
                  : undefined}
            </span>
          </h2>

          {/* Its itemsPage */}
          <ul
            className={`${itemsPage ? 'sm:block' : 'sm:hidden'} sm:flex sm:flex-col sm:gap-xxs`}
          >
            <li>
              <Link href="/items?q=newarrivals" className="sm:hover:text-gray">
                NewArrivals
              </Link>
            </li>
            <li>
              <Link href="/items?q=gifts" className="sm:hover:text-gray">
                Gifts
              </Link>
            </li>
            <li>
              <Link href="/items?q=unisex" className="sm:hover:text-gray">
                Unisex
              </Link>
            </li>
            <li>
              <Link href="/items?q=women" className="sm:hover:text-gray">
                Women
              </Link>
            </li>
            <li>
              <Link href="/items?q=men" className="sm:hover:text-gray">
                Men
              </Link>
            </li>
            <li>
              <Link href="/items?q=accessories" className="sm:hover:text-gray">
                Accessories
              </Link>
            </li>
          </ul>

          {/* Not itemsPage */}
          <div className={`${itemsPage ? 'sm:hidden' : 'sm:block '}`}>
            <p className="mb-xxs leading-md">{english}</p>
            <p className="leading-md">{japanese}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Ukv
