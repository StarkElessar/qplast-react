import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VscClose } from 'react-icons/vsc'
import {AiOutlineMail} from 'react-icons/ai'

import { setCloseMenu } from '../../redux/actions/burgerMenu'
import MenuList from './components/MenuList'
import logoImg from '@img/logo.png'

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
        <div className="burger-menu__info">
          <a 
            className='burger-menu__info-link' 
            href="tel:+375293529362"
          >
            <span className='burger-menu__info-icon'>A1</span>
            <span className='burger-menu__info-text'>+375 29 352 93 62</span>
          </a>
          <a 
            className='burger-menu__info-link' 
            href="tel:+375295750465"
          >
            <span className='burger-menu__info-icon'>MTS</span>
            <span className='burger-menu__info-text'>+375 29 575 04 65</span>
          </a>
          <a 
            className='burger-menu__info-link' 
            href="mailto:qplast@tut.by"
          >
            <span className='burger-menu__info-icon'><AiOutlineMail /></span>
            <span className='burger-menu__info-text'>qplast@tut.by</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu