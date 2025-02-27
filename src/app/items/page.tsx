import Footer from '../../components/base/Footer/Footer';
import Header from '../../components/base/Header/Header';
import React from 'react';
import Ukv from '../../components/base/Ukv/Ukv';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/button/Button/Button';


const Items = (): JSX.Element => {
    return (
        <div>
            <Header color='black' />
            <Ukv src='/1547060693b9e054197a44aaa07a680d.jpg' imgPosition='bottom-0' itemsPage={true} title='Items' />
            <div className='mt-3xl mb-xl ml-md flex gap-xl sm:hidden'>
                <h2 className='text-md font-bold mb-md'>Items</h2>
                <ul className='flex flex-col gap-md'>
                    <li>
                        <Link href='/items?=newarrivals' className=''>NewArrivals</Link>
                    </li>
                    <li>
                        <Link href='/items?=gifts' className=''>Gifts</Link>
                    </li>
                    <li>
                        <Link href='/items?=women' className=''>Women</Link>
                    </li>
                    <li>
                        <Link href='/items?=men' className=''>Men</Link>
                    </li>
                    <li>
                        <Link href='/items?=accessories' className=''>Accessories</Link>
                    </li>
                </ul>
            </div>
            <div className=''>
                <ul className='flex flex-wrap'>
                    <li className='bg-white w-1/2 sm:w-[calc(100%/3)] h-[72.8vw] sm:h-[44.41vw] relative flex items-center border-black border-y-[1px] border-r-1'>
                        <Link href='/items' className='sm:h-full sm:w-full sm:flex sm:justify-center sm:items-center'>
                            <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                            <div className='absolute left-sm bottom-xs'>
                                <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                                <p>¥4,500</p>
                            </div>
                        </Link>
                    </li>
                    <li className='bg-white w-1/2 sm:w-[calc(100%/3)] h-[72.8vw] sm:h-[44.41vw] relative flex items-center border-black border-y-[1px] sm:border-r-1'>
                        <Link href='/items' className='sm:h-full sm:w-full sm:flex sm:justify-center sm:items-center'>
                            <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                            <div className='absolute left-sm bottom-xs'>
                                <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                                <p>¥4,500</p>
                            </div>
                        </Link>
                    </li>
                    <li className='bg-white w-1/2 sm:w-[calc(100%/3)] h-[72.8vw] sm:h-[44.41vw] relative flex items-center border-black border-b-1 sm:border-y-1 border-r-1'>
                        <Link href='/items' className='sm:h-full sm:w-full sm:flex sm:justify-center sm:items-center'>
                            <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                            <div className='absolute left-sm bottom-xs'>
                                <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                                <p>¥4,500</p>
                            </div>
                        </Link>
                    </li>
                    <li className='bg-white w-1/2 sm:w-[calc(100%/3)] h-[72.8vw] sm:h-[44.41vw] relative flex items-center border-black border-b-1 sm:border-r-1'>
                        <Link href='/items' className='sm:h-full sm:w-full sm:flex sm:justify-center sm:items-center'>
                            <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                            <div className='absolute left-sm bottom-xs'>
                                <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                                <p>¥4,500</p>
                            </div>
                        </Link>
                    </li>
                    <li className='bg-white w-1/2 sm:w-[calc(100%/3)] h-[72.8vw] sm:h-[44.41vw] relative flex items-center border-black border-b-1 border-r-1'>
                        <Link href='/items' className='sm:h-full sm:w-full sm:flex sm:justify-center sm:items-center'>
                            <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                            <div className='absolute left-sm bottom-xs'>
                                <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                                <p>¥4,500</p>
                            </div>
                        </Link>
                    </li>
                    <li className='bg-white w-1/2 sm:w-[calc(100%/3)] h-[72.8vw] sm:h-[44.41vw] relative flex items-center border-black border-b-1'>
                        <Link href='/items' className='sm:h-full sm:w-full sm:flex sm:justify-center sm:items-center'>
                            <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                            <div className='absolute left-sm bottom-xs'>
                                <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                                <p>¥4,500</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='sec-aboutus'>
                <div className='relative w-full h-[161.8vw] sm:h-[48vw] flex justify-center items-center'>
                    <Image src='/8b6cffdc-f393-4aba-8ee6-0af39c815a3a.png' fill objectFit='cover' alt='aboutus image' />
                    <div className=' absolute z-10 flex flex-col gap-md'>
                        <Image src='/IMG_2467-removebg.png' width={500} height={500} alt='with all my love' className='w-[86vw] sm:w-5xl h-auto mb-md sm:mb-sm' />
                        <div className='w-[50vw] mx-auto sm:flex sm:justify-center sm:gap-xl'>
                            <Button href='/https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' text='@kickbackstyles.official' color='white' size='sm' sizePc='md-pc' className='mb-lg sm:mb-0 sm:w-2xl' />
                            <Button href='/aboutus' text='AboutUs' color='white' size='sm' sizePc='md-pc' className='sm:w-2xl' />
                        </div>

                    </div>

                </div>
            </div>
            <div className='sec-projects'>
                <div className='relative w-full h-[161.8vw] sm:h-[48vw]'>
                    <Image src='/_ (1) 20.41.41.jpeg' fill objectFit='cover' alt='projects background image' />
                    <div className='absolute left-md bottom-2xl sm:bottom-lg'>
                        <h2 className='text-lg sm:text-md-pc text-white mb-xl sm:mb-sm'>Projects</h2>
                        <p className='text-white mb-md sm:mb-xs leading-md mr-xl sm:w-4xl'>
                            KickBackStyles is dedicated to spreading love to as many people as possible. To achieve this, we organize crowdfunding campaigns and pop-up events.
                        </p>
                        <p className='text-white mb-xl sm:mb-md leading-md mr-xl sm:w-4xl'>
                            KickBackStylesはたくさんの人に愛を届ける活動を行っています。そのためにクラウドファンディングやPopUpを開催しています。
                        </p>
                        <div className='w-3xl sm:w-xl'>

                            <Button href='/projects' text='ViewMore' color='white' size='sm' sizePc='sm-pc' className='' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Items;