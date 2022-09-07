import styles from './index.module.scss'

export const TitleH1 = ({children}) => {
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  )
}