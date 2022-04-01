import type { NextPage } from 'next'
import Head from 'next/head'
import { DefaultLayout } from '../../../components/DefaultLayout'
import { GetServerSideProps } from 'next'
import { createHasuraClient } from 'util/hasuraClient'
import { YearTitles } from '../../../components/YearTitles'

interface Props {
  yearId: string
}

const QuestionList: NextPage<Props> = ({ yearId }) => {
  return (
    <div>
      <Head>
        <title>試験一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <YearTitles yearId={yearId} />
      </DefaultLayout>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const hasuraClient = createHasuraClient(null)
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
    },
  }
}

export default QuestionList
