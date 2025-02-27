'use client';
import Button from '../../button/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
    color?: string; // colorプロパティを追加

}

const Header: React.FC<HeaderProps> = ({ color = 'white' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className='fixed w-full h-auto z-50 '>
                <div className='flex justify-between items-center sm:items-start px-md py-sm sm:py-0 bg-white sm:bg-transparent sticky border-b-[1px] border-black sm:border-none z-50 '>
                    <div className={`${isMenuOpen ? 'justify-center items-center' : 'justify-normal items-baseline gap-xs'} flex flex-col cursor-pointer relative sm:hidden`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className={`${isMenuOpen ? 'absolute rotate-45' : 'rotate-0'} block w-lg h-[2px] bg-black duration-300`}></span>
                        <span className={`${isMenuOpen ? 'opacity-0 ' : 'opacity-1'} block w-[5.4vw] h-[2px] bg-black duration-300`}></span>
                        <span className={`${isMenuOpen ? 'absolute -rotate-45' : 'rotate-0'} block w-lg h-[2px] bg-black duration-300`}></span>
                    </div>
                    <Link href='/' className='block w-2xl h-[13.1vw] sm:w-lg sm:h-lg sm:fixed sm:top-md'>
                        <Image src='/kbs_web_logo.png' width={100} height={100} className='w-full h-auto' alt='logo image' />
                    </Link>
                    <div className='relative w-[8vw] h-[8vw] sm:hidden'>
                        <Image src='/shopping-bag-svgrepo-com.svg' fill alt='shopping bag' />
                    </div>
                    <ul className='sm:flex flex-col items-end gap-xxxs hidden sm:fixed sm:top-md sm:right-md'>
                        <li><Link href='/items' className={`block text-${color} `} >Items</Link></li>
                        <li><Link href='/gifts' className={`block text-${color} `} >Gifts</Link></li>
                        <li><Link href='/aboutus' className={`block text-${color} `} >AboutUs</Link></li>
                        <li className='mb-xs'><Link href='/items' className={`block text-${color} `} >Projects</Link></li>
                        <div className='w-full'>
                            <Button color={color} href='/' text='Shop' size='' sizePc='sm-pc' className='' />
                        </div>
                    </ul>
                </div>

                <div className={`${isMenuOpen ? 'visible opacity-100 overscroll-contain' : 'invisible opacity-0 overscroll-auto'} hamburger-menu bg-white fixed w-full h-[92vh] overflow-y-auto z-20 duration-300 sm:hidden`}>

                    <div className='flex'>
                        <Link href='/items' className='relative block w-full'>
                            <div className='relative w-full h-5xl'>
                                <Image src='/Words of Affirmation Oversized Lux Hoodie in Cream - Small.jpeg' fill alt='new items' />
                            </div>
                            <p className='text-white  absolute bottom-xs left-xs'>NewArrival</p>
                        </Link>
                        <Link href='/items' className='relative block w-full'>
                            <div className='relative w-full h-5xl'>
                                <Image src='/Words of Affirmation Oversized Lux Hoodie in Cream - Small.jpeg' fill alt='new items' />
                            </div>
                            <p className='text-white  absolute bottom-xs left-xs'>Crowdfunding</p>

                        </Link>

                    </div>
                    <ul>
                        <li className='border-y-[1px] border-black flex items-center justify-between'>
                            <Link href='/items' className='flex justify-between items-center font-bold w-full px-md py-lg'>
                                <p>Items</p>
                                <div className='relative w-[1.25vw] h-sm'>
                                    <Image src='/arrowtoright.png' fill alt='arrow to right' />
                                </div>
                            </Link>

                        </li>
                        <li className='border-b-[1px] border-black flex items-center justify-between'>
                            <Link href='/gifts' className='flex justify-between items-center w-full font-bold px-md py-lg'>
                                <p>Gift</p>
                                <div className='relative w-[1.25vw] h-sm'>
                                    <Image src='/arrowtoright.png' fill alt='arrow to right' />
                                </div>
                            </Link>
                        </li>
                        <li className='border-b-[1px] border-black flex items-center justify-between'>
                            <Link href='/aboutus' className='flex justify-between items-center w-full px-md py-lg font-bold'>

                                <p>AboutUs</p>
                                <div className='relative w-[1.25vw] h-sm'>
                                    <Image src='/arrowtoright.png' fill alt='arrow to right' />
                                </div>
                            </Link>

                        </li>
                        <li className='border-b-[1px] border-black flex items-center justify-between'>
                            <Link href='/projects' className='flex justify-between items-center w-full px-md py-lg font-bold'>
                                <p>Projects</p>
                                <div className='relative w-[1.25vw] h-sm'>
                                    <Image src='/arrowtoright.png' fill alt='arrow to right' />
                                </div>
                            </Link>

                        </li>

                    </ul>
                    <div>
                        <div className='flex h-[50vw]'>
                            <Link href='https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' className='flex flex-col justify-center items-center gap-sm border-black border-r-1 border-b-1 w-full py-2xl'>
                                <div className='relative w-lg h-lg'>
                                    <Image src='/instagram.png' fill alt='instagram icon' />
                                </div>
                                <p>@kickbackstyles.official</p>
                            </Link>
                            <Link href='https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' className='flex flex-col justify-center items-center gap-sm border-black border-b-1 w-full py-2xl'>
                                <div className='relative w-[4.74vw] h-lg'>
                                    <Image src='/tiktok.png' fill alt='tiktok icon' />
                                </div>
                                <p>@kickbackstyles_official</p>
                            </Link>
                        </div>
                        <div className='flex h-[50vw]'>
                            <div className='flex flex-col justify-center items-center gap-sm border-black border-b-1 border-r-1 w-full py-2xl'>
                                <div className='relative w-2xl h-[13.01vw]'>
                                    <Image src='/kbs_web_logo.png' fill alt='kbs logo icon' />
                                </div>

                            </div>
                            <div className=' border-black border-b-1 w-full py-2xl'>
                                <div className='flex items-center justify-center'>
                                    <div>
                                        <p className='mb-sm'>Location: Ise, Mie</p>
                                        <Link href='tel:08015849291' className='block mb-md'>Tel: 080-1584-9291</Link>

                                        {/* button */}
                                        <Button color='black' text='Contact' href='/contact' size='sm' sizePc='' className='' />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;