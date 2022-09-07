import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { VscClose } from 'react-icons/vsc'

import logoImg from 'img/logo.png'
import { ContactInfo } from 'components'
import MenuList from './MenuList'
import useLockBodyScroll from '../../../hooks/useLockBodyScroll'
import { setCloseMenu } from 'store/actions/burgerMenu'

const BurgerMenu = ({ classTransition }) => {
  const dispatch = useDispatch()
  const burgerMenuRef = useRef()
  const closeMenu = () => dispatch(setCloseMenu())
  const handleOutsideMenuClick = ({ target }) =>
    target === burgerMenuRef.current && closeMenu()
  const { isVisible: isVisibleBurgerMenu, linkItems: menuItems } = useSelector(
    ({ burgerMenu }) => burgerMenu
  )

  useLockBodyScroll(isVisibleBurgerMenu)

  return (
    <div
      className={`burger-menu ${classTransition}`}
      onClick={handleOutsideMenuClick}
      ref={burgerMenuRef}
    >
      <div className={`burger-menu__body ${classTransition}`}>
        <button className='burger-menu__close-button' onClick={closeMenu}>
          <VscClose className='burger-menu__close-icon' />
        </button>
        <img className='burger-menu__logo' src={logoImg} alt='QPlast' />
        <MenuList items={menuItems} />
        <ContactInfo isBurger />
      </div>
    </div>
  )
}

export default BurgerMenu
