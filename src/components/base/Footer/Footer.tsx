import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../button/Button/Button';

const Footer = (): JSX.Element => {
    return (
        <footer>
            <div>
                <div className='flex h-4xl'>
                    <Link href='https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' className='flex flex-col justify-center items-center gap-sm border-black border-r-1 border-b-[1px] w-full'>
                        <div className='w-lg h-lg'>
                            <Image src='/instagram.png' width={100} height={100} className='w-full h-auto' alt='instagram icon' />
                        </div>

                        <p>@kickbackstyles.official</p>
                    </Link>
                    <Link href='https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' className='flex flex-col justify-center items-center gap-sm border-black border-b-[1px] w-full'>
                        <div className='w-[4.74vw] h-lg'>
                            <Image src='/tiktok.png' width={100} height={100} className='w-full h-auto' alt='tiktok icon' />
                        </div>
                        <p>@kickbackstyles_official</p>
                    </Link>
                </div>
                <div className='flex h-4xl'>
                    <div className='flex flex-col justify-center items-center gap-sm border-black border-b-[1px] border-r-[1px] w-full'>
                        <div className='w-2xl h-[13.01vw]'>
                            <Image src='/kbs_web_logo.png' width={100} height={100} className='w-full h-auto' alt='kbs logo icon' />
                        </div>

                    </div>
                    <div className=' border-black border-b-[1px] w-full flex items-center justify-center'>
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
            <div className='py-xl px-lg flex justify-between border-b-[1px] border-black'>
                <div>
                    <ul className='flex flex-col gap-sm'>
                        <li><Link href='/items' className='font-bold'>Items:</Link></li>
                        <li><Link href='/items?q=newarrival' className=''>NewArrivals</Link></li>
                        <li><Link href='/items?q=gift' className=''>Gift</Link></li>
                        <li><Link href='/items?q=women' className=''>Women</Link></li>
                        <li><Link href='/items?q=men' className=''>Men</Link></li>
                        <li><Link href='/items?q=accessories' className=''>Accessories</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-sm mb-md'>
                        <li><Link href='/aboutus' className='font-bold'>AboutUs:</Link></li>
                        <li><Link href='https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' className=''>KickBackStyles</Link></li>
                    </ul>
                    <ul className='flex flex-col gap-sm'>
                        <li><Link href='/projects' className='font-bold'>Projects:</Link></li>
                        <li><Link href='/projects?q=popup' className=''>PopUp</Link></li>
                        <li><Link href='/projects?q=crowdfunding' className=''>CrowdFunding</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-sm'>
                        <li><Link href='/aboutus' className='font-bold'>Legal:</Link></li>
                        <li><Link href='/aboutus' className=''>AboutUsPage</Link></li>
                        <li><Link href='https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' className=''>KickBackStyles</Link></li>
                    </ul>
                </div>
            </div>
            <div className='w-full h-xl flex items-center justify-center'>
                <p className='flex items-center gap-xs text-xs'><span className='block w-sm h-sm'><Image src='/copyright-icon.png' width={30} height={30} className='w-full h-auto' alt='copyright' /></span><span className='block'>KickBackStyles 2025</span></p>
            </div>
        </footer>
    );
};

export default Footer;