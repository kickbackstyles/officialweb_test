import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    color: string; // colorの型を指定
    text: string;  // textの型を指定
    href: string;
    size: string;
    sizePc: string;
    className: string;
}

const Button: React.FC<ButtonProps> = ({ color, text, href, size, sizePc, className }) => {
    return (
        <Link href={href} className={`${className} block`}>

            <p className={`text-${color} text-${size} sm:text-${sizePc} pb-xs sm:pb-xxxxs`}>{text}</p>
            <div className='flex items-center gap-xs sm:gap-xxxxs'>
                <div className={`bg-${color} w-full h-xxs sm:h-xxxxs`}></div>
                <div className={`bg-${color} w-xxs h-xxs sm:w-xxxxs sm:h-xxxxs`}></div>
            </div>
        </Link>
    );
};

export default Button;