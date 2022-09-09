import { FC, MouseEvent, useRef } from 'react'
import { VscClose } from 'react-icons/vsc'

import { useActions, useTypedSelector, useLockBodyScroll } from 'hooks'
import { LogoImages } from 'images'
import { ContactInfo } from 'components'
import MenuList from './MenuList'

interface BurgerMenuProps {
  classTransition: string
}

const BurgerMenu: FC<BurgerMenuProps> = ({ classTransition }): JSX.Element => {
  const { setCloseMenu } = useActions()
  const burgerMenuRef = useRef<HTMLDivElement>(null)
  const isVisibleBurgerMenu = useTypedSelector(({ burgerMenu }) => burgerMenu.isVisible)
  const menuItems = useTypedSelector(({ burgerMenu }) => burgerMenu.linkItems)
  const handleOutsideMenuClick = ({ target }: MouseEvent<HTMLElement>) =>
    target === burgerMenuRef.current && setCloseMenu()

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
