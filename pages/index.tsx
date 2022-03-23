import { DefaultLayout } from '@/components/DefaultLayout'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>宅建過去問</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <div className="p-32">TOP</div>
      </DefaultLayout>
    </div>
  )
}

export default Home
