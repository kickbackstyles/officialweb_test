import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../button/Button/Button';

const Footer = (): JSX.Element => {
    return (
        <footer>
            <div>
                <div className='flex flex-wrap'>
                    <Link href='https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' className='flex flex-col justify-center items-center gap-sm border-black border-r-1 border-b-[1px] w-1/2 sm:w-[calc(100%/3)] h-4xl sm:h-2xl'>
                        <div className='w-lg h-lg sm:w-sm sm:h-sm'>
                            <Image src='/instagram.png' width={100} height={100} className='w-full h-auto' alt='instagram icon' />
                        </div>

                        <p>@kickbackstyles.official</p>
                    </Link>
                    <Link href='https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' className='flex flex-col justify-center items-center gap-sm border-black border-b-[1px] sm:border-r-1 w-1/2 sm:w-[calc(100%/3)] h-4xl sm:h-2xl'>
                        <div className='w-[4.74vw] sm:w-sm h-lg sm:h-sm'>
                            <Image src='/tiktok.png' width={100} height={100} className='w-full sm:w-auto h-auto sm:h-full' alt='tiktok icon' />
                        </div>
                        <p>@kickbackstyles_official</p>
                    </Link>
                    <div className='flex flex-col justify-center items-center gap-sm border-black border-b-[1px] border-r-[1px] w-1/2 sm:w-[calc(100%/3)] h-4xl sm:h-2xl'>
                        <div className='w-2xl h-[13.01vw] sm:w-lg sm:h-lg'>
                            <Image src='/kbs_web_logo.png' width={100} height={100} className='w-full h-auto' alt='kbs logo icon' />
                        </div>

                    </div>
                    <div className=' border-black border-b-[1px] w-1/2 sm:w-[calc(100%/3)] sm:border-r-1 flex items-center justify-center h-4xl sm:h-2xl'>
                        <div className='flex items-center justify-center'>
                            <div>
                                <p className='mb-sm sm:mb-xxs sm:flex sm:items-center sm:gap-xxs'><span className='sm:block hidden h-xxs w-xxs'><Image src='/mappin.png' width={40} height={40} className='w-auto h-full' alt='map icon' /></span>Location: Ise, Mie</p>
                                <Link href='tel:08015849291' className='block mb-md sm:mb-sm sm:flex sm:items-center sm:gap-xxs'><span className='sm:block hidden h-xxs w-xxs'><Image src='/phone.png' width={40} height={40} className='w-auto h-full' alt='map icon' /></span>Tel: 080-1584-9291</Link>

                                {/* button */}
                                <Button color='black' text='Contact' href='/contact' size='sm' sizePc='sm-pc' className='' />

                            </div>
                        </div>
                    </div>
                    <div className='py-xl sm:py-sm px-lg flex justify-between sm:justify-start sm:gap-md sm:h-2xl border-b-[1px] border-black w-full sm:w-[calc(100%/3*2)]'>
                        <div>
                            <ul className='flex flex-col gap-sm sm:gap-xxxs'>
                                <li><Link href='/items' className='font-bold'>Items:</Link></li>
                                <li><Link href='/items?q=newarrival' className=''>NewArrivals</Link></li>
                                <li><Link href='/items?q=gift' className=''>Gift</Link></li>
                                <li><Link href='/items?q=women' className=''>Women</Link></li>
                                <li><Link href='/items?q=men' className=''>Men</Link></li>
                                <li><Link href='/items?q=accessories' className=''>Accessories</Link></li>
                            </ul>
                        </div>
                        <div className='sm:flex sm:gap-md'>
                            <ul className='flex flex-col gap-sm mb-md sm:mb-0 sm:gap-xxxs'>
                                <li><Link href='/aboutus' className='font-bold'>AboutUs:</Link></li>
                                <li><Link href='https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' className=''>KickBackStyles</Link></li>
                            </ul>
                            <ul className='flex flex-col gap-sm sm:gap-xxxs'>
                                <li><Link href='/projects' className='font-bold'>Projects:</Link></li>
                                <li><Link href='/projects?q=popup' className=''>PopUp</Link></li>
                                <li><Link href='/projects?q=crowdfunding' className=''>CrowdFunding</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-sm sm:gap-xxxs'>
                                <li><Link href='/privacypolicy' className='font-bold'>Legal:</Link></li>
                                <li><Link href='/privacypolicy' className=''>PrivacyPolicy</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full h-xl sm:h-md flex items-center justify-center'>
                <p className='flex items-center gap-xs sm:gap-xxxxs text-xs sm:text-[0.7vw]'><span className='block w-sm h-sm sm:h-xxs sm:w-xxs'><Image src='/copyright-icon.png' width={30} height={30} className='w-full h-auto' alt='copyright' /></span><span className='block'>KickBackStyles 2025</span></p>
            </div>
        </footer>
    );
};

export default Footer;