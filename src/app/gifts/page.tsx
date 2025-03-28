'use client'
import { CldImage } from 'next-cloudinary'
import Footer from '../../components/base/Footer/Footer'
import Header from '../../components/base/Header/Header'

const Gifts = (): JSX.Element => {
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
        <h2 className="text-lg text-black sm:text-md-pc">ComingSoon...!</h2>
      </div>
      <Footer />
    </div>
  )
}

export default Gifts
