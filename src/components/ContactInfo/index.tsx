import { FC } from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import styles from './index.module.scss'

type ContactInfoProps = {
  isMobile?: boolean
  isBurger?: boolean
  isFooter?: boolean
}

const ContactInfo: FC<ContactInfoProps> = ({ isMobile, isBurger, isFooter }) => {
  const wrapperStyle = isMobile
    ? `${styles.wrapper} ${styles.mobile}`
    : isBurger
    ? `${styles.wrapper} ${styles.burger}`
    : isFooter
    ? `${styles.wrapper} ${styles.footer}`
    : styles.wrapper

  return (
    <div className={wrapperStyle}>
      <a className={styles.link} href='tel:+375293529362'>
        <span className={styles.icon}>A1</span>
        <span className={styles.text}>+375 29 352 93 62</span>
      </a>
      <a className={styles.link} href='tel:+375295750465'>
        <span className={styles.icon}>MTS</span>
        <span className={styles.text}>+375 29 575 04 65</span>
      </a>
      <a className={styles.link} href='mailto:qplast@tut.by'>
        <span className={styles.icon}>
          <AiOutlineMail />
        </span>
        <span className={styles.text}>qplast@tut.by</span>
      </a>
    </div>
  )
}

export default ContactInfo
