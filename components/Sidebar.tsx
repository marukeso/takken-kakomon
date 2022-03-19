import { VFC } from 'react'
import {
  HomeIcon,
  HeartIcon,
  ArrowNarrowLeftIcon,
} from '@heroicons/react/outline'
import { TitleListWithCheckbox } from './TitleListWithCheckbox'
import Link from 'next/link'

interface Props {
  yearId: string
  questionId: string
}

export const Sidebar: VFC<Props> = ({ yearId, questionId }) => {
  return (
    <div className="relative w-80 overflow-scroll border-base-300 bg-base-200 px-4 py-20 text-sm">
      <div className="fixed top-0 left-4 w-[287px] border-b border-base-300 bg-base-200">
        <Link href="/">
          <a className="block p-4 text-2xl font-bold">
            <span className="text-primary">宅建</span>過去問
          </a>
        </Link>
      </div>

      {/* <Link href="/">
          <a className="flex cursor-pointer items-center space-x-2 rounded-md py-3 px-4 transition hover:bg-base-300">
            <HomeIcon className="w-6" />
            <span>ホーム</span>
          </a>
        </Link>
        <a className="flex cursor-pointer items-center space-x-2 rounded-md py-3 px-4 transition hover:bg-base-300">
          <HeartIcon className="w-6" />
          <span>お気に入り</span>
        </a>
        <hr className="my-4 border-t border-base-300" /> */}

      <TitleListWithCheckbox yearId={yearId} questionId={questionId} />

      {/* 終了 */}
      <div className="fixed bottom-0 left-0 w-80 border-t border-base-300 bg-base-100 py-5 px-8">
        <Link href={`/year/${yearId}`}>
          <a className="flex w-max cursor-pointer items-center space-x-2 font-bold">
            <ArrowNarrowLeftIcon className="w-6" />
            <span>終了する</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
