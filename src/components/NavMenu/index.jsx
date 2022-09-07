import { memo } from 'react'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from 'react-icons/fi'

import { useActions } from 'hooks'
import { RouteVariables } from 'types/routesTypes'
import NavList from './components/NavList'
import SearchPanel from './components/SearchPanel'

const NavMenu = () => {
  const {setVisibleMenu} = useActions()

  return (
    <nav className='header__nav nav-menu'>
      <div className='nav-menu__container'>
        <button className='nav-menu__burger-button' onClick={setVisibleMenu}>
          <FiAlignJustify className='nav-menu__burger-icon' />
        </button>
        <NavList />
        <SearchPanel />
        <Link
          className='nav-menu__button'
          to={`${RouteVariables.CONTACTS_ROUTE()}/#contact-forma`}
        >
          Обратная связь
        </Link>
      </div>
    </nav>
  )
}

export default memo(NavMenu)
