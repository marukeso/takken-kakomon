import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../graphql/generated/graphql'

export const createHasuraClient = (token: string | null) => {
  const headers =
    token !== null
      ? {
          authorization: `Bearer ${token}`,
        }
      : undefined
  const client = new GraphQLClient(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
    {
      headers,
    }
  )
  return getSdk(client)
}

export type HasuraClient = ReturnType<typeof createHasuraClient>
