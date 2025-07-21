'use client'
import { CldImage } from 'next-cloudinary'
import Header from '../../../components/base/Header/Header'
import Footer from '../../../components/base/Footer/Footer'
import Button from '../../../components/button/Button/Button'
const Thanks = (): JSX.Element => {
  return (
    <div>
      <Header color="black" />
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="relative mb-xl size-2xl sm:mb-md sm:size-lg">
          <CldImage
            src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103638/kbs_logo_wwedmt.png"
            width={200}
            height={200}
            alt="KickBackStyles logo"
            className="h-auto w-full"
          />
        </div>
        <h2 className="text-md text-black sm:text-md-pc">
          Thank you for your message.
        </h2>

        <Button href="/" text="TopPage" color="black" size="md" sizePc='md-pc' className='mt-xl sm:mt-md' />
      </div>
      <Footer />
    </div>
  )
}
export default Thanks
