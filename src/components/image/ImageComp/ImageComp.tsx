'use client'
import { CldImage } from 'next-cloudinary'

interface ImageProps {
  src: string // colorの型を指定
  width?: number // textの型を指定
  height?: number
  sizes?: string
  alt: string
  className?: string
}

const ImageComp: React.FC<ImageProps> = ({
  src,
  width,
  height,
  sizes,
  alt,
  className,
}) => {
  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      sizes={sizes}
      alt={alt}
      className={className}
    />
  )
}

export default ImageComp
