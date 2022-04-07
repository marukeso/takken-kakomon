import type { NextPage } from 'next'
import Head from 'next/head'
import { DefaultLayout } from '../../../components/DefaultLayout'
import { GetServerSideProps } from 'next'
import { createHasuraClient } from 'utils/hasuraClient'
import { YearTitles } from '../../../components/YearTitles'
import { getSession } from '@auth0/nextjs-auth0'
import {
  GetYearTitlesWithHeadingAndAnswersQuery,
  GetYearTitlesWithHeadingQuery,
} from 'graphql/generated/graphql'

interface Props {
  data: GetYearTitlesWithHeadingQuery | GetYearTitlesWithHeadingAndAnswersQuery
  yearId: string
  accessToken?: string
}

const QuestionList: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>試験一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <YearTitles {...props} />
      </DefaultLayout>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const session = getSession(req, res)

  let hasuraClient
  let data
  if (session?.accessToken) {
    hasuraClient = createHasuraClient(session.accessToken)
    data = await hasuraClient.GetYearTitlesWithHeadingAndAnswers({
      yearId: query.yearId as string,
    })
  } else {
    hasuraClient = createHasuraClient(null)
    data = await hasuraClient.GetYearTitlesWithHeading({
      yearId: query.yearId as string,
    })
  }

  const { years } = await hasuraClient.GetYearId()
  const isExist = years.find((year) => year.id === query.yearId)
  if (!isExist) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...query,
      data,
      accessToken: session?.accessToken || null,
    },
  }
}

export default QuestionList
