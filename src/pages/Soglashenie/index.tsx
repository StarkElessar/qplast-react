import { FC } from 'react'

import style from './index.module.scss'
import { useTypedSelector } from 'hooks'
import { TitleH1, TitleH2, TitleH3 } from 'ui'

const Soglashenie: FC = (): JSX.Element => {
  const {
    userHasRight,
    adminHasRight,
    userUndertakes,
    adminUndertakes,
    responsibilityParties,
  } = useTypedSelector(({ textData }) => textData.soglashenie)

  return (
    <section className='soglashenie__container'>
      <TitleH1>Пользовательское соглашение</TitleH1>
      <div className={style.textBlock}>
        <p className={style.article}>
          Настоящее Пользовательское Соглашение (далее: Соглашение) регулирует
          отношения между ООО «КЮ Пласт Тех» (далее: qplast.by или
          Администрация) с одной стороны и пользователем сайта с другой. Сайт
          qplast.by <b>не является</b> средством массовой информации.
        </p>
        <p className={style.article}>
          Используя сайт, Вы соглашаетесь с условиями данного соглашения.{' '}
          <b>
            Если Вы не согласны с условиями данного соглашения, не используйте
            сайт qplast.by!
          </b>
        </p>
      </div>
      <TitleH2>Права и обязанности сторон</TitleH2>
      <TitleH3>Пользователь имеет право:</TitleH3>
      <ul className={style.list}>
        {userHasRight.map(({ id, text }) => (
          <li className={style.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <TitleH3>Администрация имеет право:</TitleH3>
      <ul className={style.list}>
        {adminHasRight.map(({ id, text }) => (
          <li className={style.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <TitleH3>Пользователь обязуется:</TitleH3>
      <ul className={style.list}>
        {userUndertakes.map(({ id, text }) => (
          <li className={style.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <TitleH3>Администрация обязуется:</TitleH3>
      <ul className={style.list}>
        {adminUndertakes.map(({ id, text }) => (
          <li className={style.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <TitleH3>Ответственность сторон:</TitleH3>
      <ul className={style.list}>
        {responsibilityParties.map(({ id, text }) => (
          <li className={style.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
      <TitleH2>Условия действия Соглашения</TitleH2>
      <div className={style.textBlock}>
        <p className={style.article}>
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
