import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'

import s from './index.module.scss'

const ContactInfo = ({ isMobile, isBurger }) => {
  const wrapperStyle = isMobile
    ? `${s.wrapper} ${s.mobile}`
    : isBurger
      ? `${s.wrapper} ${s.burger}`
      : s.wrapper

  return (
    <div className={wrapperStyle}>
      <a className={s.link} href="tel:+375293529362">
        <span className={s.icon}>A1</span>
        <span className={s.text}>+375 29 352 93 62</span>
      </a>
      <a className={s.link} href="tel:+375295750465">
        <span className={s.icon}>MTS</span>
        <span className={s.text}>+375 29 575 04 65</span>
      </a>
      <a className={s.link} href="mailto:qplast@tut.by">
        <span className={s.icon}><AiOutlineMail/></span>
        <span className={s.text}>qplast@tut.by</span>
      </a>
    </div>
  )
}

export default ContactInfo