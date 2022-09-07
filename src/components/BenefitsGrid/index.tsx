import { FC } from 'react'
import { IAboutBenefitsGrid } from 'types/textData'
import s from './index.module.scss'

interface BenefitsGridProps {
  arrayData: IAboutBenefitsGrid[]
}

const BenefitsGrid: FC<BenefitsGridProps> = ({ arrayData }): JSX.Element => (
  <div className={s.wrapper}>
    {arrayData.map(({ id, IconTag, label, description }) => (
      <article className={s.card} key={id}>
        <IconTag className={s.icon} />
        <h4 className={s.title}>{label}</h4>
        <p className={s.text}>{description}</p>
      </article>
    ))}
  </div>
)

export default BenefitsGrid
