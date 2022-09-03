import React from 'react'
import { useSelector } from 'react-redux'

import s from './index.module.scss'

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
      <h1 className={s.mainTitle}>Пользовательское соглашение</h1>
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
      <h2 className={s.title_2}>
        Права и обязанности сторон
      </h2>
      <h3 className={s.title_3}>Пользователь имеет право:</h3>
      <ul className={s.list}>
        {userHasRight.map(({ id, text }) => (
          <li className={s.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <h3 className={s.title_3}>Администрация имеет право:</h3>
      <ul className={s.list}>
        {adminHasRight.map(({ id, text }) => (
          <li className={s.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <h3 className={s.title_3}>Пользователь обязуется:</h3>
      <ul className={s.list}>
        {userUndertakes.map(({ id, text }) => (
          <li className={s.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <h3 className={s.title_3}>Администрация обязуется:</h3>
      <ul className={s.list}>
        {adminUndertakes.map(({ id, text }) => (
          <li className={s.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <h3 className={s.title_3}>Ответственность сторон:</h3>
      <ul className={s.list}>
        {responsibilityParties.map(({ id, text }) => (
          <li className={s.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <h2 className={s.title_2}>
        Условия действия Соглашения
      </h2>
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
