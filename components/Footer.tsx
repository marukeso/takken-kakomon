import Image from 'next/image'
import Link from 'next/link'
import { VFC } from 'react'

export const Footer: VFC = () => {
  return (
    <footer className="bg-base-200 px-8 pt-10 pb-4">
      <div className="footer mx-auto max-w-[900px]">
        <div className="w-full place-items-center text-center md:place-items-start md:text-left">
          <Image src="/logo.png" width={70} height={70} alt="宅建過去問" />
          <p>
            サインアップして
            <br />
            履歴機能を使ってみよう！
          </p>
        </div>
        <div>
          <span className="footer-title">年度別試験</span>
          <Link href="/year/212">
            <a className="hover:opacity-60">令和3年12月試験</a>
          </Link>
          <Link href="/year/211">
            <a className="hover:opacity-60">令和3年10月試験</a>
          </Link>
          <Link href="/year/202">
            <a className="hover:opacity-60">令和2年12月試験</a>
          </Link>
          <Link href="/year/201">
            <a className="hover:opacity-60">令和2年10月試験</a>
          </Link>
        </div>
        {/* <div>
          <span className="footer-title">カテゴリー別試験</span>
          <a className="hover:opacity-60">権利関係</a>
          <a className="hover:opacity-60">宅建業法</a>
          <a className="hover:opacity-60">法令制限</a>
          <a className="hover:opacity-60">税その他</a>
        </div> */}
        <div>
          <span className="footer-title opacity-0">コンテンツ</span>
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
      </div>

      <p className="mt-10 text-center text-xs">©2022 宅建過去問</p>
    </footer>
  )
}
