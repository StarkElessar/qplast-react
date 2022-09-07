import React from 'react'
import { useSelector } from 'react-redux'
import Vacancy from 'components/Vacancy'

import s from './index.module.scss'
import { TitleH1 } from 'ui'

const Vakansii = () => {
  const { allVacancy } = useSelector(({ textData }) => textData)

  return (
    <section className='vakansii__container'>
      <TitleH1>Вакансии</TitleH1>
      {allVacancy.map((vacancy) => (
        <Vacancy key={vacancy.id} items={vacancy} />
      ))}
    </section>
  )
}

export default Vakansii
