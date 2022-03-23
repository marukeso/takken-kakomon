import { VFC } from 'react'
import Head from 'next/head'
import { Sidebar } from '../../../components/Sidebar'
import { FixButton } from '../../../components/FixButton'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Question } from '../../../components/Question'
import { QuestionData, Title } from 'types/types'
import request from 'graphql-request'
import { GET_QUESTION, GET_TITLES } from 'queries/queries'
import { Header } from '../../../components/Header'

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

      <Header />
      <main className="flex h-screen w-full 2xl:justify-center">
        <Sidebar yearId={yearId} questionId={questionId} />
        <Question {...data} yearId={yearId} />
      </main>
    </div>
  )
}

interface TitlesResultProps {
  titles: Title[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { titles } = await request<TitlesResultProps>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
    GET_TITLES
  )
  const paths = titles.map((title: Title) => ({
    params: {
      yearId: title.year_id,
      questionId: title.id,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await request(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
    GET_QUESTION,
    {
      questionId: params?.questionId,
    }
  )

  return {
    props: {
      ...params,
      data,
    },
  }
}

export default Home
