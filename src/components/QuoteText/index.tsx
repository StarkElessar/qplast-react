import { FC } from 'react'

import style from './index.module.scss'

interface QuoteTextProps {
  children: string
}

const QuoteText: FC<QuoteTextProps> = ({ children }): JSX.Element => (
  <div className={style.wrapper}>
    <span className={style.divider}></span>
    <p className={style.text}>{children}</p>
  </div>
)

export default QuoteText
