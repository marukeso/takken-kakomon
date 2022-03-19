import { render } from '@testing-library/react'
import { FixButton } from '../FixButton'

describe('FixButtonコンポーネント', () => {
  it('should render login text', () => {
    const { getByText } = render(<FixButton />)
    expect(getByText('ログイン')).toBeTruthy()
  })
})
