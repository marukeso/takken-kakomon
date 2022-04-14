import { FC } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const DefaultLayout: FC = ({ children }) => {
  return (
    <div className="bg-base-200">
      <Header />
      <main className="mx-auto max-w-[1000px] py-10">{children}</main>
      <Footer />
    </div>
  )
}
