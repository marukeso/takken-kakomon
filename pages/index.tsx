import { DefaultLayout } from '@/components/DefaultLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { YearList } from '../components/YearList'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>宅建過去問</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        {/* メインビジュアル */}
        <div className="pb-20 pt-7">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-3xl font-bold leading-10">
              回答履歴を保存できる宅建試験の学習サービス
            </h1>
            <p>
              弱点がひとめで分かる。苦手なところを何度も問いて一回で合格しよう！
            </p>
            <p className="mt-2 text-sm">
              ※サインアップしなくても問題集はご利用いただけます。
            </p>
          </div>

          <div className="mb-10 text-center">
            <Image src="/people.svg" width={300} height={211} />
          </div>

          <div className="shadow-image">
            <Image src="/main_pc.png" width={700} height={380} alt="PC画面" />
          </div>
        </div>

        <YearList />
      </DefaultLayout>
    </div>
  )
}

export default Home
