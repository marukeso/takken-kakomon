import { DefaultLayout } from '@/components/DefaultLayout'
import type { NextPage } from 'next'
import Head from 'next/head'

const Contact: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>お問い合わせ窓口 | 宅建過去問</title>
      </Head>

      <DefaultLayout>
        <div className="mx-auto min-h-[700px] max-w-[800px] py-24 px-4 md:py-32 lg:px-0">
          <div className="prose prose-sm flex max-w-none flex-col space-y-2">
            <div>
              <h1 className="mb-10 text-2xl">お問い合わせ</h1>

              <p>
                ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。
              </p>

              <ul>
                <li>
                  お問い合わせ窓口：
                  <a href="mailto:marukeso@gmail.com">marukeso@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  )
}

export default Contact
