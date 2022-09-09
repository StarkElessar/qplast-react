import { FC } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { ITags } from 'types/textDataTypes'

import style from './index.module.scss'

interface VacancyProps {
  items: {
    title: string
    tags: ITags[]
    responsibilities: ITags[]
    requirements: ITags[]
    terms: ITags[]
  }
}

const Vacancy: FC<VacancyProps> = ({ items }) => {
  const { title, tags, responsibilities, requirements, terms } = items

  return (
    <div className={style.wrapper}>
      <h2 className={style.titleH2}>{title}</h2>
      <div className={style.workSettings}>
        {tags.map(({ id, label }) => (
          <span key={id}>{label}</span>
        ))}
      </div>
      <h3 className={style.titleH3}>Обязанности:</h3>
      <ul className={style.list}>
        {responsibilities.map(({ id, label }) => (
          <li className={style.listItem} key={id}>
            {label}
          </li>
        ))}
      </ul>
      <h3 className={style.titleH3}>Требования:</h3>
      <ul className={style.list}>
        {requirements.map(({ id, label }) => (
          <li className={style.listItem} key={id}>
            {label}
          </li>
        ))}
      </ul>
      <h3 className={style.titleH3}>Условия:</h3>
      <ul className={style.list}>
        {terms.map(({ id, label }) => (
          <li className={style.listItem} key={id}>
            {label}
          </li>
        ))}
      </ul>
      <h3 className={style.titleH3}>Контактная информация:</h3>
      <div className={style.contactBlock}>
        <p>Электронный адрес для отправки резюме</p>
        <a className={style.link} href='mailto:qplast@tut.by'>
          <span className={style.icon}>
            <AiOutlineMail />
          </span>
          <span className={style.text}>qplast@tut.by</span>
        </a>
      </div>
    </div>
  )
}

export default Vacancy
