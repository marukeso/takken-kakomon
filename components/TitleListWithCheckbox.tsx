import { VFC } from 'react'
import { Loading } from './Loading'
import Link from 'next/link'
import { useQueryTitlesByYearAndSubcategory } from '../hooks/useQueryTitlesByYearAndSubcategory'

interface Props {
  yearId: string
  questionId: string
}

export const TitleListWithCheckbox: VFC<Props> = ({ yearId, questionId }) => {
  const { isLoading, data } = useQueryTitlesByYearAndSubcategory(yearId)

  if (isLoading) return <Loading />

  return (
    <>
      {/* checkboxes */}
      {/* <hr className="my-4 border-t border-base-300" /> */}

      {/* title list */}
      {data?.titles.map((title) => (
        <Link key={title.id} href={`/year/${yearId}/${title.id}`}>
          <a
            className={`block rounded-md py-3 px-4 opacity-20 ${
              questionId === title.id ? 'opacity-100' : 'hover:opacity-100'
            }`}
          >
            <p className="truncate">{title.content}</p>
          </a>
        </Link>
      ))}
    </>
  )
}
