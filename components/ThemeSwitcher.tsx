import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { useEffect, useState, VFC } from 'react'

export const ThemeSwitcher: VFC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="ml-auto mr-2 cursor-pointer" title="背景色変更">
      {theme === 'light' ? (
        <MoonIcon onClick={() => setTheme('dark')} className="w-5" />
      ) : (
        <SunIcon onClick={() => setTheme('light')} className="w-6" />
      )}
    </div>
  )
}
