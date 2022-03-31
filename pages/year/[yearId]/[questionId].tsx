import Head from 'next/head'
import { Sidebar } from '../../../components/Sidebar'
import { GetServerSideProps, NextPage } from 'next'
import { Question } from '../../../components/Question'
import { QuestionData } from 'types/types'
import request from 'graphql-request'
import { GET_QUESTION } from 'queries/queries'
import { Header } from '../../../components/Header'
import { dehydrate, QueryClient, useQueryClient } from 'react-query'

interface Props {
  yearId: string
  questionId: string
  accessToken?: string
}

const QuestionPage: NextPage<Props> = ({ yearId, questionId }) => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<QuestionData>(['question', questionId])

  return (
    <div className="overflow-hidden">
      <Head>
        <title>宅建過去問</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex h-screen w-full 2xl:justify-center">
        <Sidebar yearId={yearId} questionId={questionId} />
        <Question {...data} yearId={yearId} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const fetchQuestion = async () => {
    const data = await request(
      process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
      GET_QUESTION,
      {
        questionId: query.questionId,
      }
    )
    return data
  }

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['question', query.questionId], fetchQuestion)

  const Qdata = queryClient.getQueryData<QuestionData>([
    'question',
    query.questionId,
  ])
  if (!Qdata?.questions_by_pk) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...query,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default QuestionPage
