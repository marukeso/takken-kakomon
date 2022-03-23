import { VFC } from 'react'

export const Footer: VFC = () => {
  return (
    <footer className="bg-base-200 px-6 pt-10 pb-4">
      <div className="footer w-1/2 text-base-content">
        <div>
          <span className="footer-title">年度別試験</span>
          <a className="hover:opacity-60">令和3年（2021年）12月</a>
          <a className="hover:opacity-60">令和3年（2021年）10月</a>
          <a className="hover:opacity-60">令和2年（2020年）12月</a>
          <a className="hover:opacity-60">令和2年（2020年）10月</a>
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
          <a className="hover:opacity-60">利用規約</a>
          <a className="hover:opacity-60">プライバシーポリシー</a>
          <a className="hover:opacity-60">お問い合わせ</a>
        </div>
      </div>

      <p className="mt-10 text-center text-xs lg:text-right">
        ©2022 宅建過去問
      </p>
    </footer>
  )
}
