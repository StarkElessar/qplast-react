import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VscClose } from 'react-icons/vsc'
import { setCloseMenu } from '../../redux/actions/burgerMenu'
import MenuList from './components/MenuList'
import logoImg from '../../assets/images/logo.png'

const BurgerMenu = () => {
  const dispatch = useDispatch()
  const menuItems = useSelector(({ burgerMenu }) => burgerMenu.linkItems)
  const stopClose = (event) => event.stopPropagation()
  const onCloseMenu = () => dispatch(setCloseMenu())

  return (
    <div className="burger-menu" onClick={onCloseMenu}>
      <div className="burger-menu__body" onClick={stopClose}>
        <button className="burger-menu__close-button" onClick={onCloseMenu}>
          <VscClose className='burger-menu__close-icon' />
        </button>
        <img
          className='burger-menu__logo'
          src={logoImg}
          alt="QPlast Logo"
        />
        <MenuList items={menuItems} />
      </div>
    </div>
  )
}

export default BurgerMenu