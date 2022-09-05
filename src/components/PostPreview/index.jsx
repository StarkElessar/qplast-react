import React from 'react'
import { Link } from 'react-router-dom'
import { AiTwotoneCalendar, AiFillTags } from 'react-icons/ai'
import { BiCommentDots } from 'react-icons/bi'

import s from './index.module.scss'
import { NEWS_ROUTE } from '../../utils/constsPath'

const PostPreview = ({ id, img, title, postDate, postTag }) => {
  return (
    <article className={s.post}>
      <Link to={`${NEWS_ROUTE}/${id}`} className={s.postImg}>
        <img src={img} alt={title} />
      </Link>
      <div className={s.postText}>
        <h4 className={s.postTitle}>
          <Link to={`${NEWS_ROUTE}/${id}`}>{title}</Link>
        </h4>
        <ul className={s.postMeta}>
          <li className={s.metaItem}>
            <span className={s.metaIcon}>
              <AiTwotoneCalendar />
            </span>
            <span className={s.metaText}>{postDate}</span>
          </li>
          <li className={s.metaItem}>
            <span className={s.metaIcon}>
              <AiFillTags />
            </span>
            <span className={s.metaText}>{postTag}</span>
          </li>
          <li className={s.metaItem}>
            <span className={s.metaIcon}>
              <BiCommentDots />
            </span>
            <span className={s.metaText}>Комментарии</span>
          </li>
        </ul>
        <Link to={`${NEWS_ROUTE}/${id}`} className={s.postButton}>
          Подробнее
        </Link>
      </div>
    </article>
  )
}

export default PostPreview
