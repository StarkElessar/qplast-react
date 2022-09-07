import React, { memo } from 'react'

import HeaderTop from '../HeaderTop'
import NavMenu from '../NavMenu'

const Header = () => {
  return (
    <header className='header'>
      <HeaderTop/>
      <NavMenu />
    </header>
  )
}

export default memo(Header)