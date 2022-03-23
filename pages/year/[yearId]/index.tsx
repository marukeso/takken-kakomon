import type { NextPage } from 'next'
import Head from 'next/head'
import { DefaultLayout } from '../../../components/DefaultLayout'

const QuestionByYearList: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>試験一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <div className="p-32">試験一覧</div>
      </DefaultLayout>
    </div>
  )
}

export default QuestionByYearList
