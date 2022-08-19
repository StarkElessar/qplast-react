import React, { memo } from 'react'

import HeaderTop from './HeaderTop'
import NavMenu from './NavMenu'

const Header = () => {
  return (
    <div className='header'>
      <HeaderTop/>
      <NavMenu />
    </div>
  )
}

export default memo(Header)