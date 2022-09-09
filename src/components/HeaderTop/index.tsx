import { FC } from 'react'
import { BsCheck } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { IoLocationSharp } from 'react-icons/io5'

import Item from './components/Item'
import { RouteVariables } from 'types/routesTypes'
import { ContactInfo } from 'components'
import { LogoImages } from 'images'

const HeaderTop: FC = (): JSX.Element => (
  <div className='header__top top-header'>
    <div className='top-header__container'>
      <div className='top-header__block'>
        <div className='top-header__logo'>
          <img
            className='top-header__logo'
            src={LogoImages.LogoImage}
            alt='QPlast Logo'
          />
        </div>
        <div className='top-header__description'>
          Производство уплотнителей ООО "КЮ Пласт Тех"
        </div>
      </div>
      <div className='top-header__work-block'>
        <div className='top-header__work'>
          <Item
            Icon={<BsCheck />}
            text='Работаем по всей Беларуси и странам Европейского Союза'
          />
        </div>
        <div className='top-header__shedule'>
          <Item
            Icon={<BiTimeFive />}
            text='Понедельник - Пятница 09:00 - 17:00'
          />
          <Item
            Icon={<IoLocationSharp />}
            text='Схема проезда к офису и складу'
            path={RouteVariables.CONTACTS_ROUTE()}
          />
        </div>
      </div>
      <ContactInfo isMobile />
    </div>
  </div>
)

export default HeaderTop
