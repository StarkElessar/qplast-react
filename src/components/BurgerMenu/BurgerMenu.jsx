import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { VscClose } from 'react-icons/vsc'

import { setCloseMenu } from '../../redux/actions/burgerMenu'
import logoImg from '../../assets/images/logo.png'

const BurgerMenu = () => {
  const dispatch = useDispatch()
  const menuItems = useSelector(({ burgerMenu }) => burgerMenu.linkItems)
  const stopClose = (event) => event.stopPropagation()

  const onCloseMenu = () => {
    dispatch(setCloseMenu())
  }

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
        <ul className='burger-menu__list'>
          {
            menuItems.map((item) => {
              return (
                <li className='burger-menu__item' key={item.id}>
                  <NavLink to={item.path} className='burger-menu__link'>{item.label}</NavLink>
                  {
                    item.subList && (
                      <ul className='burger-menu__sub-list'>
                        {
                          item.subList &&
                          item.subList.map((subItem) => {
                            return (
                              <li className='burger-menu__item' key={subItem.id}>
                                <NavLink to={subItem.path} className='burger-menu__link'>{subItem.label}</NavLink>
                                {
                                  subItem.subList && (
                                    <ul className='burger-menu__sub-list'>
                                      {
                                        subItem.subList &&
                                        subItem.subList.map((subItemList) => {
                                          return (
                                            <li
                                              className='burger-menu__item'
                                              key={subItemList.id}
                                            >
                                              <NavLink
                                                to={subItemList.path}
                                                className='burger-menu__link'
                                              >
                                                {subItemList.label}
                                              </NavLink>
                                            </li>
                                          )
                                        })
                                      }
                                    </ul>
                                  )
                                }
                              </li>
                            )
                          })
                        }
                      </ul>
                    )
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default BurgerMenu