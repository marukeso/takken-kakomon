import { render } from '@testing-library/react'
import { Footer } from '../Footer'

describe('Footerコンポーネント', () => {
  it('should render site name text', () => {
    const { getByText } = render(<Footer />)
    expect(getByText('©2022 宅建過去問')).toBeTruthy()
  })
})
