import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  color: string // colorの型を指定
  text: string // textの型を指定
  href: string
  size?: string
  sizePc?: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  color,
  text,
  href,
  size,
  sizePc,
  className,
}) => {
  return (
    <Link href={href} className={`${className} group block`}>
      <p
        className={`text-${color} text-${size} sm:text-${sizePc} pb-xs sm:pb-xxxxs ${color === 'black' ? 'sm:group-hover:text-gray' : 'sm:group-hover:text-black'}`}
      >
        {text}
      </p>
      <div className="flex items-center gap-xs sm:gap-xxxxs">
        <div
          className={`bg-${color} h-xxs w-full sm:h-xxxxs sm:group-hover:w-xxxxs ${color === 'black' ? 'sm:group-hover:bg-gray' : 'sm:group-hover:bg-black'} duration-100`}
        ></div>
        <div
          className={`bg-${color} size-xxs sm:size-xxxxs sm:group-hover:w-full ${color === 'black' ? 'sm:group-hover:bg-gray' : 'sm:group-hover:bg-black'} duration-100`}
        ></div>
      </div>
    </Link>
  )
}

export default Button
