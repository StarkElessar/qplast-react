import React from 'react'
import { NavLink } from 'react-router-dom';

const MenuList = ({ items }) => (
  <ul className='burger-menu__list'>
    {
      items.map(({ id, label, path, subList }) => (
        <li className='burger-menu__item' key={id}>
          <NavLink to={path} className='burger-menu__link'>
            {label}
          </NavLink>
          {subList && <MenuList items={subList} />}
        </li>
      ))
    }
  </ul>
);

export default MenuList;