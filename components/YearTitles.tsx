import { VFC } from 'react'
import Link from 'next/link'
import {
  GetYearTitlesWithHeadingAndAnswersQuery,
  GetYearTitlesWithHeadingQuery,
} from '../graphql/generated/graphql'
import { badgeStatus, sumCorrect } from 'utils/badgeStatus'
import { useUser } from '@auth0/nextjs-auth0'
import { radialProgressStatus } from 'utils/radialProgressStatus'

interface Props {
  yearId: string
  data: GetYearTitlesWithHeadingQuery | GetYearTitlesWithHeadingAndAnswersQuery
}

export const YearTitles: VFC<Props> = ({ yearId, data }) => {
  const { user } = useUser()

  const percentage = (a: number, b: number): number =>
    Math.round((a / b) * 100) || 0
  let total = 0
  let correct = 0
  let kTotal = 0
  let kCorrect = 0
  let tTotal = 0
  let tCorrect = 0
  let hTotal = 0
  let hCorrect = 0
  let zTotal = 0
  let zCorrect = 0

  data.titles.map((title) => {
    if ('answers' in title && title.answers) {
      total += title.answers.length
      correct += sumCorrect(title.answers)

      title.answers.map((answer) => {
        if (answer.category_id === 'k') {
          kTotal++
          if (answer.is_correct) {
            kCorrect++
          }
        }
        if (answer.category_id === 't') {
          tTotal++
          if (answer.is_correct) {
            tCorrect++
          }
        }
        if (answer.category_id === 'h') {
          hTotal++
          if (answer.is_correct) {
            hCorrect++
          }
        }
        if (answer.category_id === 'z') {
          zTotal++
          if (answer.is_correct) {
            zCorrect++
          }
        }
      })
    }
  })

  return (
    <div className="m-auto my-24 flex w-[900px] justify-between">
      <div className="w-[520px]">
        <h1 className="text-kyokasho mb-6 px-2 text-2xl font-bold">
          {data?.years_by_pk?.content}試験
        </h1>
        <ul>
          {data.titles.map((title) => (
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
      </div>

      <div className="w-80">
        <div className="sticky top-20 rounded-md border border-base-300">
          {user && (
            <div className="flex flex-wrap text-center">
              <div className="w-full border-b border-base-300 py-1 text-xs">
                正解率 (正解/回答数)
              </div>
              <div className="grid w-3/5 grid-cols-2">
                <div className="border-r border-b border-base-300 py-3 text-center">
                  <div className="mb-1 text-sm font-bold">
                    {percentage(kCorrect, kTotal)}%
                  </div>
                  <div className="text-xs opacity-70">権利関係</div>
                </div>
                <div className="border-b border-base-300 py-3 text-center">
                  <div className="mb-1 text-sm font-bold">
                    {percentage(tCorrect, tTotal)}%
                  </div>
                  <div className="text-xs opacity-70">宅建業法</div>
                </div>
                <div className="border-b border-r border-base-300 py-3 text-center">
                  <div className="mb-1 text-sm font-bold">
                    {percentage(hCorrect, hTotal)}%
                  </div>
                  <div className="text-xs opacity-70">法令制限</div>
                </div>
                <div className="border-b py-3 text-center">
                  <div className="mb-1 text-sm font-bold">
                    {percentage(zCorrect, zTotal)}%
                  </div>
                  <div className="text-xs opacity-70">税その他</div>
                </div>
              </div>

              <div className="flex flex-grow flex-col items-center justify-center border-b border-l border-base-300">
                <div
                  className={`radial-progress ${radialProgressStatus(
                    percentage(correct, total)
                  )}`}
                  style={{
                    ['--value' as any]: percentage(correct, total),
                  }}
                >
                  {percentage(correct, total)}%
                </div>
                <div className="mt-2 text-xs opacity-70">全体</div>
              </div>
            </div>
          )}
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
        .text-success {
        }
        .text-warning {
        }
        .text-error {
        }
      `}</style>
    </div>
  )
}
