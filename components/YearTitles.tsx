import { VFC } from 'react'
import Link from 'next/link'
import {
  GetYearTitlesWithHeadingAndAnswersQuery,
  GetYearTitlesWithHeadingQuery,
} from '../graphql/generated/graphql'
import { badgeStatus, sumCorrect } from 'utils/badgeStatus'
import { useUser } from '@auth0/nextjs-auth0'

interface Props {
  yearId: string
  data: GetYearTitlesWithHeadingQuery | GetYearTitlesWithHeadingAndAnswersQuery
}

export const YearTitles: VFC<Props> = ({ yearId, data }) => {
  const { user } = useUser()

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
                  {user && 'answers' in title && title.answers.length > 0 && (
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
        <style jsx>{`
          .badge-success {
          }
          .badge-warning {
          }
          .badge-error {
          }
        `}</style>
      </div>

      <div className="w-80">
        <div className="sticky top-20 rounded-md border border-base-300">
          <div className="p-4">
            <Link href={`/year/${yearId}/${yearId}01`}>
              <a className="btn w-full">試験を開始する</a>
            </Link>
          </div>

          <div className="flex border-t border-base-300 text-center">
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
          </div>
        </div>
      </div>
    </div>
  )
}
