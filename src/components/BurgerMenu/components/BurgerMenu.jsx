import { useRef } from 'react'
import { VscClose } from 'react-icons/vsc'

import { useActions, useTypedSelector, useLockBodyScroll } from 'hooks'
import { LogoImages } from 'images'
import { ContactInfo } from 'components'
import MenuList from './MenuList'

const BurgerMenu = ({ classTransition }) => {
  const { setCloseMenu } = useActions()
  const burgerMenuRef = useRef()
  const handleOutsideMenuClick = ({ target }) => target === burgerMenuRef.current && setCloseMenu()
  const isVisibleBurgerMenu = useTypedSelector(({ burgerMenu }) => burgerMenu.isVisible)
  const menuItems = useTypedSelector(({ burgerMenu }) => burgerMenu.linkItems)

  useLockBodyScroll(isVisibleBurgerMenu)

  return (
    <div
      className={`burger-menu ${classTransition}`}
      onClick={handleOutsideMenuClick}
      ref={burgerMenuRef}
    >
      <div className={`burger-menu__body ${classTransition}`}>
        <button className='burger-menu__close-button' onClick={setCloseMenu}>
          <VscClose className='burger-menu__close-icon' />
        </button>
        <img className='burger-menu__logo' src={LogoImages.LogoImage} alt='QPlast' />
        <MenuList items={menuItems} />
        <ContactInfo isBurger />
      </div>
    </div>
  )
}

export default BurgerMenu
