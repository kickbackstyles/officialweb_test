import Footer from '../../components/base/Footer/Footer';
import Header from '../../components/base/Header/Header';
import React from 'react';
import Ukv from '../../components/base/Ukv/Ukv';
import Image from 'next/image';
import Button from '../../components/button/Button/Button';
import Link from 'next/link';


const Projects = (): JSX.Element => {
    return (
        <div>
            <Header color='black' />
            <Ukv src='/ece58698-88b1-417f-99e1-8cca1b7ecc87.jpeg' itemsPage={false} title='Projects' english='At KickBackStyles, we are dedicated to ‘Spreading Love to Everyone’ by connecting with people through pop-ups, projects, and events. To expand these activities, we also engage in crowdfunding initiatives.' japanese='KickBackStylesは、『みんなに愛を届ける』という想いのもと、多くの方々とつながりながら、ポップアップやプロジェクト、イベントを開催しています。その活動を広げるために、クラウドファンディングにも取り組んでいます。' />
            <div className='mt-3xl ml-md mr-xl sm:hidden'>
                <h2 className='text-md mb-xl'>Projects</h2>
                <p className='mb-md leading-md'>
                    At KickBackStyles, we are dedicated to ‘Spreading Love to Everyone’ by connecting with people through pop-ups, projects, and events. To expand these activities, we also engage in crowdfunding initiatives.</p>
                <p className='mb-xl leading-md'>
                    KickBackStylesは、『みんなに愛を届ける』という想いのもと、多くの方々とつながりながら、ポップアップやプロジェクト、イベントを開催しています。その活動を広げるために、クラウドファンディングにも取り組んでいます。
                </p>
            </div>
            <div>
                <div className='flex'>
                    <Link href='/' className='relative block h-5xl w-2/5'>
                        <Image src='/ebb1ef1a-19b1-4c38-849d-a05bb06b7f95.jpeg' fill style={{ objectFit: 'cover' }} alt='post 1' />
                        <div className='absolute bottom-md sm:bottom-sm left-sm'>
                            <p className='text-white sm:mb-xxxs'>CrowdFunding</p>
                            <p className='text-white hidden sm:block'>クラウドファンディングを開設いたしました。</p>
                        </div>
                    </Link>
                    <Link href='/' className='relative block h-5xl w-3/5'>
                        <Image src='/7e6ff275-6cd3-4b0b-b487-9ca31dd76a78.jpeg' style={{ objectFit: 'cover' }} fill alt='post 1' />
                        <div className='absolute bottom-md sm:bottom-sm left-sm'>
                            <p className='text-white sm:mb-xxxs'>WinterPopUp</p>
                            <p className='text-white hidden sm:block'>2025.07.11 Open:9:00 ~ Close:15:00</p>
                        </div>
                    </Link>
                </div>
                <div className='flex'>
                    <Link href='/' className='relative block h-5xl w-1/2'>
                        <Image src='/Words of Affirmation Oversized Lux Hoodie in Cream - Small.jpeg' fill style={{ objectFit: 'cover' }} alt='post 1' />
                        <div className='absolute bottom-md sm:bottom-sm left-sm'>
                            <p className='text-white sm:mb-xxxs'>CrowdFunding</p>
                            <p className='text-white hidden sm:block'>クラウドファンディングを開設いたしました。</p>
                        </div>
                    </Link>
                    <Link href='/' className='relative block h-5xl w-1/2'>
                        <Image src='/_Gift Giving_ Oversized Lux Hoodie in Heather Gray.jpeg' style={{ objectFit: 'cover' }} fill alt='post 1' />
                        <div className='absolute bottom-md sm:bottom-sm left-sm'>
                            <p className='text-white sm:mb-xxxs'>WinterPopUp</p>
                            <p className='text-white hidden sm:block'>2025.07.11 Open:9:00 ~ Close:15:00</p>
                        </div>
                    </Link>
                </div>
                <div className='flex'>
                    <Link href='/' className='relative block h-5xl w-3/5'>
                        <Image src='/Endless Summer Club T-Shirt Ocean Blue Special Edition.jpeg' fill style={{ objectFit: 'cover' }} alt='post 1' />
                        <div className='absolute bottom-md sm:bottom-sm left-sm'>
                            <p className='text-white sm:mb-xxxs'>WinterPopUp</p>
                            <p className='text-white hidden sm:block'>2025.07.11 Open:9:00 ~ Close:15:00</p>
                        </div>
                    </Link>
                    <Link href='/' className='relative block h-5xl w-2/5'>
                        <Image src='/Hike it liked it tee _ Indy Brand Clothing.jpeg' style={{ objectFit: 'cover' }} fill alt='post 1' />
                        <div className='absolute bottom-md sm:bottom-sm left-sm'>
                            <p className='text-white sm:mb-xxxs'>WinterPopUp</p>
                            <p className='text-white hidden sm:block'>2025.07.11 Open:9:00 ~ Close:15:00</p>
                        </div>
                    </Link>
                </div>

            </div>
            <div className='sec-aboutus'>
                <div className='relative w-full h-[161.8vw] sm:h-[48vw] flex justify-center items-center'>
                    <Image src='/8b6cffdc-f393-4aba-8ee6-0af39c815a3a.png' fill style={{ objectFit: 'cover' }} alt='aboutus image' />
                    <div className=' absolute z-10 flex flex-col gap-md'>
                        <Image src='/IMG_2467-removebg.png' width={500} height={500} alt='with all my love' className='w-[86vw] sm:w-5xl h-auto mb-md sm:mb-sm' />
                        <div className='w-[50vw] mx-auto sm:flex sm:justify-center sm:gap-xl'>
                            <Button href='/https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' text='@kickbackstyles.official' color='white' size='sm' sizePc='md-pc' className='mb-lg sm:mb-0 sm:w-2xl' />
                            <Button href='/aboutus' text='AboutUs' color='white' size='sm' sizePc='md-pc' className='sm:w-2xl' />
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;