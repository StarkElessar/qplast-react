import { FC } from 'react'
import styles from './index.module.scss'

interface TitleH2Props {
  children: string
}

export const TitleH2: FC<TitleH2Props> = ({ children }): JSX.Element => (
  <h2 className={styles.title}>{children}</h2>
)