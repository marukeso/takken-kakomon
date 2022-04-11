import { memo, VFC } from 'react'
import Link from 'next/link'
import { createHasuraClient } from '../utils/hasuraClient'
import { useQuery } from 'react-query'
import { Loading } from './Loading'
import Image from 'next/image'

const YearList: VFC = () => {
  const hasuraClient = createHasuraClient(null)

  const { data, isLoading } = useQuery('years', () => hasuraClient.GetYears())

  if (isLoading) return <Loading />

  return (
    <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-0">
      {data?.years.map((year) => (
        <div className="card space-y-4 pt-5 pb-7 font-medium">
          <Image src="/exam.svg" width={40} height={40} alt="PC画面" />
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

export const YearListMemo = memo(YearList)
