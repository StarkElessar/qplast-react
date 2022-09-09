import { FC } from 'react'
import { IAboutBenefitsGrid } from 'types/textDataTypes'
import style from './index.module.scss'

interface BenefitsGridProps {
  arrayData: IAboutBenefitsGrid[]
}

const BenefitsGrid: FC<BenefitsGridProps> = ({ arrayData }): JSX.Element => (
  <div className={style.wrapper}>
    {arrayData.map(({ id, IconTag, label, description }) => (
      <article className={style.card} key={id}>
        <IconTag className={style.icon} />
        <h4 className={style.title}>{label}</h4>
        <p className={style.text}>{description}</p>
      </article>
    ))}
  </div>
)

export default BenefitsGrid
