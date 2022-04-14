import { DefaultLayout } from '@/components/DefaultLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { YearListMemo } from '../components/YearList'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>宅建過去問</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="3opKrtztAlBNFkNHgCKhOc1xavOVGjLYZYLv6YY1Bts"
        />
      </Head>

      <DefaultLayout>
        {/* メインビジュアル */}
        <div className="pb-12 pt-0 md:pb-20 md:pt-7">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-2xl font-bold leading-10 md:text-3xl">
              回答履歴を保存できる
              <br className="block md:hidden" />
              宅建試験の学習サービス
            </h1>
            <p>
              弱点がひとめで分かる。苦手なところを
              <br className="block md:hidden" />
              何度も問いて一回で合格しよう！
            </p>
            <p className="mt-2 text-xs md:text-sm">
              ※サインアップしなくても問題集はご利用いただけます。
            </p>
          </div>

          <div className="px-28">
            <div className="mx-auto mb-10 max-w-[300px]">
              <Image src="/people.svg" width={300} height={211} />
            </div>
          </div>

          <div className="relative mx-6">
            <div className="shadow-image hidden md:flex">
              <Image src="/main_pc.png" width={750} height={407} alt="PC画面" />
            </div>

            <div className="shadow-image relative top-0 right-0 mx-auto max-w-[350px] rotate-0 md:absolute md:top-6 md:right-5 md:w-[240px] md:rotate-6">
              <Image src="/main_sp.png" width={320} height={517} alt="SP画面" />
            </div>
          </div>
        </div>

        <YearListMemo />
      </DefaultLayout>
    </div>
  )
}

export default Home
