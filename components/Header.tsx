import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { VFC } from 'react'

export const Header: VFC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 flex w-full items-center border-b border-base-200 bg-base-100 bg-opacity-90 py-2 px-4">
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

      <div className="flex h-10 cursor-pointer items-center space-x-2 rounded-full bg-base-200 px-1 pr-3 transition hover:bg-base-300">
        {/* <div className="avatar">
            <div className="h-8 w-8 rounded-full">
              <img src="https://www.blexar.com/avatar.png" alt="" />
            </div>
          </div>
          <div className="flex max-w-[140px] items-center">
            <span className="mr-1 block truncate">
              kentaro maruyama hogeghoehg
            </span>
            <span>様</span>
          </div> */}
        <div className="pl-2 text-primary">ログイン</div>
      </div>
    </header>
  )
}
