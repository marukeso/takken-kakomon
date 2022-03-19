import { VFC } from 'react'
import Head from 'next/head'
import { Sidebar } from '../../../components/Sidebar'
import { FixButton } from '../../../components/FixButton'
import { GetServerSideProps } from 'next'
import { Question } from '../../../components/Question'
import { QuestionData } from 'types/types'
import request from 'graphql-request'
import { GET_QUESTION } from 'queries/queries'

interface Props {
  data: QuestionData
  yearId: string
  questionId: string
}

const Home: VFC<Props> = ({ data, yearId, questionId }) => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>宅建過去問</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen w-full">
        <FixButton />
        <Sidebar yearId={yearId} questionId={questionId} />
        <Question {...data} yearId={yearId} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await request(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
    GET_QUESTION,
    {
      questionId: query.questionId,
    }
  )

  return {
    props: {
      ...query,
      data,
    },
  }
}

export default Home
