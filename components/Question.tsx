import { VFC, useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { GetQuestionQuery } from '../graphql/generated/graphql'
import { createHasuraClient, HasuraClient } from 'utils/hasuraClient'
import { useUser } from '@auth0/nextjs-auth0'
import { answerListItem } from 'types/types'
import { useQState } from '../hooks/useQState'

interface Props {
  data: GetQuestionQuery
  accessToken?: string
  questionId: string
  yearId: string
}

export const Question: VFC<Props> = ({
  data,
  accessToken,
  questionId,
  yearId,
}) => {
  const { questions_by_pk: question, choices } = data

  // answer animation
  const [isAnswered, setIsAnswered] = useState<boolean>(false)
  const [correctColor, setCorrectColor] = useState<string>('')
  const [wrongColor, setWrongColor] = useState<string>('')
  const [buttonIndex, setButtonIndex] = useState<number | null>(null)

  const [answerList, setAnswerList] = useQState<answerListItem[]>(
    `answerList-${yearId}`,
    []
  )

  let hasuraClient: HasuraClient
  if (accessToken) {
    hasuraClient = createHasuraClient(accessToken)
  } else {
    hasuraClient = createHasuraClient(null)
  }

  const { user } = useUser()

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
    setAnswerList([
      ...answerList.filter((item) => item.questionId !== questionId),
      {
        questionId,
        isCorrect: isCorrect ? true : false,
      },
    ])
    if (user) {
      hasuraClient.InsertAnswersOne({
        categoryId: question?.title.subcategory.category.id as string,
        isCorrect: isCorrect ? true : false,
        titleId: question?.id as string,
      })
    }
  }

  useEffect(() => {
    setIsAnswered(false)
    setCorrectColor('')
    setWrongColor('')
    setButtonIndex(null)
  }, [question])

  return (
    <div className="flex grow justify-center overflow-scroll 2xl:ml-10 2xl:grow-0">
      <div className="h-max max-w-[800px] py-24 px-5">
        {/* title and question */}
        <p className="text-lg font-medium">{question?.title.content}</p>
        <div className="mt-2 mb-7 flex space-x-1">
          <div className="badge badge-outline text-xs">
            {question?.title.year.content}
          </div>
          <div className="badge badge-outline text-xs">
            {question?.title.subcategory.category.content}
          </div>
          <div className="badge badge-outline text-xs">
            {question?.title.subcategory.content}
          </div>
        </div>

        <div className="question-text mb-8 text-xl font-medium">
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
              <div className="mr-5 text-3xl font-medium">{index + 1}.</div>
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
              className={`btn btn-ghost btn-lg text-4xl font-medium ${
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
      </div>
    </div>
  )
}
