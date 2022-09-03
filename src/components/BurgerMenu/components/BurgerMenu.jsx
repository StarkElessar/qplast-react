import React from 'react'
import { useSelector } from 'react-redux'
import { VscClose } from 'react-icons/vsc'

import MenuList from './MenuList'
import logoImg from '@img/logo.png'
import ContactInfo from '../../ContactInfo'
import useVisibleBurgerMenu from '../../../hooks/useVisibleBurgerMenu'

const BurgerMenu = ({ classTransition }) => {
  const { onClickButtonClose, onClickWrapperClose, burgerMenuRef } =
    useVisibleBurgerMenu()
  const menuItems = useSelector(({ burgerMenu }) => burgerMenu.linkItems)

  return (
    <div
      className={`burger-menu ${classTransition}`}
      onClick={onClickWrapperClose}
      ref={burgerMenuRef}
    >
      <div className={`burger-menu__body ${classTransition}`}>
        <button
          className='burger-menu__close-button'
          onClick={onClickButtonClose}
        >
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
