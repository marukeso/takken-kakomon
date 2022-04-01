import { VFC } from 'react'
import {
  ArrowNarrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/outline'
import { TitleListWithCheckbox } from './TitleListWithCheckbox'
import Link from 'next/link'
import { useQueryTitlesByYearAndSubcategory } from 'hooks/useQueryTitlesByYearAndSubcategory'

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

  return (
    <div className="relative w-80 overflow-scroll bg-base-200 px-4 py-24 text-sm">
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
        <Link href={`/year/${yearId}`}>
          <a className="flex w-24 cursor-pointer items-center space-x-2 font-bold">
            <ArrowNarrowLeftIcon className="w-6" />
            <span>終了する</span>
          </a>
        </Link>

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

        <div className="h-2 w-24"></div>
      </div>
    </div>
  )
}
