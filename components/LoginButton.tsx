import Link from 'next/link'
import { VFC } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import Router from 'next/router'
import { useRecoilState } from 'recoil'
import { answerListState } from '../atoms/answerLIstAtom'

export const LoginButton: VFC = () => {
  const { user } = useUser()
  const [answerList, setAnswerList] = useRecoilState(answerListState)

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setAnswerList([])
    Router.push('/api/auth/logout')
  }

  return user ? (
    <div className="dropdown-end dropdown">
      <label
        tabIndex={0}
        className="flex cursor-pointer items-center space-x-2"
      >
        <div className="avatar">
          <div className="h-8 w-8 rounded-full">
            <img src={user?.picture as string} />
          </div>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box mt-2 w-52 bg-base-100 p-2 shadow-lg"
      >
        <li>
          <button onClick={handleOnClick}>ログアウト</button>
        </li>
      </ul>
    </div>
  ) : (
    <Link href="/api/auth/login">
      <a className="text-info">ログイン</a>
    </Link>
  )
}
