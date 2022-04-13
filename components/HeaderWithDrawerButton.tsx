import { VFC } from 'react'
import { HeaderLogo } from './HeaderLogo'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LoginButton } from './LoginButton'
import { MenuIcon } from '@heroicons/react/outline'

export const HeaderWithDrawerButton: VFC = () => {
  return (
    <header className="fixed top-0 left-0 z-10 flex w-full items-center bg-base-100 py-2 px-2 md:px-5 ">
      <label htmlFor="drawer" className="mr-3 lg:hidden">
        <MenuIcon className="w-6" />
      </label>

      <HeaderLogo />
      <ThemeSwitcher />
      <LoginButton />
    </header>
  )
}
