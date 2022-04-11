import Image from 'next/image'
import Link from 'next/link'
import { VFC } from 'react'

export const Footer: VFC = () => {
  return (
    <footer className="bg-base-100 py-6">
      <div className="mx-auto flex max-w-[1000px] items-center text-sm">
        <div className="flex space-x-6">
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

        <p className="ml-auto text-xs">©2022 宅建過去問</p>
      </div>
    </footer>
  )
}
