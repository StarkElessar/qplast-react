import React from 'react'

import s from './index.module.scss'

const BenefitsGrid = ({ arrayData }) => (
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