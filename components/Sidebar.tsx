import { VFC } from 'react'
import {
  ArrowNarrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/outline'
import { TitleListWithCheckbox } from './TitleListWithCheckbox'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { answerListState } from 'atoms/answerLIstAtom'
import { GetQuestionAndTitlesByYearAndSubcategoryQuery } from '../graphql/generated/graphql'

interface Props {
  yearId: string
  questionId: string
  data: GetQuestionAndTitlesByYearAndSubcategoryQuery
}

export const Sidebar: VFC<Props> = ({ yearId, questionId, data }) => {
  //prev next button
  let prev, next
  if (data) {
    const index = data.titles.findIndex((item) => item.id === questionId)
    prev = data.titles[index - 1] ? data.titles[index - 1] : null
    next = data.titles[index + 1] ? data.titles[index + 1] : null
  }

  // right bottom answer list
  const [answerList, setAnswerList] = useRecoilState(answerListState)
  const correctLength = answerList.filter(
    (item) => item.yearId === yearId && item.isCorrect
  ).length

  return (
    <div className="card w-[270px] px-3 pb-3 text-sm">
      <div className="flex h-full flex-col">
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
        <TitleListWithCheckbox
          yearId={yearId}
          questionId={questionId}
          data={data}
        />

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

      <div className="fixed bottom-0 left-0 flex w-full items-center justify-center bg-base-100 py-2">
        {/* prev next button */}
        <div className="flex w-[240px] justify-between">
          {prev && (
            <Link href={`/year/${yearId}/${prev?.id}`}>
              <a className="btn btn-sm flex w-max cursor-pointer items-center space-x-1">
                <ChevronLeftIcon className="w-4" />
                <span>前の問題</span>
              </a>
            </Link>
          )}
          {next ? (
            <Link href={`/year/${yearId}/${next?.id}`}>
              <a className="btn btn-sm ml-auto flex w-max cursor-pointer items-center space-x-1">
                <span>次の問題</span>
                <ChevronRightIcon className="w-4" />
              </a>
            </Link>
          ) : (
            <Link href={`/`}>
              <a className="btn btn-sm ml-auto flex w-max cursor-pointer items-center space-x-1">
                <span>トップに戻る</span>
                <ChevronRightIcon className="w-4" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
