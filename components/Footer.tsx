import Image from 'next/image'
import Link from 'next/link'
import { VFC } from 'react'

export const Footer: VFC = () => {
  return (
    <footer className="bg-base-100 py-6 px-4 lg:px-0">
      <div className=" mx-auto flex max-w-[1000px] flex-col items-start text-sm lg:flex-row lg:items-center">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <Link href="/terms">
            <a className="hover:opacity-60">利用規約</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="hover:opacity-60">プライバシーポリシー</a>
          </Link>
          <Link href="/contact">
            <a className="hover:opacity-60">お問い合わせ</a>
          </Link>
        </div>

        <p className="mt-10 w-full text-center text-xs lg:mt-0 lg:ml-auto lg:w-max">
          ©2022 宅建過去問
        </p>
      </div>
    </footer>
  )
}
