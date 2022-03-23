import request from 'graphql-request'
import { GET_TITLES_BY_YEAR_AND_YEAR_CONTENT } from 'queries/queries'
import { useQuery } from 'react-query'
import { Title } from 'types/types'

interface Props {
  titles: Title[]
  years_by_pk: { content: string }
}

export const useQueryTitlesByYearAndYearContent = (yearId: string) => {
  const fetchTitles = async () => {
    const data = await request<Props>(
      process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
      GET_TITLES_BY_YEAR_AND_YEAR_CONTENT,
      { yearId }
    )
    return data
  }
  return useQuery<Props, Error>(
    ['titlesByYearAndYearContent', yearId],
    fetchTitles,
    {
      staleTime: Infinity,
    }
  )
}
