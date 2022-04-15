import { VFC } from 'react'
import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { answerListState } from 'atoms/answerListAtom'
import { useRecoilValue } from 'recoil'
import { GetQuestionAndTitlesByYearAndSubcategoryQuery } from '../graphql/generated/graphql'
import { useRouter } from 'next/router'

interface Props {
  yearId: string
  questionId: string
  data: GetQuestionAndTitlesByYearAndSubcategoryQuery
}

interface TitleProps {
  __typename?: 'titles' | undefined
  id: string
  content: string
}

export const TitleList: VFC<Props> = ({ yearId, questionId, data }) => {
  const answerList = useRecoilValue(answerListState)
  const router = useRouter()

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    title: TitleProps
  ) => {
    e.preventDefault()
    const input = document.getElementById('drawer') as HTMLInputElement
    if (input) {
      input.checked = false
    }
    router.push(`/year/${yearId}/${title.id}`)
  }

  return (
    <div className="my-5 h-full overflow-scroll">
      {data?.titles.map((title) => (
        <a
          key={title.id}
          onClick={(e) => handleOnClick(e, title)}
          className="group flex cursor-pointer items-center rounded-md py-3 px-4 hover:bg-base-200"
        >
          <p
            className={`mr-2 truncate ${
              questionId === title.id
                ? 'font-medium opacity-100'
                : 'opacity-20 group-hover:opacity-100'
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
      ))}
    </div>
  )
}
