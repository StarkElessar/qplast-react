import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from 'react-icons/fi'

import { CONTACTS_ROUTE } from '../../utils/constsPath'
import { setVisibleMenu } from '../../redux/actions/burgerMenu'
import NavList from './components/NavList'
import SearchPanel from './components/SearchPanel'

const NavMenu = () => {
  const dispatch = useDispatch()
  const onOpenMenu = () => dispatch(setVisibleMenu())

  return (
    <nav className='header__nav nav-menu'>
      <div className="nav-menu__container">
        <button
          className='nav-menu__burger-button'
          onClick={onOpenMenu}
        >
          <FiAlignJustify className='nav-menu__burger-icon' />
        </button>
        <NavList />
        <SearchPanel />
        <Link
          className='nav-menu__button'
          to={`${CONTACTS_ROUTE}/#contact-forma`}
        >
          Обратная связь
        </Link>
      </div>
    </nav>
  )
}

export default memo(NavMenu)