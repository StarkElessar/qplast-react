import React, { memo } from 'react'

import NavMenu from './NavMenu/NavMenu'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__top">
        <div className="header__container">

        </div>
      </div>
      <NavMenu />
    </div>
  )
}

export default memo(Header)