import styles from './index.module.scss'

export const TitleH4 = ({children}) => {
  return (
    <h4 className={styles.title}>
      {children}
    </h4>
  )
}