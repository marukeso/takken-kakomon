import { VFC } from 'react'
import {
  GetYearTitlesWithHeadingAndAnswersQuery,
  GetYearTitlesWithHeadingQuery,
} from '../graphql/generated/graphql'
import { sumCorrect } from 'utils/badgeStatus'
import { radialProgressStatus } from 'utils/radialProgressStatus'

interface Props {
  data: GetYearTitlesWithHeadingQuery | GetYearTitlesWithHeadingAndAnswersQuery
}

export const CorrectRateStatus: VFC<Props> = ({ data }) => {
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
    <div className="flex flex-wrap text-center">
      <div className="w-full py-2 text-xs font-medium">
        正解率 (正解/回答数)
      </div>
      <div className="grid w-3/5 grid-cols-2">
        <div className="py-3 text-center">
          <div className="mb-1 text-sm font-bold">
            {percentage(kCorrect, kTotal)}%
          </div>
          <div className="text-xs opacity-70">権利関係</div>
        </div>
        <div className="py-3 text-center">
          <div className="mb-1 text-sm font-bold">
            {percentage(tCorrect, tTotal)}%
          </div>
          <div className="text-xs opacity-70">宅建業法</div>
        </div>
        <div className="py-3 text-center">
          <div className="mb-1 text-sm font-bold">
            {percentage(hCorrect, hTotal)}%
          </div>
          <div className="text-xs opacity-70">法令制限</div>
        </div>
        <div className="py-3 text-center">
          <div className="mb-1 text-sm font-bold">
            {percentage(zCorrect, zTotal)}%
          </div>
          <div className="text-xs opacity-70">税その他</div>
        </div>
      </div>

      <div className="flex flex-grow flex-col items-center justify-center">
        <div
          className={`radial-progress opacity-80 ${radialProgressStatus(
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
      <style jsx>{`
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
