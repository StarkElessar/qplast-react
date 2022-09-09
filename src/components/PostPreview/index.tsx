import { FC } from 'react'
import { Link } from 'react-router-dom'
import { AiTwotoneCalendar, AiFillTags } from 'react-icons/ai'
import { BiCommentDots } from 'react-icons/bi'

import style from './index.module.scss'
import { RouteVariables } from 'types/routesTypes'

interface PostPreviewProps {
  id: number
  img: string
  title: string
  postDate: string
  postTag: string
}

const PostPreview: FC<PostPreviewProps> = ({ id, img, title, postDate, postTag }): JSX.Element => {
  return (
    <article className={style.post}>
      <Link to={`${RouteVariables.NEWS_ROUTE()}/${id}`} className={style.postImg}>
        <img src={img} alt={title} />
      </Link>
      <div className={style.postText}>
        <h4 className={style.postTitle}>
          <Link to={`${RouteVariables.NEWS_ROUTE()}/${id}`}>{title}</Link>
        </h4>
        <ul className={style.postMeta}>
          <li className={style.metaItem}>
            <span className={style.metaIcon}>
              <AiTwotoneCalendar />
            </span>
            <span className={style.metaText}>{postDate}</span>
          </li>
          <li className={style.metaItem}>
            <span className={style.metaIcon}>
              <AiFillTags />
            </span>
            <span className={style.metaText}>{postTag}</span>
          </li>
          <li className={style.metaItem}>
            <span className={style.metaIcon}>
              <BiCommentDots />
            </span>
            <span className={style.metaText}>Комментарии</span>
          </li>
        </ul>
        <Link to={`${RouteVariables.NEWS_ROUTE()}/${id}`} className={style.postButton}>
          Подробнее
        </Link>
      </div>
    </article>
  )
}

export default PostPreview
