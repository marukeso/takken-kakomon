import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState, VFC } from 'react'

export const Header: VFC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <header className="fixed top-0 left-0 z-10 flex w-full items-center border-b border-base-200 bg-base-100 bg-opacity-90 py-2 px-7">
      <h1>
        <Link href="/">
          <a className="text-kyokasho block text-2xl font-bold">宅建過去問</a>
        </Link>
      </h1>

      <div className="ml-auto mr-3 cursor-pointer" title="背景色変更">
        {theme === 'light' ? (
          <MoonIcon onClick={() => setTheme('dark')} className="w-5" />
        ) : (
          <SunIcon onClick={() => setTheme('light')} className="w-6" />
        )}
      </div>

      <div className="dropdown-end dropdown">
        <label
          tabIndex={0}
          className="flex cursor-pointer items-center space-x-2"
        >
          <div className="avatar">
            <div className="h-8 w-8 rounded-full">
              {/* <img src={user.picture as string} /> */}
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
      <Link href="/api/auth/login">
        <a className="text-primary">ログイン</a>
      </Link>
    </header>
  )
}
