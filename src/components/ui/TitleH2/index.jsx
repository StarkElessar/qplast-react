import styles from './index.module.scss'

export const TitleH2 = ({children}) => {
  return (
    <h2 className={styles.title}>
      {children}
    </h2>
  )
}