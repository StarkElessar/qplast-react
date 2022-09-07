import React from 'react'
import { useSelector } from 'react-redux'

import s from './index.module.scss'
import { TitleH1, TitleH2, TitleH3 } from '@ui'

const Soglashenie = () => {
  const {
    userHasRight,
    adminHasRight,
    userUndertakes,
    adminUndertakes,
    responsibilityParties,
  } = useSelector(({ textData }) => textData.soglashenie)

  return (
    <section className='soglashenie__container'>
      <TitleH1>Пользовательское соглашение</TitleH1>
      <div className={s.textBlock}>
        <p className={s.article}>
          Настоящее Пользовательское Соглашение (далее: Соглашение) регулирует
          отношения между ООО «КЮ Пласт Тех» (далее: qplast.by или
          Администрация) с одной стороны и пользователем сайта с другой. Сайт
          qplast.by <b>не является</b> средством массовой информации.
        </p>
        <p className={s.article}>
          Используя сайт, Вы соглашаетесь с условиями данного соглашения.{' '}
          <b>
            Если Вы не согласны с условиями данного соглашения, не используйте
            сайт qplast.by!
          </b>
        </p>
      </div>
      <TitleH2>Права и обязанности сторон</TitleH2>
      <TitleH3>Пользователь имеет право:</TitleH3>
      <ul className={s.list}>
        {userHasRight.map(({ id, text }) => (
          <li className={s.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <TitleH3>Администрация имеет право:</TitleH3>
      <ul className={s.list}>
        {adminHasRight.map(({ id, text }) => (
          <li className={s.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <TitleH3>Пользователь обязуется:</TitleH3>
      <ul className={s.list}>
        {userUndertakes.map(({ id, text }) => (
          <li className={s.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <TitleH3>Администрация обязуется:</TitleH3>
      <ul className={s.list}>
        {adminUndertakes.map(({ id, text }) => (
          <li className={s.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <TitleH3>Ответственность сторон:</TitleH3>
      <ul className={s.list}>
        {responsibilityParties.map(({ id, text }) => (
          <li className={s.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <TitleH2>Условия действия Соглашения</TitleH2>
      <div className={s.textBlock}>
        <p className={s.article}>
          Данное Соглашение вступает в силу при любом использовании данного
          сайта. Соглашение перестает действовать при появлении его новой
          версии. Администрация оставляет за собой право в одностороннем порядке
          изменять данное соглашение по своему усмотрению. Администрация не
          оповещает пользователей об изменении в Соглашении.
        </p>
      </div>
    </section>
  )
}

export default Soglashenie
