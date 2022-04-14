import Head from 'next/head'
import { SidebarMemo } from '../../../components/Sidebar'
import { GetServerSideProps, NextPage } from 'next'
import { QuestionMemo } from '../../../components/Question'
import { HeaderWithDrawerButton } from '../../../components/HeaderWithDrawerButton'
import { createHasuraClient } from 'utils/hasuraClient'
import { getSession } from '@auth0/nextjs-auth0'
import { GetQuestionAndTitlesByYearAndSubcategoryQuery } from '../../../graphql/generated/graphql'
import { PrevNextButtons } from '../../../components/PrevNextButtons'

interface Props {
  data: GetQuestionAndTitlesByYearAndSubcategoryQuery
  yearId: string
  questionId: string
  accessToken?: string
}

const QuestionPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.data.questions_by_pk?.title.content} | 宅建過去問</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="drawer h-auto">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <HeaderWithDrawerButton />
          <main className="w-full bg-base-200 pt-10 pb-24">
            <div className="mx-auto flex max-w-[1000px] lg:justify-between">
              <div className="card hidden h-[700px] w-[270px] px-3 pb-3 lg:block">
                <SidebarMemo {...props} />
              </div>
              <QuestionMemo {...props} />
              <PrevNextButtons {...props} />
            </div>
          </main>
        </div>

        <div className="drawer-side">
          <label htmlFor="drawer" className="drawer-overlay z-10"></label>
          <div className="card w-[300px] rounded-none px-2 py-5">
            <SidebarMemo {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const session = getSession(req, res)

  const hasuraClient = createHasuraClient(null)
  const data = await hasuraClient.GetQuestionAndTitlesByYearAndSubcategory({
    questionId: query.questionId as string,
    yearId: query.yearId as string,
    subcategoryId: '(k|t|h|z)%',
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
      accessToken: session?.accessToken || null,
    },
  }
}

export default QuestionPage
