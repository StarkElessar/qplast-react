import { Link } from 'react-router-dom'

import s from './index.module.scss'

const Item = ({ icon, text, path, link }) => {
  return (
    <div className={s.wrapper}>
      <span className={s.icon}>{icon}</span>
      {path ? (
        <Link to={path} className={s.link}>
          {text}
        </Link>
      ) : link ? (
        <a href={link} className={s.link}>
          {text}
        </a>
      ) : (
        <span className={s.text}>{text}</span>
      )}
    </div>
  )
}

export default Item
