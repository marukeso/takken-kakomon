import Link from 'next/link'
import { VFC } from 'react'
import Image from 'next/image'

export const HeaderLogo: VFC = () => {
  return (
    <h1>
      <Link href="/">
        <a className="text-noto flex items-center text-2xl font-light">
          <Image src="/logo.svg" width={25} height={26} alt="宅建過去問" />
          <span className="ml-2">宅建過去問</span>
        </a>
      </Link>
    </h1>
  )
}
