import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import { VFC, useState, useEffect } from 'react'
import { QuestionsByPk, ChoicesEntity } from '../types/types'
import confetti from 'canvas-confetti'
import { useQueryTitlesByYearAndSubcategory } from 'hooks/useQueryTitlesByYearAndSubcategory'

interface Props {
  yearId: string
  questions_by_pk: QuestionsByPk
  choices?: ChoicesEntity[] | null
}

export const Question: VFC<Props> = ({
  questions_by_pk: question,
  choices,
  yearId,
}) => {
  // answer animation
  const [isAnswered, setIsAnswered] = useState<boolean>(false)
  const [correctColor, setCorrectColor] = useState<string>('')
  const [wrongColor, setWrongColor] = useState<string>('')
  const [buttonIndex, setButtonIndex] = useState<number | null>(null)

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    const isCorrect = e.currentTarget.dataset.correct === 'true'
    setIsAnswered(true)
    setButtonIndex(index)
    setWrongColor('opacity-20')
    if (isCorrect) {
      setCorrectColor('bg-success bg-opacity-20 text-success')
      confetti({
        particleCount: 100,
        spread: 130,
        origin: { y: 0.4 },
      })
    }
  }

  useEffect(() => {
    setIsAnswered(false)
    setCorrectColor('')
    setWrongColor('')
    setButtonIndex(null)
  }, [question])

  //prev next button
  let prev, next
  const { isSuccess, data } = useQueryTitlesByYearAndSubcategory(yearId)
  if (isSuccess) {
    const index = data.findIndex((item) => item.id === question.id)
    prev = data[index - 1] ? data[index - 1] : null
    next = data[index + 1] ? data[index + 1] : null
  }

  return (
    <div className="flex grow justify-center overflow-scroll">
      <div className="h-max max-w-[800px] py-24 px-8">
        {/* title and question */}
        <p className="text-lg font-bold">{question?.title?.content}</p>
        <div className="mt-2 mb-7 flex space-x-1">
          <div className="badge badge-outline text-xs">
            {question?.title?.year?.content}
          </div>
          <div className="badge badge-outline text-xs">
            {question?.title?.subcategory?.category.content}
          </div>
          <div className="badge badge-outline text-xs">
            {question?.title?.subcategory?.content}
          </div>
        </div>

        <div className="question-text mb-8 text-xl font-bold">
          <div
            dangerouslySetInnerHTML={{
              __html: question ? question.content : '',
            }}
          ></div>
        </div>

        {/* choices */}
        <div className="mb-14 flex flex-col space-y-3">
          {choices?.map((choice, index) => (
            <div
              key={choice.id}
              className={`flex items-center rounded-xl p-5 ${
                choice.is_answer ? correctColor : wrongColor
              }`}
            >
              <div className="mr-5 text-3xl font-bold">{index + 1}</div>
              <p>{choice.content}</p>
            </div>
          ))}
        </div>

        {/* choice button */}
        <div className="mb-20 flex justify-center space-x-6">
          {choices?.map((choice, index) => (
            <button
              key={choice.id}
              data-correct={choice.is_answer}
              onClick={(e) => handleOnClick(e, index)}
              className={`btn btn-ghost btn-lg text-4xl font-bold ${
                choice.is_answer ? correctColor : wrongColor
              } ${isAnswered ? 'pointer-events-none' : ''} ${
                buttonIndex === index && !choice.is_answer
                  ? 'bg-error bg-opacity-20 text-error opacity-100'
                  : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* prev next button */}
        <div className="flex justify-between">
          {prev && (
            <Link href={`/year/${yearId}/${prev?.id}`}>
              <a className="btn-neutral btn btn-outline flex w-max cursor-pointer items-center space-x-2 font-bold">
                <ArrowNarrowLeftIcon className="w-6" />
                <span>前の問題</span>
              </a>
            </Link>
          )}
          {next ? (
            <Link href={`/year/${yearId}/${next?.id}`}>
              <a className="btn-neutral btn btn-outline ml-auto flex w-max cursor-pointer items-center space-x-2 font-bold">
                <span>次の問題</span>
                <ArrowNarrowRightIcon className="w-6" />
              </a>
            </Link>
          ) : (
            <Link href={`/`}>
              <a className="btn-neutral btn btn-outline ml-auto flex w-max cursor-pointer items-center space-x-2 font-bold">
                <span>トップに戻る</span>
                <ArrowNarrowRightIcon className="w-6" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
