import { VFC } from 'react'
import Link from 'next/link'
import {
  GetYearTitlesWithHeadingAndAnswersQuery,
  GetYearTitlesWithHeadingQuery,
} from '../graphql/generated/graphql'
import { badgeStatus, sumCorrect } from 'utils/badgeStatus'
import { useUser } from '@auth0/nextjs-auth0'
import { CorrectRateStatus } from './CorrectRateStatus'
import { DeleteHistoryModal } from './DeleteHistoryModal'

interface Props {
  yearId: string
  data: GetYearTitlesWithHeadingQuery | GetYearTitlesWithHeadingAndAnswersQuery
  accessToken?: string
}

export const YearTitles: VFC<Props> = (props) => {
  const { yearId, data } = props
  const { user } = useUser()

  let total = 0
  data.titles.map((title) => {
    if ('answers' in title && title.answers) {
      total += title.answers.length
    }
  })

  return (
    <>
      {/* スマホ用 */}
      <div className="card mx-4 mb-8 p-2 lg:hidden">
        <CorrectRateStatus data={data} />
      </div>

      <div className="mb-10 flex justify-between">
        <div className="w-full bg-base-100 py-8 px-5 lg:card lg:w-[600px]">
          <div className="mb-6 flex items-center justify-between px-2">
            <h1 className="text-2xl font-medium">
              {data?.years_by_pk?.content}試験
            </h1>
            {user && total > 0 && (
              <label
                htmlFor="remove-history-modal"
                className="btn btn-outline btn-xs"
              >
                履歴を削除
              </label>
            )}
          </div>
          <ul>
            {data.titles.map((title) => (
              <li key={title.id}>
                <Link href={`/year/${yearId}/${title.id}`}>
                  <a className="flex items-center justify-between rounded-lg p-2 hover:bg-base-200">
                    <span className="mr-2 truncate">{title.content}</span>
                    {user && 'answers' in title && title.answers.length > 0 && (
                      <span
                        className={`badge bg-opacity-80 ${badgeStatus(
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

        <div className="hidden w-[360px] lg:block">
          <div className="sticky top-20 rounded-2xl bg-base-100">
            {user && <CorrectRateStatus data={data} />}
            <div className="p-4">
              <Link href={`/year/${yearId}/${yearId}01`}>
                <a className="btn w-full">試験を開始する</a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          .badge-success {
          }
          .badge-warning {
          }
          .badge-error {
          }
        `}</style>

        {/* 履歴を削除モーダル */}
        {user && <DeleteHistoryModal {...props} />}
      </div>

      {/* スマホ用 */}
      <div className="fixed bottom-0 left-0 z-10 w-full bg-base-100 bg-opacity-50 p-4 lg:hidden">
        <Link href={`/year/${yearId}/${yearId}01`}>
          <a className="btn w-full">試験を開始する</a>
        </Link>
      </div>
    </>
  )
}
