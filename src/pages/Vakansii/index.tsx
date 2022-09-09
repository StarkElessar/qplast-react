import { FC } from 'react'
import Vacancy from 'components/Vacancy'

import { TitleH1 } from 'ui'
import { useTypedSelector } from 'hooks'

const Vakansii: FC = (): JSX.Element => {
  const { allVacancy } = useTypedSelector(({ textData }) => textData)

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
