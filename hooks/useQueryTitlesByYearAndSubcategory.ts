import request from 'graphql-request'
import { GET_TITLES_BY_YEAR_AND_SUBCATEGORY } from 'queries/queries'
import { useQuery } from 'react-query'
import { Title } from 'types/types'

interface TitlesResultProps {
  titles: Title[]
}

export const useQueryTitlesByYearAndSubcategory = (yearId: string) => {
  const fetchTitlesByYearAndSubcategory = async () => {
    const variables = {
      yearId,
      subcategoryId: '(k|t|h|z)%',
    }
    const { titles: data } = await request<TitlesResultProps>(
      process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
      GET_TITLES_BY_YEAR_AND_SUBCATEGORY,
      variables
    )
    return data
  }
  return useQuery<Title[], Error>(
    ['titles', yearId],
    fetchTitlesByYearAndSubcategory,
    {
      staleTime: Infinity,
    }
  )
}
