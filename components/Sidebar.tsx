import { VFC } from 'react'
import {
  ArrowNarrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/outline'
import { TitleListWithCheckbox } from './TitleListWithCheckbox'
import Link from 'next/link'
import { useQueryTitlesByYearAndSubcategory } from 'hooks/useQueryTitlesByYearAndSubcategory'
import { answerListItem } from 'types/types'
import { useQState } from 'hooks/useQState'

interface Props {
  yearId: string
  questionId: string
}

export const Sidebar: VFC<Props> = ({ yearId, questionId }) => {
  //prev next button
  let prev, next
  const { isSuccess, data } = useQueryTitlesByYearAndSubcategory(yearId)
  if (isSuccess && data) {
    const index = data.titles.findIndex((item) => item.id === questionId)
    prev = data.titles[index - 1] ? data.titles[index - 1] : null
    next = data.titles[index + 1] ? data.titles[index + 1] : null
  }

  // right bottom answer list
  const [answerList, setAnswerList] = useQState<answerListItem[]>(
    `answerList-${yearId}`,
    []
  )
  const correctLength = answerList.filter((item) => item.isCorrect).length

  return (
    <div className="relative w-80 overflow-scroll border-r border-base-300 bg-base-100 px-4 py-24 text-sm">
      {/* <Link href="/">
          <a className="flex cursor-pointer items-center space-x-2 rounded-md py-3 px-4 transition hover:bg-base-300">
            <HomeIcon className="w-6" />
            <span>ホーム</span>
          </a>
        </Link>
        <a className="flex cursor-pointer items-center space-x-2 rounded-md py-3 px-4 transition hover:bg-base-300">
          <HeartIcon className="w-6" />
          <span>お気に入り</span>
        </a>
        <hr className="my-4 border-t border-base-300" /> */}

      <TitleListWithCheckbox yearId={yearId} questionId={questionId} />

      {/* 終了 */}
      <div className="fixed bottom-0 left-0 flex w-full items-center justify-between border-t border-base-300 bg-base-100 py-2 px-8">
        <div className="w-44">
          <Link href={`/year/${yearId}`}>
            <a className="flex w-max cursor-pointer items-center space-x-2 font-bold">
              <ArrowNarrowLeftIcon className="w-6" />
              <span>終了する</span>
            </a>
          </Link>
        </div>

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

        <div className="flex w-44 items-center justify-end">
          <div>
            {answerList.length}/50 - {correctLength}問正解
          </div>
          <div
            className="btn btn-outline btn-xs ml-2"
            onClick={() => {
              setAnswerList([])
            }}
          >
            クリア
          </div>
        </div>
      </div>
    </div>
  )
}
