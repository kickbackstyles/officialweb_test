import Footer from '../components/base/Footer/Footer';
import Header from '../components/base/Header/Header';
import Button from '../components/button/Button/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <div className='kv'>

        <div className='relative h-[161.8vw] w-full'>
          <Image src='/7e6ff275-6cd3-4b0b-b487-9ca31dd76a78.jpeg' fill objectFit='cover' alt='key visual' />
          <div className='absolute left-md bottom-2xl'>

            <h1 className='text-white-pink text-md leading-md mb-md'>@kickbackstyles.official<br />
              2025.04.01 21:00<br />
              Releases First Item.
            </h1>


          </div>
        </div>
      </div>
      <div className='sec-items'>
        <div className='relative w-full h-[161.8vw]'>
          <Image src='/Words of Affirmation Oversized Lux Hoodie in Cream - Small.jpeg' fill objectFit='cover' alt='Section items visual' />
          <div className='absolute left-md bottom-2xl'>
            <Button href='/items' text='ViewItems' color='white' size='md' className='' />
          </div>
        </div>
        <div className=''>
          <ul className='flex flex-nowrap overflow-x-scroll'>
            <li className='bg-white min-w-[46vw] w-[46vw] h-[72.8vw] relative flex items-center border-black border-y-[1px] border-r-[1px]'>
              <Link href='/items'>
                <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                <div className='absolute left-sm bottom-xs'>
                  <p className='text-sm text-black leading-md'>BackTextLongSleeve</p>
                  <p>¥4,500</p>
                </div>
              </Link>
            </li>
            <li className='bg-white min-w-[46vw] w-[46vw] h-[72.8vw] relative flex items-center border-black border-y-[1px] border-r-[1px]'>
              <Link href='/items'>
                <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                <div className='absolute left-sm bottom-xs'>
                  <p className='text-sm text-black leading-md'>BackTextLongSleeve</p>
                  <p>¥4,500</p>
                </div>
              </Link>
            </li>
            <li className='bg-white min-w-[46vw] w-[46vw] h-[72.8vw] relative flex items-center border-black border-y-[1px] border-r-[1px]'>
              <Link href='/items'>
                <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                <div className='absolute left-sm bottom-xs'>
                  <p className='text-sm text-black leading-md'>BackTextLongSleeve</p>
                  <p>¥4,500</p>
                </div>
              </Link>
            </li>
            <li className='bg-white min-w-[46vw] w-[46vw] h-[72.8vw] relative flex items-center border-black border-y-[1px] border-r-[1px]'>
              <Link href='/items'>
                <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                <div className='absolute left-sm bottom-xs'>
                  <p className='text-sm text-black leading-md'>BackTextLongSleeve</p>
                  <p>¥4,500</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='sec-aboutus'>
        <div className='relative w-full h-[161.8vw] flex justify-center items-center'>
          <Image src='/8b6cffdc-f393-4aba-8ee6-0af39c815a3a.png' fill objectFit='cover' alt='aboutus image' />
          <div className=' absolute z-10 flex flex-col gap-md'>
            <Image src='/IMG_2467-removebg.png' width={500} height={500} alt='with all my love' className='w-[86vw] h-auto mb-md' />
            <div className='w-[50vw] mx-auto '>
              <Button href='/https://www.instagram.com/kickbackstyles.official?igsh=MTg4NzE5cm5qdG9udQ%3D%3D&utm_source=qr' text='@kickbackstyles.official' color='white' size='sm' className='mb-lg' />
              <Button href='/aboutus' text='AboutUs' color='white' size='sm' className='' />
            </div>

          </div>

        </div>
      </div>
      <div className='sec-projects'>
        <div className='relative w-full h-[161.8vw]'>
          <Image src='/_ (1) 20.41.41.jpeg' fill objectFit='cover' alt='projects background image' />
          <div className='absolute left-md bottom-2xl'>
            <h2 className='text-lg text-white mb-xl'>Projects</h2>
            <p className='text-white mb-md leading-md mr-xl'>
              KickBackStyles is dedicated to spreading love to as many people as possible. To achieve this, we organize crowdfunding campaigns and pop-up events.
            </p>
            <p className='text-white mb-xl leading-md mr-xl'>
              KickBackStylesはたくさんの人に愛を届ける活動を行っています。そのためにクラウドファンディングやPopUpを開催しています。
            </p>
            <div className='w-3xl'>

              <Button href='/projects' text='ViewMore' color='white' size='sm' className='' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
