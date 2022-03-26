import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { VFC } from 'react'
import { useUser } from '@auth0/nextjs-auth0'

export const Header: VFC = () => {
  const { user } = useUser()
  const { theme, setTheme } = useTheme()

  if (theme === 'system') {
    setTheme('light')
  }

  return (
    <header className="fixed top-0 left-0 z-10 flex w-full items-center border-b border-base-200 bg-base-100 bg-opacity-90 py-2 px-7">
      <h1>
        <Link href="/">
          <a className="text-kyokasho block text-2xl font-bold">宅建過去問</a>
        </Link>
      </h1>

      <div
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
        className="ml-auto mr-3 cursor-pointer"
        title="背景色変更"
      >
        {theme === 'light' ? (
          <MoonIcon className="w-5" />
        ) : (
          <SunIcon className="w-6" />
        )}
      </div>

      {user && (
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
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box mt-2 w-52 bg-base-100 p-2 shadow-lg"
          >
            <li>
              <Link href="/api/auth/logout">
                <a>ログアウト</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {!user && (
        <Link href="/api/auth/login">
          <a className="text-primary">ログイン</a>
        </Link>
      )}
    </header>
  )
}
