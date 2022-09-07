import styles from './index.module.scss'

export const TitleH3 = ({children}) => {
  return (
    <h3 className={styles.title}>
      {children}
    </h3>
  )
}