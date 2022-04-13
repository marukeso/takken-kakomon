import { useState, VFC } from 'react'
import {
  GetYearTitlesWithHeadingAndAnswersQuery,
  GetYearTitlesWithHeadingQuery,
} from '../graphql/generated/graphql'
import { createHasuraClient } from 'utils/hasuraClient'
import { CheckIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

interface Props {
  yearId: string
  data: GetYearTitlesWithHeadingQuery | GetYearTitlesWithHeadingAndAnswersQuery
  accessToken?: string
}

export const DeleteHistoryModal: VFC<Props> = ({
  yearId,
  data,
  accessToken,
}) => {
  const [isRemoving, setIsRemoving] = useState<boolean>(false)
  const [isRemoved, setIsRemoved] = useState<boolean>(false)
  const router = useRouter()

  const handleRemoveAnswers = async () => {
    const hasuraClient = createHasuraClient(accessToken as string)
    setIsRemoving(true)
    try {
      const res = await hasuraClient.DeleteAnswersByYear({
        yearId,
      })
      setIsRemoved(true)
      router.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const handleCloseModal = () => {
    const input = document.getElementById(
      'remove-history-modal'
    ) as HTMLInputElement
    input.checked = false
  }

  return (
    <>
      <input
        type="checkbox"
        id="remove-history-modal"
        className="modal-toggle"
      />
      <label htmlFor="remove-history-modal" className="modal cursor-pointer">
        <label className="modal-box relative text-center" htmlFor="">
          <p className="mb-5">
            {data?.years_by_pk?.content}
            試験の履歴を削除しますがよろしいですか？
          </p>

          <div className="flex justify-center">
            {isRemoved ? (
              <button className="btn btn-success pointer-events-none mr-5">
                <CheckIcon className="mr-1 w-6" />
                削除しました
              </button>
            ) : (
              <button
                onClick={handleRemoveAnswers}
                className={`btn btn-error mr-5 ${
                  isRemoving && 'loading pointer-events-none'
                }`}
              >
                削除する
              </button>
            )}
            <button
              onClick={handleCloseModal}
              className={`btn btn-outline ${
                isRemoving && 'pointer-events-none'
              }`}
            >
              キャンセル
            </button>
          </div>
        </label>
      </label>
    </>
  )
}
