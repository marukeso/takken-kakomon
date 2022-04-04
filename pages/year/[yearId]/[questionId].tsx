import Head from 'next/head'
import { Sidebar } from '../../../components/Sidebar'
import { GetServerSideProps, NextPage } from 'next'
import { Question } from '../../../components/Question'
import { Header } from '../../../components/Header'
import { createHasuraClient } from 'utils/hasuraClient'
import { GetQuestionQuery } from 'graphql/generated/graphql'

interface Props {
  data: GetQuestionQuery
  yearId: string
  questionId: string
  accessToken?: string
}

const QuestionPage: NextPage<Props> = ({ yearId, questionId, data }) => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>宅建過去問</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex h-screen w-full 2xl:justify-center">
        <Sidebar yearId={yearId} questionId={questionId} />
        <Question data={data} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const hasuraClient = createHasuraClient(null)
  const data = await hasuraClient.GetQuestion({
    questionId: query.questionId as string,
  })

  if (data.questions_by_pk === null) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...query,
      data,
    },
  }
}

export default QuestionPage
