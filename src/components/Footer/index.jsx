import { memo } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

import s from './index.module.scss'
import ContactInfo from '../ContactInfo'
import { LogoImages } from 'images'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Footer = () => {
  const { productCatalog, info } = useTypedSelector(({ footer }) => footer)
  const years = `2017 - ${new Date().getFullYear()}`

  return (
    <footer className={s.wrapper}>
      <div className='footer__container'>
        <div className={s.row}>
          <div className={s.column}>
            <img className={s.logo} src={LogoImages.LogoWhiteImage} alt='QPlast Logo' />
            <p className={s.text}>ООО "КЮ Пласт Тех"</p>
            <p className={s.text}>УНП 692151319</p>
            <p className={s.text}>
              <b style={{ color: 'white' }}>Юридический адрес:</b> 223070,
              Республика Беларусь, Минская область, Минский район, Михановичский
              с/с, район п.Михановичи, производственно-складская база, здание
              авторемонтных мастерских и административно-бытового корпуса, каб.
              №9.
            </p>
            <p className={s.text}>
              <b style={{ color: 'white' }}>Почтовый адрес:</b> 223070,
              Республика Беларусь, Минская область, Минский район, п.Михановичи,
              а/я 45. р/с BY37MTBK30120001093300098054 код MTBKBY22 в ЗАО
              «МТБанк», г. Минск, ул.Толстого, 10.
            </p>
          </div>
          <div className={s.column}>
            <h4 className={s.title}>Каталог продукции:</h4>
            <ul className={s.list}>
              {productCatalog.map(({ id, label, path }) => (
                <li className={s.item} key={id}>
                  <Link className={s.link} to={path}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className={s.title}>Информация:</h4>
            <ul className={s.list}>
              {info.map(({ id, label, path }) => (
                <li className={s.item} key={id}>
                  <Link className={s.link} to={path}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.column}>
            <h4 className={s.title}>Наши контакты</h4>
            <ContactInfo isFooter />
            <h4 className={s.title}>Напишите нам в мессенджер:</h4>
            <ul className={s.list}>
              <li className={s.item}>
                <a
                  className={s.link}
                  href='viber://chat?number=%2B375293529362'
                >
                  Viber
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href='https://wa.me/375293529362'>
                  WhatsApp
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href='https://t.me/@KostiaPlaksa'>
                  Telegram
                </a>
              </li>
            </ul>
            <h4 className={s.title}>Следите за нами в соц. сетях:</h4>
            <ul className={s.list}>
              <li className={s.item}>
                <a
                  className={s.link}
                  href='https://www.instagram.com/qplast_tech'
                >
                  Instagram
                </a>
              </li>
              <li className={s.item}>
                <a
                  className={s.link}
                  href='https://www.facebook.com/Qplast.by/'
                >
                  Facebook
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href='https://www.youtube.com'>
                  YouTube
                </a>
              </li>
              <li className={s.item}>
                <a
                  className={s.link}
                  href='http://www.europages.com.ru/Q-PLAST/00000005278956-592326001.html'
                >
                  EuroPages
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.copyright}>
          <AiOutlineCopyrightCircle /> {years} Qplast.by
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
