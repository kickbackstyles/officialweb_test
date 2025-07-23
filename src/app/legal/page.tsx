import type { Metadata } from 'next'
import Footer from '../../components/base/Footer/Footer'
import Header from '../../components/base/Header/Header'

export const metadata: Metadata = {
  title: 'Privacy Policy | KickBackStyles',
  description: 'KickBackStylesのプライバシーポリシーです。お客様の個人情報の取り扱いについて詳しく説明しています。',
  keywords: ['KickBackStyles', 'プライバシーポリシー', '個人情報保護', '利用規約'],
  openGraph: {
    title: 'Privacy Policy | KickBackStyles',
    description: 'KickBackStylesのプライバシーポリシーです。お客様の個人情報の取り扱いについて詳しく説明しています。',
    images: [
      { 
        url: '/ogp/thumbnail.png', 
        width: 1200, 
        height: 630,
        alt: 'KickBackStyles Privacy Policy'
      },
    ],
  },
  alternates: {
    canonical: '/legal',
  },
}

const Legal = (): JSX.Element => {
  return (
    <div>
      <Header color="black" />
      <div className="mx-md mb-2xl pt-4xl text-md sm:mx-xl sm:my-2xl sm:py-0 sm:text-md-pc">
        <h1 className="mb-sm font-bold sm:text-md-pc">
          プライバシー・ポリシー
        </h1>
        <p className="mb-xl sm:mb-lg  sm:text-sm-pc">
          当社は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
        </p>

        <h2 className="mb-sm font-bold sm:mb-xxs">個人情報の管理</h2>
        <p className="mb-xl sm:mb-md sm:text-sm-pc">
          当社は、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
        </p>

        <h2 className="mb-sm font-bold sm:mb-xxs">個人情報の利用目的</h2>
        <ol className="mb-xl sm:mb-md sm:text-sm-pc">
          {' '}
          <li>
            当社は、法令に定める場合を除き、お客様よりご提供いただいた個人情報を、当社が明示した利用目的の範囲内で、業務の遂行上必要な限りにおいて使用いたします。
          </li>
        </ol>

        <h2 className="mb-sm font-bold sm:mb-xxs">
          個人情報の第三者への開示・提供の禁止
        </h2>
        <p className="mb-md sm:mb-xxs sm:text-sm-pc">
          当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
        </p>
        <ul className="mb-xl flex flex-col gap-sm sm:mb-md sm:gap-xxxs sm:text-sm-pc">
          <li>・お客さまの同意がある場合</li>
          <li>
            ・お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
          </li>
          <li>・法令に基づき開示することが必要である場合</li>
        </ul>

        <h2 className="mb-sm font-bold sm:mb-xxs">ご本人の照会</h2>
        <p className="mb-xl sm:mb-md sm:text-sm-pc">
          お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
        </p>

        <h2 className="mb-sm font-bold sm:mb-xxs">法令、規範の遵守と見直し</h2>
        <p className="mb-xl sm:mb-md sm:text-sm-pc">
          当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Legal
