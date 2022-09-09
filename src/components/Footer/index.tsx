import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

import style from './index.module.scss'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { ContactInfo } from 'components'
import { LogoImages } from 'images'

const Footer: FC = (): JSX.Element => {
  const { productCatalog, info } = useTypedSelector(({ footer }) => footer)
  const years = `2017 - ${new Date().getFullYear()}`

  return (
    <footer className={style.wrapper}>
      <div className='footer__container'>
        <div className={style.row}>
          <div className={style.column}>
            <img className={style.logo} src={LogoImages.LogoWhiteImage} alt='QPlast Logo' />
            <p className={style.text}>ООО "КЮ Пласт Тех"</p>
            <p className={style.text}>УНП 692151319</p>
            <p className={style.text}>
              <b style={{ color: 'white' }}>Юридический адрес:</b> 223070,
              Республика Беларусь, Минская область, Минский район, Михановичский
              с/с, район п.Михановичи, производственно-складская база, здание
              авторемонтных мастерских и административно-бытового корпуса, каб.
              №9.
            </p>
            <p className={style.text}>
              <b style={{ color: 'white' }}>Почтовый адрес:</b> 223070,
              Республика Беларусь, Минская область, Минский район, п.Михановичи,
              а/я 45. р/с BY37MTBK30120001093300098054 код MTBKBY22 в ЗАО
              «МТБанк», г. Минск, ул.Толстого, 10.
            </p>
          </div>
          <div className={style.column}>
            <h4 className={style.title}>Каталог продукции:</h4>
            <ul className={style.list}>
              {productCatalog.map(({ id, label, path }) => (
                <li className={style.item} key={id}>
                  <Link className={style.link} to={path}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className={style.title}>Информация:</h4>
            <ul className={style.list}>
              {info.map(({ id, label, path }) => (
                <li className={style.item} key={id}>
                  <Link className={style.link} to={path}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.column}>
            <h4 className={style.title}>Наши контакты</h4>
            <ContactInfo isFooter />
            <h4 className={style.title}>Напишите нам в мессенджер:</h4>
            <ul className={style.list}>
              <li className={style.item}>
                <a
                  className={style.link}
                  href='viber://chat?number=%2B375293529362'
                >
                  Viber
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href='https://wa.me/375293529362'>
                  WhatsApp
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href='https://t.me/@KostiaPlaksa'>
                  Telegram
                </a>
              </li>
            </ul>
            <h4 className={style.title}>Следите за нами в соц. сетях:</h4>
            <ul className={style.list}>
              <li className={style.item}>
                <a
                  className={style.link}
                  href='https://www.instagram.com/qplast_tech'
                >
                  Instagram
                </a>
              </li>
              <li className={style.item}>
                <a
                  className={style.link}
                  href='https://www.facebook.com/Qplast.by/'
                >
                  Facebook
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href='https://www.youtube.com'>
                  YouTube
                </a>
              </li>
              <li className={style.item}>
                <a
                  className={style.link}
                  href='http://www.europagestyle.com.ru/Q-PLAST/00000005278956-592326001.html'
                >
                  EuroPages
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.copyright}>
          <AiOutlineCopyrightCircle /> {years} Qplast.by
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
