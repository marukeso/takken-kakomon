import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { VFC } from 'react'
import { useUser } from '@auth0/nextjs-auth0'

export const Header: VFC = () => {
  const { user } = useUser()
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 z-10 flex w-full items-center border-b border-base-200 bg-base-100 bg-opacity-90 py-2 px-7">
      <h1>
        <Link href="/">
          <a className="block text-xl font-bold">
            <span className="text-primary">宅建</span>過去問
          </a>
        </Link>
      </h1>

      <div
        onClick={() =>
          theme === 'winter' ? setTheme('night') : setTheme('winter')
        }
        className="ml-auto mr-3 cursor-pointer"
        title="背景色変更"
      >
        {theme === 'winter' ? (
          <MoonIcon className="w-5" />
        ) : (
          <SunIcon className="w-6" />
        )}
      </div>

      {user && (
        <div className="flex h-10 items-center rounded-full bg-base-200 pl-1 pr-3">
          <div className="dropdown-end dropdown">
            <label
              tabIndex={0}
              className="flex cursor-pointer items-center space-x-2"
            >
              <div className="avatar">
                <div className="h-8 w-8 rounded-full">
                  <img src={user.picture as string} />
                </div>
              </div>
              <div className="flex max-w-[180px] items-center">
                <span className="mr-1 block truncate">{user?.name}</span>
                <span>様</span>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box mt-2 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/api/auth/logout">
                  <a>ログアウト</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {!user && (
        <div className="flex h-10 items-center rounded-full bg-base-200 px-4 py-3">
          <Link href="/api/auth/login">
            <a className="text-primary">ログイン</a>
          </Link>
        </div>
      )}
    </header>
  )
}
