import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import s from './index.module.scss'

const Vacancy = ({ items }) => {
  const { title, tags, responsibilities, requirements, terms } = items

  return (
    <div className={s.wrapper}>
      <h2 className={s.titleH2}>{title}</h2>
      <div className={s.workSettings}>
        {tags.map(({ id, label }) => (
          <span key={id}>{label}</span>
        ))}
      </div>
      <h3 className={s.titleH3}>Обязанности:</h3>
      <ul className={s.list}>
        {responsibilities.map(({ id, label }) => (
          <li className={s.listItem} key={id}>
            {label}
          </li>
        ))}
      </ul>
      <h3 className={s.titleH3}>Требования:</h3>
      <ul className={s.list}>
        {requirements.map(({ id, label }) => (
          <li className={s.listItem} key={id}>
            {label}
          </li>
        ))}
      </ul>
      <h3 className={s.titleH3}>Условия:</h3>
      <ul className={s.list}>
        {terms.map(({ id, label }) => (
          <li className={s.listItem} key={id}>
            {label}
          </li>
        ))}
      </ul>
      <h3 className={s.titleH3}>Контактная информация:</h3>
      <div className={s.contactBlock}>
        <p>Электронный адрес для отправки резюме</p>
        <a className={s.link} href='mailto:qplast@tut.by'>
          <span className={s.icon}>
            <AiOutlineMail />
          </span>
          <span className={s.text}>qplast@tut.by</span>
        </a>
      </div>
    </div>
  )
}

export default Vacancy
