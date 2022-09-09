import { FC, memo } from 'react'
import { HeaderTop, NavMenu } from 'components'

const Header: FC = (): JSX.Element => (
  <header className='header'>
    <HeaderTop />
    <NavMenu />
  </header>
)

export default memo(Header)
