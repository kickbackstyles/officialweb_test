import type { Viewport } from 'next'
import ContactComp from '../../components/base/Contact/Contact'
import Footer from '../../components/base/Footer/Footer'
import Header from '../../components/base/Header/Header'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const Contact = (): JSX.Element => {
  return (
    <div>
      <Header color="black" />
      <ContactComp />
      <Footer />
    </div>
  )
}

export default Contact
