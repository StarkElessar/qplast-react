import React from 'react'
import { useSelector } from 'react-redux'
import Vacancy from '@components/Vacancy'

import s from './index.module.scss'

const Vakansii = () => {
  const { allVacancy } = useSelector(({ textData }) => textData)

  return (
    <section className='vakansii__container'>
      <h1 className={s.titleH1}>Вакансии</h1>
      {allVacancy.map((vacancy) => (
        <Vacancy key={vacancy.id} items={vacancy} />
      ))}
    </section>
  )
}

export default Vakansii
