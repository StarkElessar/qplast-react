import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { IoMdArrowDropright } from 'react-icons/io'

import { setCloseMenu } from '../../../redux/actions/burgerMenu'

const MenuList = ({ items }) => {
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(false)

  const onCloseBurgerMenu = () => dispatch(setCloseMenu())
  const onShowSubList = () => setIsVisible(!isVisible)

  return (
    <ul className='burger-menu__list'>
      {
        items.map(({ id, label, path, subList, icon }) => (
          <li className='burger-menu__item' key={id}>
            <div className={`burger-menu__block ${isVisible ? 'active' : ''}`}>
              <NavLink
                to={path}
                className='burger-menu__link'
                onClick={onCloseBurgerMenu}
              >
                {label}
              </NavLink>
              {icon &&
                <span
                  className='burger-menu__icon'
                  onClick={onShowSubList}
                >
                  <IoMdArrowDropright />
                </span>}
            </div>
            {subList && <MenuList items={subList} />}
          </li>
        ))
      }
    </ul>
  )
}

export default MenuList;