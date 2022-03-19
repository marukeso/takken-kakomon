import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>宅建過去問</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen w-full">
        <div>試験一覧</div>
      </main>
    </div>
  )
}

export default Home
