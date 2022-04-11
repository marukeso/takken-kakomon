import { VFC, useState, memo, useLayoutEffect } from 'react'
import confetti from 'canvas-confetti'
import { GetQuestionQuery } from '../graphql/generated/graphql'
import { createHasuraClient, HasuraClient } from 'utils/hasuraClient'
import { useUser } from '@auth0/nextjs-auth0'
import { useRecoilState } from 'recoil'
import { answerListState } from 'atoms/answerLIstAtom'

interface Props {
  data: GetQuestionQuery
  accessToken?: string
  questionId: string
  yearId: string
}

const Question: VFC<Props> = ({ data, accessToken, questionId, yearId }) => {
  const { questions_by_pk: question, choices } = data

  // answer animation
  const [isAnswered, setIsAnswered] = useState<boolean>(false)
  const [correctColor, setCorrectColor] = useState<string>('')
  const [wrongColor, setWrongColor] = useState<string>('')
  const [buttonIndex, setButtonIndex] = useState<number | null>(null)

  const [answerList, setAnswerList] = useRecoilState(answerListState)

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
        spread: 80,
        origin: { y: 0.5 },
      })
    }

    // update answer list state
    setAnswerList([
      ...answerList.filter((item) => item.questionId !== questionId),
      {
        yearId,
        questionId,
        isCorrect: isCorrect ? true : false,
      },
    ])

    if (user) {
      hasuraClient.InsertAnswersOne({
        categoryId: question?.title.subcategory.category.id as string,
        isCorrect: isCorrect ? true : false,
        titleId: question?.id as string,
        yearId: yearId,
      })
    }
  }

  useLayoutEffect(() => {
    setIsAnswered(false)
    setCorrectColor('')
    setWrongColor('')
    setButtonIndex(null)
  }, [questionId])

  return (
    <div className="bg-base-100 p-5 lg:card lg:w-[700px] lg:overflow-scroll">
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

      <div className="question-text mb-8 text-lg font-medium md:text-xl">
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
            className={`flex flex-col rounded-xl py-4 px-3 md:flex-row md:items-center ${
              choice.is_answer ? correctColor : wrongColor
            }`}
          >
            <div className="mr-5 text-2xl font-medium">{index + 1}.</div>
            <p>{choice.content}</p>
          </div>
        ))}
      </div>

      {/* choice button */}
      <div className="mb-10 flex justify-center space-x-4">
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
  )
}

export const QuestionMemo = memo(Question)
