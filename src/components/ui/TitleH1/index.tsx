import { FC } from 'react'
import styles from './index.module.scss'

interface TitleH1Props {
  children: string
}

export const TitleH1: FC<TitleH1Props> = ({ children }): JSX.Element => (
  <h1 className={styles.title}>{children}</h1>
)
