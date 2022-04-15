import { memo, VFC } from 'react'
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'
import { TitleList } from './TitleList'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { answerListState } from 'atoms/answerListAtom'
import { GetQuestionAndTitlesByYearAndSubcategoryQuery } from '../graphql/generated/graphql'

interface Props {
  yearId: string
  questionId: string
  data: GetQuestionAndTitlesByYearAndSubcategoryQuery
}

const Sidebar: VFC<Props> = ({ yearId, questionId, data }) => {
  // 正解数
  const [answerList, setAnswerList] = useRecoilState(answerListState)
  const correctLength = answerList.filter(
    (item) => item.yearId === yearId && item.isCorrect
  ).length

  return (
    <div className="flex h-full flex-col text-sm">
      {/* 正解数 */}
      <div className="flex w-full items-center justify-between px-4">
        <div>
          {answerList.filter((item) => item.yearId === yearId).length}/50 -{' '}
          {correctLength}問正解
        </div>
        <div
          className="btn btn-outline btn-xs ml-2"
          onClick={() => {
            setAnswerList([
              ...answerList.filter((item) => item.yearId !== yearId),
            ])
          }}
        >
          クリア
        </div>
      </div>

      {/* 問題 */}
      <TitleList yearId={yearId} questionId={questionId} data={data} />

      {/* 終了 */}
      <div>
        <Link href={`/year/${yearId}`}>
          <a className="btn btn-ghost btn-sm space-x-2">
            <ArrowNarrowLeftIcon className="w-6" />
            <span>終了する</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export const SidebarMemo = memo(Sidebar)
