import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { getOptimizedImageUrl } from './Hooks/getOptimizedUrl';

interface ItemCardProps {
  href: string;
  mainImage: string;
  hoverImage: string;
  alt: string;
  title: string;
  price: string;
  itemCount: 'one' | 'two' | 'three-or-more';
}

const ItemCard = ({ 
  href, 
  mainImage, 
  hoverImage, 
  alt, 
  title, 
  price, 
  itemCount 
}: ItemCardProps) => {
  const baseClasses = "relative flex h-[72.8vw] items-center overflow-hidden border-y-1 border-r-1 border-black bg-white sm:size-1/2 sm:min-w-0";
  
  const itemCountClasses = {
    'one': "w-full min-w-[46vw] sm:border-l-1 sm:border-t-0",
    'two': "w-1/2 min-w-[46vw] sm:border-l-1 sm:border-t-0",
    'three-or-more': "w-[46vw] min-w-[46vw]"
  };

  return (
    <li className={`${baseClasses} ${itemCountClasses[itemCount]}`}>
      <Link
        href={href}
        className="group size-full sm:flex sm:items-center sm:justify-center"
      >
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`${getOptimizedImageUrl(mainImage, 800)} 800w,
              ${getOptimizedImageUrl(mainImage, 600)} 600w`}
            sizes="800px"
          />
          <source
            media="(min-width: 640px)"
            srcSet={`${getOptimizedImageUrl(mainImage, 600)} 600w,
              ${getOptimizedImageUrl(mainImage, 400)} 400w`}
            sizes="600px"
          />
          <CldImage
            src={getOptimizedImageUrl(mainImage, 400)}
            width={800}
            height={800}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 600px, 800px"
            alt={alt}
            className="h-auto w-full object-cover sm:h-auto sm:w-full sm:group-hover:hidden"
            loading="lazy"
          />
        </picture>
        <div className="hidden size-full overflow-hidden sm:group-hover:block">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={`${getOptimizedImageUrl(hoverImage, 800)} 800w,
                ${getOptimizedImageUrl(hoverImage, 600)} 600w`}
              sizes="800px"
            />
            <source
              media="(min-width: 640px)"
              srcSet={`${getOptimizedImageUrl(hoverImage, 600)} 600w,
                ${getOptimizedImageUrl(hoverImage, 400)} 400w`}
              sizes="600px"
            />
            <CldImage
              src={getOptimizedImageUrl(hoverImage, 400)}
              width={800}
              height={800}
              sizes="(max-width: 639px) 46vw, (max-width: 1023px) 600px, 800px"
              alt={alt}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>

        <div className="absolute bottom-xs left-sm">
          <p className="text-sm leading-md text-white sm:text-sm-pc sm:group-hover:text-white">
            {title}
          </p>
          <div className="flex gap-xxs sm:gap-xxxs">
            <div>
              <p className="leading-[120%] text-white sm:group-hover:text-white">
                {price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ItemCard;
