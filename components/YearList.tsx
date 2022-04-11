import { VFC } from 'react'
import Link from 'next/link'
import { createHasuraClient } from '../utils/hasuraClient'
import { useQuery } from 'react-query'
import { Loading } from './Loading'

export const YearList: VFC = () => {
  const hasuraClient = createHasuraClient(null)

  const { data, isLoading } = useQuery('years', () => hasuraClient.GetYears())

  if (isLoading) return <Loading />

  return (
    <div className="grid grid-cols-4 gap-6">
      {data?.years.map((year) => (
        <div className="card space-y-4 font-medium">
          <p className="text-center text-lg">{year.content}</p>
          <Link href={`/year/${year.id}`}>
            <a className="btn btn-accent w-full border-none bg-opacity-60">
              問題一覧
            </a>
          </Link>
          <Link href={`/year/${year.id}/${year.id}01`}>
            <a className="btn btn-info w-full border-none bg-opacity-60">
              試験開始
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
