import { Loading } from '@/components/Loading'
import type { NextPage } from 'next'
import Head from 'next/head'
import { DefaultLayout } from '../../../components/DefaultLayout'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { dehydrate, QueryClient, useQueryClient } from 'react-query'
import { GET_TITLES_BY_YEAR_AND_YEAR_CONTENT } from 'queries/queries'
import request from 'graphql-request'
import { Title } from 'types/types'

interface Props {
  yearId: string
}

interface ListDataProps {
  titles: Title[]
  years_by_pk: {
    content: string
  }
}

const QuestionList: NextPage<Props> = ({ yearId }) => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<ListDataProps>([
    'titlesByYearAndYearContent',
    yearId,
  ])
  const { titles, years_by_pk: year } = data || {}

  return (
    <div>
      <Head>
        <title>試験一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <div className="m-auto my-24 flex w-[900px] justify-between">
          <div className="w-[520px]">
            <h1 className="text-kyokasho mb-6 px-2 text-2xl font-bold">
              {year?.content}試験
            </h1>

            <ul className="">
              {titles?.map((title) => (
                <li key={title.id}>
                  <Link href={`/year/${yearId}/${title.id}`}>
                    <a className="flex items-center justify-between rounded p-2 hover:bg-base-200">
                      <span>{title.content}</span>
                      {/* <span className="badge badge-success">3/3</span> */}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-80">
            <div className="sticky top-20 rounded-md border border-base-300">
              <div className="p-4">
                <Link href={`/year/${yearId}/${yearId}01`}>
                  <a className="btn w-full">試験を開始する</a>
                </Link>
              </div>

              {/* <div className="flex border-t border-base-300 text-center">
                <div className="grid w-3/5 grid-cols-2">
                  <div className="border-r border-b border-base-300 py-3 text-center">
                    <div className="mb-1 text-sm font-bold">90%</div>
                    <div className="text-xs opacity-70">権利関係</div>
                  </div>
                  <div className="border-b border-base-300 py-3 text-center">
                    <div className="mb-1 text-sm font-bold">90%</div>
                    <div className="text-xs opacity-70">宅建業法</div>
                  </div>
                  <div className="border-r border-base-300 py-3 text-center">
                    <div className="mb-1 text-sm font-bold">90%</div>
                    <div className="text-xs opacity-70">法令制限</div>
                  </div>
                  <div className="py-3 text-center">
                    <div className="mb-1 text-sm font-bold">90%</div>
                    <div className="text-xs opacity-70">税その他</div>
                  </div>
                </div>

                <div className="flex flex-grow flex-col items-center justify-center border-l border-base-300">
                  <div
                    className="radial-progress text-success"
                    style={{ ['--value' as any]: 70 }}
                  >
                    70%
                  </div>
                  <div className="mt-2 text-xs opacity-70">全体</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const fetchTitles = async () => {
    const data = await request<Props>(
      process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
      GET_TITLES_BY_YEAR_AND_YEAR_CONTENT,
      { yearId: query.yearId }
    )
    return data
  }
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['titlesByYearAndYearContent', query.yearId],
    fetchTitles
  )

  const listData = queryClient.getQueryData<ListDataProps>([
    'titlesByYearAndYearContent',
    query.yearId,
  ])
  if (!listData?.years_by_pk) {
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

export default QuestionList
