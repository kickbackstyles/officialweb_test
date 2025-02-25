'use client';
import Button from '../../button/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = (): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header>
            <div className='flex justify-between items-center px-md py-sm bg-white sticky border-b-[2px] border-black z-50'>
                <div className='flex flex-col gap-xs cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className={`${isMenuOpen ? ' rotate-45 translate-y-[1.85vw]' : 'rotate-0'} block w-[5.4vw] h-[2px] bg-black duration-300`}></span>
                    <span className={`${isMenuOpen ? 'opacity-0 ' : 'opacity-1'} block w-[5.4vw] h-[2px] bg-black duration-700`}></span>
                    <span className={`${isMenuOpen ? ' -rotate-45 -translate-y-[1.85vw]' : 'rotate-0'} block w-[5.4vw] h-[2px] bg-black duration-300`}></span>
                </div>
                <div className='relative w-[14.6vw] h-[13.1vw]'>
                    <Image src='/kbs_web_logo.png' fill alt='logo image' />
                </div>
                <div className='relative w-[8vw] h-[8vw]'>
                    <Image src='/shopping-bag-svgrepo-com.svg' fill alt='shopping bag' />
                </div>
            </div>
            <div className={`${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'} hamburger-menu bg-white fixed w-full h-[92vh] overflow-y-auto z-20 duration-300`}>

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
                    <li className='border-y-[2px] border-black px-md py-lg flex items-center justify-between'>
                        <Link href='/items' className='block  font-bold'>Items</Link>
                        <div className='relative w-[1.25vw] h-sm'>
                            <Image src='/arrowtoright.png' fill alt='arrow to right' />
                        </div>
                    </li>
                    <li className='border-b-[2px] border-black px-md py-lg flex items-center justify-between'>
                        <Link href='/items' className='block  font-bold'>Gift</Link>
                        <div className='relative w-[1.25vw] h-sm'>
                            <Image src='/arrowtoright.png' fill alt='arrow to right' />
                        </div>
                    </li>
                    <li className='border-b-[2px] border-black px-md py-lg flex items-center justify-between'>
                        <Link href='/items' className='block  font-bold'>AboutUs</Link>
                        <div className='relative w-[1.25vw] h-sm'>
                            <Image src='/arrowtoright.png' fill alt='arrow to right' />
                        </div>
                    </li>
                    <li className='border-b-[2px] border-black px-md py-lg flex items-center justify-between'>
                        <Link href='/items' className='block  font-bold'>PopUp&Projects</Link>
                        <div className='relative w-[1.25vw] h-sm'>
                            <Image src='/arrowtoright.png' fill alt='arrow to right' />
                        </div>
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
                        <Link href='https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' className='flex flex-col justify-center items-center gap-sm border-black border-l-1 border-b-1 w-full py-2xl'>
                            <div className='relative w-[4.74vw] h-lg'>
                                <Image src='/tiktok.png' fill alt='tiktok icon' />
                            </div>
                            <p>@kickbackstyles_official</p>
                        </Link>
                    </div>
                    <div className='flex h-[50vw]'>
                        <div className='flex flex-col justify-center items-center gap-sm border-black border-t-1 border-b-[2px] border-r-1 w-full py-2xl'>
                            <div className='relative w-2xl h-[13.01vw]'>
                                <Image src='/kbs_web_logo.png' fill alt='kbs logo icon' />
                            </div>

                        </div>
                        <div className=' border-black border-l-1 border-b-[2px] border-t-1 w-full py-2xl'>
                            <div className='flex items-center justify-center'>
                                <div>
                                    <p className='mb-sm'>Location: Ise, Mie</p>
                                    <Link href='tel:08015849291' className='block mb-md'>Tel: 080-1584-9291</Link>

                                    {/* button */}
                                    <Button color='black' text='Contact' href='/contact' size='sm' className='' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;