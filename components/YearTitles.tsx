import { VFC } from 'react'
import { Loading } from '@/components/Loading'
import Link from 'next/link'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from 'react-query'
import { HasuraClient } from 'util/hasuraClient'
import {
  GetYearTitlesWithHeadingAndAnswersQuery,
  GetYearTitlesWithHeadingQuery,
} from '../graphql/generated/graphql'
import { useQState } from 'hooks/useQState'
import { badgeStatus, sumCorrect } from 'util/badgeStatus'

interface Props {
  yearId: string
}

export const YearTitles: VFC<Props> = ({ yearId }) => {
  const { isAuthenticated } = useAuth0()
  const [hasuraClient] = useQState<HasuraClient>('hasuraClient')

  let fetchFn
  if (isAuthenticated) {
    fetchFn = () => hasuraClient?.GetYearTitlesWithHeadingAndAnswers({ yearId })
  } else {
    fetchFn = () => hasuraClient?.GetYearTitlesWithHeading({ yearId })
  }

  const { data, isLoading } = useQuery<
    GetYearTitlesWithHeadingQuery | GetYearTitlesWithHeadingAndAnswersQuery,
    Error
  >(['yearTitlesWithHeading', yearId], fetchFn, { staleTime: 1 })

  if (isLoading) return <Loading />

  return (
    <div className="m-auto my-24 flex w-[900px] justify-between">
      <div className="w-[520px]">
        <h1 className="text-kyokasho mb-6 px-2 text-2xl font-bold">
          {data?.years_by_pk?.content}試験
        </h1>

        <ul>
          {data?.titles.map((title) => (
            <li key={title.id}>
              <Link href={`/year/${yearId}/${title.id}`}>
                <a className="flex items-center justify-between rounded p-2 hover:bg-base-200">
                  <span>{title.content}</span>
                  {isAuthenticated &&
                    'answers' in title &&
                    title.answers?.length > 0 && (
                      <span
                        className={`badge ${badgeStatus(
                          sumCorrect(title.answers),
                          title.answers.length
                        )}`}
                      >
                        {sumCorrect(title.answers)}/{title.answers.length}
                      </span>
                    )}
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
  )
}
