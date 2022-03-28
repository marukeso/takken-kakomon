import { useEffect } from 'react'
import { useQueryClient, useMutation } from 'react-query'
import { GraphQLClient } from 'graphql-request'
import { INSERT_ANSWER } from '../queries/queries'

interface AnswerProps {
  categoryId: string
  isCorrect: boolean
  titleId: string
}

const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string
let graphQLClient: GraphQLClient

export const useMutateAnswer = (token: string) => {
  useEffect(() => {
    graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }, [token])

  const creactAnswerMutation = useMutation(
    (props: AnswerProps) =>
      graphQLClient.request(INSERT_ANSWER, {
        categoryId: props.categoryId,
        isCorrect: props.isCorrect,
        titleId: props.titleId,
      }),
    {
      onSuccess: (res) => {},
      onError: () => {},
    }
  )

  return {
    creactAnswerMutation,
  }
}
