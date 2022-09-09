import { FC } from 'react'
import { IShippingList } from 'types/textDataTypes'

import style from './index.module.scss'

interface IMessageBlock {
  BackIcon: JSX.Element  
  ListIcon: JSX.Element
  textList: IShippingList[]
}

const MessageBlock: FC<IMessageBlock> = ({
  BackIcon,
  ListIcon,
  textList
}): JSX.Element => (
  <div className={style.messageBlock}>
    <span className={style.icon}>{BackIcon}</span>
    <ul className={style.list}>
      {textList.map(({id, label}) => (
        <li className={style.item} key={id}>
          {ListIcon}
          <span>{label}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default MessageBlock
