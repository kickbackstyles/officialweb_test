
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

        <div className='relative h-[144vw] w-full sm:h-5xl'>
          <Image src='/7e6ff275-6cd3-4b0b-b487-9ca31dd76a78.jpeg' fill objectFit='cover' alt='key visual' />
          <div className='absolute left-md bottom-2xl '>

            <h1 className='text-white-pink text-md sm:text-md-pc leading-md w-3/5 sm:w-full'>@kickbackstyles.official<br />
              2025.04.01 21:00 Releases First Item.
            </h1>

          </div>
        </div>
      </div>
      <div className='sec-items sm:flex sm:flex-row-reverse'>
        <div className='relative w-full h-[161.8vw] sm:h-5xl sm:w-1/2'>
          <Link href='/items' className='block w-full h-full'>
            <Image src='/Words of Affirmation Oversized Lux Hoodie in Cream - Small.jpeg' fill objectFit='cover' alt='Section items visual' />
            <div className='absolute left-md bottom-lg'>
              <p className='text-white text-md sm:text-md-pc pb-xs sm:pb-xxxxs'>AllItems</p>
              <div className='flex items-center gap-xs sm:gap-xxxxs'>
                <div className='bg-white w-full h-xxs sm:h-xxxxs'></div>
                <div className='bg-white w-xxs h-xxs sm:w-xxxxs sm:h-xxxxs'></div>
              </div>
            </div>
          </Link>
        </div>
        <div className='sm:w-1/2 sm:h-5xl'>
          <ul className='flex flex-nowrap overflow-x-scroll sm:overflow-x-auto sm:flex-wrap sm:h-full'>
            <li className='bg-white min-w-[46vw] sm:min-w-0 w-[46vw] sm:w-1/2 h-[72.8vw] sm:h-1/2 relative flex items-center border-black border-y-[1px] border-r-[1px]'>
              <Link href='/items' className='sm:w-full sm:h-full sm:flex sm:items-center sm:justify-center'>
                <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                <div className='absolute left-sm bottom-xs'>
                  <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                  <p>¥4,500</p>
                </div>
              </Link>
            </li>
            <li className='bg-white min-w-[46vw] sm:min-w-0 w-[46vw] sm:w-1/2 h-[72.8vw] sm:h-1/2 relative flex items-center border-black border-y-[1px] border-r-[1px]'>
              <Link href='/items' className='sm:w-full sm:h-full sm:flex sm:items-center sm:justify-center'>
                <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                <div className='absolute left-sm bottom-xs'>
                  <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                  <p>¥4,500</p>
                </div>
              </Link>
            </li>
            <li className='bg-white min-w-[46vw] sm:min-w-0 w-[46vw] sm:w-1/2 h-[72.8vw] sm:h-1/2 relative flex items-center border-black border-y-[1px] sm:border-t-0 border-r-[1px]'>
              <Link href='/items' className='sm:w-full sm:h-full sm:flex sm:items-center sm:justify-center'>
                <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                <div className='absolute left-sm bottom-xs'>
                  <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                  <p>¥4,500</p>
                </div>
              </Link>
            </li>
            <li className='bg-white min-w-[46vw] sm:min-w-0 w-[46vw] sm:w-1/2 h-[72.8vw] sm:h-1/2 relative flex items-center border-black border-y-[1px] sm:border-t-0 border-r-[1px]'>
              <Link href='/items' className='sm:w-full sm:h-full sm:flex sm:items-center sm:justify-center'>
                <Image src='/ESSENTIALS Hoodie - Gray _ US L.jpeg' width={400} height={400} sizes='100vw' objectFit='cover' alt='item 1' className='w-full h-auto' />
                <div className='absolute left-sm bottom-xs'>
                  <p className='text-sm sm:text-sm-pc text-black leading-md'>BackTextLongSleeve</p>
                  <p>¥4,500</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
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
}
