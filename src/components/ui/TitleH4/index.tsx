import { FC } from 'react'
import styles from './index.module.scss'

interface TitleH4Props {
  children: string;
}

export const TitleH4: FC<TitleH4Props> = ({ children }): JSX.Element => (
  <h4 className={styles.title}>{children}</h4>
)
