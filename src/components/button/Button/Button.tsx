import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    color: string; // colorの型を指定
    text: string;  // textの型を指定
    href: string;
    size: string;
    className: string;
}

const Button: React.FC<ButtonProps> = ({ color, text, href, size, className }) => {
    return (
        <Link href={href} className={`${className} block`}>

            <p className={`text-${color} text-${size} pb-xs`}>{text}</p>
            <div className='flex items-center gap-xs'>
                <div className={`bg-${color} w-full h-xxs`}></div>
                <div className={`bg-${color} w-xxs h-xxs`}></div>
            </div>
        </Link>
    );
};

export default Button;