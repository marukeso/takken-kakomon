import { VFC } from 'react'
import { HeaderLogo } from './HeaderLogo'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LoginButton } from './LoginButton'

export const Header: VFC = () => {
  return (
    <header className="fixed top-0 left-0 z-10 flex w-full items-center bg-base-100 py-2 px-4">
      <HeaderLogo />
      <ThemeSwitcher />
      <LoginButton />
    </header>
  )
}
