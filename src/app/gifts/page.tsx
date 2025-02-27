import Footer from '../../components/base/Footer/Footer';
import Header from '../../components/base/Header/Header';
import React from 'react';
import Image from 'next/image';



const Gifts = (): JSX.Element => {
    return (
        <div>
            <Header color='black' />
            <div className='h-screen w-full flex justify-center items-center flex-col'>
                <div className='relative w-2xl h-2xl mb-xl sm:mb-md sm:w-lg sm:h-lg'>
                    <Image src='/kbs_logo.png' width={200} height={200} alt='KickBackStyles logo' className='w-full h-auto' />
                </div>
                <h2 className='text-lg sm:text-md-pc text-black'>ComingSoon...!</h2>
            </div>
            <Footer />
        </div>
    );
};

export default Gifts;