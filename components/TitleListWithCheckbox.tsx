import { VFC } from 'react'
import { Loading } from './Loading'
import Link from 'next/link'
import { useQueryTitlesByYearAndSubcategory } from '../hooks/useQueryTitlesByYearAndSubcategory'
import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { answerListState } from 'atoms/answerLIstAtom'
import { useRecoilValue } from 'recoil'

interface Props {
  yearId: string
  questionId: string
}

export const TitleListWithCheckbox: VFC<Props> = ({ yearId, questionId }) => {
  const { isLoading, data } = useQueryTitlesByYearAndSubcategory(yearId)

  const answerList = useRecoilValue(answerListState)

  if (isLoading) return <Loading />

  return (
    <>
      {data?.titles.map((title) => (
        <Link key={title.id} href={`/year/${yearId}/${title.id}`}>
          <a className="group flex items-center rounded-md py-3 px-4 hover:bg-base-200">
            <p
              className={`mr-2 truncate opacity-20 ${
                questionId === title.id
                  ? 'font-medium opacity-100'
                  : 'group-hover:opacity-100'
              }`}
            >
              {title.content}
            </p>
            <div className="ml-auto">
              {answerList.map((item) => {
                if (item.questionId === title.id) {
                  if (item.isCorrect)
                    return (
                      <CheckIcon
                        key={item.questionId}
                        className="w-5 text-success"
                      />
                    )
                  if (!item.isCorrect)
                    return (
                      <XIcon key={item.questionId} className="w-5 text-error" />
                    )
                }
                return null
              })}
            </div>
          </a>
        </Link>
      ))}
    </>
  )
}
