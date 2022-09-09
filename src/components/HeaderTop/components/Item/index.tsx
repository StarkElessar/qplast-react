import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RouteVariablesTypes } from 'types/routesTypes'

import style from './index.module.scss'

interface ItemProps {
  Icon: JSX.Element
  text: string
  path?: RouteVariablesTypes
  link?: string
}

const Item: FC<ItemProps> = ({ Icon, text, path, link }): JSX.Element => (
  <div className={style.wrapper}>
    <span className={style.icon}>{Icon}</span>
    {path ? (
      <Link to={path} className={style.link}>
        {text}
      </Link>
    ) : link ? (
      <a href={link} className={style.link}>
        {text}
      </a>
    ) : (
      <span className={style.text}>{text}</span>
    )}
  </div>
)

export default Item
