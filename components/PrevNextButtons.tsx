import { VFC } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { GetQuestionAndTitlesByYearAndSubcategoryQuery } from '../graphql/generated/graphql'

interface Props {
  yearId: string
  questionId: string
  data: GetQuestionAndTitlesByYearAndSubcategoryQuery
}

export const PrevNextButtons: VFC<Props> = ({ yearId, questionId, data }) => {
  //prev next button
  let prev, next
  if (data) {
    const index = data.titles.findIndex((item) => item.id === questionId)
    prev = data.titles[index - 1] ? data.titles[index - 1] : null
    next = data.titles[index + 1] ? data.titles[index + 1] : null
  }
  return (
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
  )
}
