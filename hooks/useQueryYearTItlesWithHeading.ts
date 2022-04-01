import { useQuery } from 'react-query'
import { createHasuraClient } from 'util/hasuraClient'
import { GetYearTitlesWithHeadingQuery } from '../graphql/generated/graphql'

export const useQueryYearTitlesWithHeading = (yearId: string) => {
  const hasuraClient = createHasuraClient(null)
  return useQuery<GetYearTitlesWithHeadingQuery, Error>(
    ['yearTitlesWithHeading', yearId],
    () => hasuraClient.GetYearTitlesWithHeading({ yearId }),
    {
      staleTime: Infinity,
    }
  )
}
