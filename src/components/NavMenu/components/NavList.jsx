import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { RouteVariables } from 'types/routesTypes'

const NavList = () => {
  return (
    <ul className='nav-menu__list'>
      <li className='nav-menu__item'>
        <NavLink to={RouteVariables.HOME_ROUTE()} className='nav-menu__link'>
          Главная
        </NavLink>
      </li>
      <li className='nav-menu__item'>
        <NavLink to={RouteVariables.CATALOG_ROUTE()} className='nav-menu__link'>
          Каталог продукции
        </NavLink>
      </li>
      <li className='nav-menu__item'>
        <NavLink to={RouteVariables.SHIPPING_PAYMENT_ROUTE()} className='nav-menu__link'>
          Доставка и оплата
        </NavLink>
      </li>
      <li className='nav-menu__item'>
        <NavLink to={RouteVariables.NEWS_ROUTE()} className='nav-menu__link'>
          Новости
        </NavLink>
      </li>
      <li className='nav-menu__item'>
        <NavLink to={RouteVariables.ABOUT_ROUTE()} className='nav-menu__link'>
          О компании
        </NavLink>
      </li>
      <li className='nav-menu__item'>
        <NavLink to={RouteVariables.CONTACTS_ROUTE()} className='nav-menu__link'>
          Контакты
        </NavLink>
      </li>
    </ul>
  )
}

export default memo(NavList)
