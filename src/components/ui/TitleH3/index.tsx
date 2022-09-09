import { FC } from 'react'
import styles from './index.module.scss'

interface TitleH3Props {
  children: string
}

export const TitleH3: FC<TitleH3Props> = ({ children }): JSX.Element => (
  <h3 className={styles.title}>{children}</h3>
)