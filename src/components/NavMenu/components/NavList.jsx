import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import {
  ABOUT_ROUTE,
  CATALOG_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  SHIPPING_PAYMENT_ROUTE
} from '../../../utils/constsPath'

const NavList = () => {
  return (
    <ul className="nav-menu__list">
      <li className="nav-menu__item">
        <NavLink to={HOME_ROUTE} className="nav-menu__link">Главная</NavLink>
      </li>
      <li className="nav-menu__item">
        <NavLink to={CATALOG_ROUTE} className="nav-menu__link">Каталог продукции</NavLink>
      </li>
      <li className="nav-menu__item">
        <NavLink to={SHIPPING_PAYMENT_ROUTE} className="nav-menu__link">Доставка и оплата</NavLink>
      </li>
      <li className="nav-menu__item">
        <NavLink to={NEWS_ROUTE} className="nav-menu__link">Новости</NavLink>
      </li>
      <li className="nav-menu__item">
        <NavLink to={ABOUT_ROUTE} className="nav-menu__link">О компании</NavLink>
      </li>
      <li className="nav-menu__item">
        <NavLink to={CONTACTS_ROUTE} className="nav-menu__link">Контакты</NavLink>
      </li>
    </ul>
  )
}

export default memo(NavList)