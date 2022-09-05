import React from 'react'

import s from './index.module.scss'

const MessageBlock = ({ BackIcon, ListIcon, textList, children }) => {
  return (
    <div className={s.messageBlock}>
      <BackIcon className={s.icon} />
      <ul className={s.list}>
        {textList.map((obj) => (
          <li className={s.item} key={obj.id}>
            <ListIcon />
            <span>{obj.label}</span>
          </li>
        ))}
        {children}
      </ul>
    </div>
  )
}

export default MessageBlock
