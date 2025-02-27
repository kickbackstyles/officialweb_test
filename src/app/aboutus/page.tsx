import Footer from '../../components/base/Footer/Footer';
import Header from '../../components/base/Header/Header';
import React from 'react';
import Ukv from '../../components/base/Ukv/Ukv';
import Image from 'next/image';
import Button from '../../components/button/Button/Button';


const AboutUs = (): JSX.Element => {
    return (
        <div>
            <Header color='black' />
            <Ukv src='/kbs_ukv_waml.png' itemsPage={false} title='AboutUs' english='KickBackStyles is an apparel brand founded on the concept of ‘Spreading Love to Everyone.’ Through fashion, we aim to create heartwarming connections and share positivity with the world.' japanese='KickBackStylesは、『みんなに愛を届けよう』をコンセプトに生まれたアパレルブランドです。ファッションを通じて、心温まるつながりを広げていきます。' />
            <div className='mt-3xl ml-md mr-xl sm:hidden'>
                <h2 className='text-md mb-xl'>AboutUs</h2>
                <p className='mb-md leading-md'>
                    KickBackStyles is an apparel brand founded on the concept of ‘Spreading Love to Everyone.’ Through fashion, we aim to create heartwarming connections and share positivity with the world.
                </p>
                <p className='mb-xl leading-md'>
                    KickBackStylesは、『みんなに愛を届けよう』をコンセプトに生まれたアパレルブランドです。ファッションを通じて、心温まるつながりを広げていきます。
                </p>
            </div>
            <div className='sm:flex sm:w-full'>

                <div className='border-y-1 border-black flex items-center justify-center py-4xl sm:py-0 sm:w-1/2 sm:border-r-1'>
                    <div className='w-3xl sm:w-xl h-auto'>
                        <Image src='/kbs_logo.png' width={200} height={200} className='w-full h-auto' alt='kickbackstyles logo' />
                    </div>
                </div>
                <div className='py-2xl sm:py-2xl ml-md sm:ml-0 mr-xl sm:mr-0 sm:pl-md sm:pr-xl sm:w-1/2 sm:flex-1 sm:border-y-1 sm:border-black'>
                    <p className='leading-md mb-lg sm:mb-xs'>KickBackStyles is an apparel brand founded in 2025 in Ise City, Mie Prefecture. Based on the concept of ‘Spreading Love to Everyone,’ our signature asymmetrical heart symbolizes the beauty of love born from human connections. Inspired by global city styles, our casual yet sophisticated modern designs blend urban aesthetics with the warmth of human connection, expressing our hope for a world where people are united through love.</p>
                    <p className='leading-md'>KickBackStylesは、2025年に三重県伊勢市で誕生したアパレルブランドです。『みんなに愛を届ける』というコンセプトのもと、左右非対称のハートをシンボルに、人と人とのつながりに生まれる愛の美しさを表しています。海外のシティスタイルにインスピレーションを受け、カジュアルでありながら品のあるモダンなデザインは都会的なエッセンスと、人と人とが温かな愛でつながれるようにという想いを表現します。</p>
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

export default AboutUs;