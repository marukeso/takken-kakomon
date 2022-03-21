import { useState, VFC } from 'react'
import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'

export const FixButton: VFC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed top-4 right-4 flex items-center space-x-4">
      <div
        onClick={() =>
          theme === 'winter' ? setTheme('night') : setTheme('winter')
        }
        className="cursor-pointer"
        title="背景色変更"
      >
        {theme === 'winter' ? (
          <MoonIcon className="w-5" />
        ) : (
          <SunIcon className="w-6" />
        )}
      </div>

      <div className="flex h-12 cursor-pointer items-center space-x-2 rounded-full bg-base-200 p-1 pr-3 transition hover:bg-base-300">
        {/* <div className="avatar">
          <div className="h-10 w-10 rounded-full">
          <img src="https://www.blexar.com/avatar.png" alt="" />
          </div>
          </div>
        <div>kentaro maruyma 様</div> */}
        <div className="pl-3 text-primary">ログイン</div>
      </div>
    </div>
  )
}
