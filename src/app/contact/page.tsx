import ContactComp from '../../components/base/Contact/Contact'
import Footer from '../../components/base/Footer/Footer'
import Header from '../../components/base/Header/Header'

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
