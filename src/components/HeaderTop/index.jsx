import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { IoLocationSharp } from 'react-icons/io5'

import logoImg from '@img/logo.png'
import Item from './components/Item'
import ContactInfo from '../ContactInfo'

const HeaderTop = () => {
  return (
    <div className="header__top top-header">
      <div className="top-header__container">
        <div className='top-header__block'>
          <div className="top-header__logo">
            <img
              className='top-header__logo'
              src={logoImg}
              alt="QPlast Logo"
            />
          </div>
          <div className="top-header__description">
            Производство уплотнителей ООО "КЮ Пласт Тех"
          </div>
        </div>
        <div className='top-header__work-block'>
          <div className='top-header__work'>
            <Item icon={<BsCheck />} text='Работаем по всей Беларуси и странам Европейского Союза' />
          </div>
          <div className='top-header__shedule'>
            <Item icon={<BiTimeFive />} text='Понедельник - Пятница 09:00 - 17:00' />
            <Item icon={<IoLocationSharp />} text='Схема проезда к офису и складу' path={'/contacts#map'} />
          </div>
        </div>
        <ContactInfo isMobile/>
      </div>
    </div>
  )
}

export default HeaderTop