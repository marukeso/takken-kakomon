import { GetTitlesByYearAndSubcategoryQuery } from 'graphql/generated/graphql'
import { useQuery } from 'react-query'
import { createHasuraClient } from 'util/hasuraClient'

export const useQueryTitlesByYearAndSubcategory = (yearId: string) => {
  const hasuraClient = createHasuraClient(null)
  return useQuery<GetTitlesByYearAndSubcategoryQuery, Error>(
    ['titles', yearId],
    () =>
      hasuraClient.GetTitlesByYearAndSubcategory({
        yearId,
        subcategoryId: '(k|t|h|z)%',
      }),
    {
      staleTime: Infinity,
    }
  )
}
