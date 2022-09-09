import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useTypedSelector } from 'hooks'
import { IMenuLinkList } from 'types/headerTypes'

const NavList: FC = (): JSX.Element => {
  const menuLinks = useTypedSelector(
    ({ header }): IMenuLinkList[] => header.menuLinkList
  )

  return (
    <ul className='nav-menu__list'>
      {menuLinks.map(({ id, label, route }) => (
        <li className='nav-menu__item' key={id}>
          <NavLink to={route} className='nav-menu__link'>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default memo(NavList)
