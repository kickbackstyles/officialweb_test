import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface UkvProps {
    src: string;
    imgPosition?: string;
    itemsPage: boolean;
    title: string;
    english?: string;
    japanese?: string;
}

const Ukv: React.FC<UkvProps> = ({ src, imgPosition = '', itemsPage, title, english, japanese }) => {
    return (
        <div>

            <div className='absolute z-0 left-0 top-0 h-[17.01vw] w-full border-b-1 border-black hidden sm:block'></div>
            <div className='sm:flex sm:items-end sm:mb-xl'>

                <div className='relative w-full h-[144vw] sm:h-[48vw] sm:w-5xl sm:z-10 sm:overflow-hidden sm:flex sm:justify-center sm:items-center'>
                    <Image src={`${src}`} width={900} height={900} alt='key visual' className={`w-auto h-full sm:w-full sm:h-auto sm:absolute sm:${imgPosition} `} />

                </div>
                <div className='hidden sm:block sm:ml-md sm:mr-lg sm:mb-sm sm:w-auto flex-1'>
                    <h2 className='sm:text-md-pc sm:mb-sm'>{title}</h2>
                    <ul className={`${itemsPage ? 'sm:block' : 'sm:hidden'} sm:flex sm:flex-col sm:gap-xxs`}>
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
                    <div className={`${itemsPage ? 'sm:hidden' : 'sm:block sm:'}`}>

                        <p className='leading-md mb-xxs'>{english}</p>
                        <p className='leading-md'>{japanese}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Ukv;