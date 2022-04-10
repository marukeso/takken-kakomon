import { DefaultLayout } from '@/components/DefaultLayout'
import { ChevronRightIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
        <div className="mx-auto w-[900px]">
          <div className="flex items-center justify-between pt-44 pb-36 pr-16">
            <div className="grow text-center">
              <h1 className="text-kyokasho mb-3 text-3xl font-medium leading-10">
                回答履歴を保存できる
                <br />
                宅建試験の学習サービス
              </h1>
              <p>
                弱点がひとめで分かるから復習がしやすい
                <br />
                苦手なところを何度も問いて一回で合格しよう！
              </p>
              <p className="mt-2 text-sm">
                ※サインアップしなくてもご利用いただけます。
              </p>
            </div>
          </div>
        </div>

        <YearList />
      </DefaultLayout>
    </div>
  )
}

export default Home
