'use client'
import { CldImage } from 'next-cloudinary'
import Footer from '../../../components/base/Footer/Footer'
import Header from '../../../components/base/Header/Header'
import ProjectsSection from '../../../components/base/ProjectsSection/ProjectsSection'
import Ukv from '../../../components/base/Ukv/Ukv/Ukv'

const AU = (): JSX.Element => {
  return (
    <div>
      <Header color="black" />
      <Ukv
        src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743104649/IMG_1255_sshe9q.jpg"
        srcSp="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103664/IMG_1255_SP.JPG_03-26-23-306_jx94pn.jpg"
        itemsPage={false}
        title="AboutUs"
        english="KickBackStyles is an apparel brand founded on the concept of ‘Spreading Love to Everyone.’ Through fashion, we aim to create heartwarming connections and share positivity with the world."
        japanese="KickBackStylesは、『みんなに愛を届けよう』をコンセプトに生まれたアパレルブランドです。ファッションを通じて、心温まるつながりを広げていきます。"
      />
      <div className="ml-md mr-xl mt-3xl sm:hidden">
        <h2 className="mb-xl text-md">AboutUs</h2>
        <p className="mb-md leading-md">
          KickBackStyles is an apparel brand founded on the concept of
          ‘Spreading Love to Everyone.’ Through fashion, we aim to create
          heartwarming connections and share positivity with the world.
        </p>
        <p className="mb-xl leading-md">
          KickBackStylesは、『みんなに愛を届けよう』をコンセプトに生まれたアパレルブランドです。ファッションを通じて、心温まるつながりを広げていきます。
        </p>
      </div>
      <div className="sm:flex sm:w-full">
        <div className="flex items-center justify-center border-y-1 border-black py-4xl sm:w-1/2 sm:border-r-1 sm:py-0">
          <div className="h-auto w-3xl sm:w-xl">
            <CldImage
              src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103638/kbs_logo_wwedmt.png"
              width={200}
              height={200}
              className="h-auto w-full"
              alt="kickbackstyles logo"
            />
          </div>
        </div>
        <div className="ml-md mr-xl py-2xl sm:mx-0 sm:w-1/2 sm:flex-1 sm:border-y-1 sm:border-black sm:px-md sm:pr-xl">
          <p className="mb-lg leading-md sm:mb-xs">
            KickBackStyles is an apparel brand founded in 2025 in Ise City, Mie
            Prefecture. Based on the concept of ‘Spreading Love to Everyone,’
            our signature asymmetrical heart symbolizes the beauty of love born
            from human connections. Inspired by global city styles, our casual
            yet sophisticated modern designs blend urban aesthetics with the
            warmth of human connection, expressing our hope for a world where
            people are united through love.
          </p>
          <p className="leading-md">
            KickBackStylesは、2025年に三重県伊勢市で誕生したアパレルブランドです。『みんなに愛を届ける』というコンセプトのもと、左右非対称のハートをシンボルに、人と人とのつながりに生まれる愛の美しさを表しています。海外のシティスタイルにインスピレーションを受け、カジュアルでありながら品のあるモダンなデザインは都会的なエッセンスと、人と人とが温かな愛でつながれるようにという想いを表現します。
          </p>
        </div>
      </div>
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default AU
