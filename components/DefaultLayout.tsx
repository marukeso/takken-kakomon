import { FC } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const DefaultLayout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
