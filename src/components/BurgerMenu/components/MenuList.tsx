import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'

import { useActions } from 'hooks'
import { ILinkItems } from 'types/burgerMenuTypes'

interface MenuListProps {
  items: ILinkItems[]
}

const MenuList: FC<MenuListProps> = ({ items }): JSX.Element => {
  const {setCloseMenu} = useActions()
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const onShowSubList = (): void => setIsVisible(!isVisible)

  return (
    <ul className='burger-menu__list'>
      {items.map(({ id, label, path, subList, icon }) => (
        <li className='burger-menu__item' key={id}>
          <div className={`burger-menu__block ${isVisible ? 'active' : ''}`}>
            <NavLink
              to={path}
              className='burger-menu__link'
              onClick={setCloseMenu}
            >
              {label}
            </NavLink>
            {icon && (
              <span
                className={`burger-menu__icon ${isVisible ? 'active' : ''}`}
                onClick={onShowSubList}
              >
                <IoMdArrowDropright />
              </span>
            )}
          </div>
          {subList && <MenuList items={subList} />}
        </li>
      ))}
    </ul>
  )
}

export default MenuList
