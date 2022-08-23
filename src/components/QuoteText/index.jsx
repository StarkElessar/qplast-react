import React from 'react'

import s from './index.module.scss'

const QuoteText = ({children}) => {
  return (
    <div className={s.wrapper}>
      <span className={s.divider}></span>
      <p className={s.text}>
        {children}
      </p>
    </div>
  )
}

export default QuoteText