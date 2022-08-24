import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineUnorderedList, AiFillFolder } from 'react-icons/ai'

import s from './index.module.scss'
import ContactInfo from '@components/ContactInfo'
import { NEWS_ROUTE } from '../../utils/constsPath'
import PostPreview from '../../components/PostPreview'
import { useSelector } from 'react-redux'

const News = () => {
  const { pathname } = useLocation()
  const { allNews } = useSelector(({ news }) => news)
  const articles = allNews.filter(({ category }) => category === 'articles')

  return (
    <div className='news__container'>
      <div className={s.contentWrapper}>
        <h2 className={s.title}>Новости</h2>
        <ul className={s.postsListWrapper}>
          {(pathname === '/news/posts' ? articles : allNews).map((news) => (
            <li className={s.postsItem} key={news.id}>
              <PostPreview
                id={news.id}
                img={news.img}
                title={news.title}
                postDate={news.postDate}
                postTag={news.postTag}
              />
            </li>
          ))}
        </ul>
      </div>
      <aside className={s.sideBar}>
        <h3 className={s.sideTitle}>Категории</h3>
        <ul className={s.sideList}>
          <li className={s.sideItem}>
            <Link className={s.sideLink} to={NEWS_ROUTE}>
              <span className={s.sideLinkIcon}><AiOutlineUnorderedList /></span>
              <span className={s.sideLinkText}>Все новости</span>
            </Link>
          </li>
          <li className={s.sideItem}>
            <Link className={s.sideLink} to={`${NEWS_ROUTE}/posts`}>
              <span className={s.sideLinkIcon}><AiFillFolder /></span>
              <span className={s.sideLinkText}>Статьи</span>
            </Link>
          </li>
        </ul>
        <h3 className={s.sideTitle}>Наши контакты</h3>
        <ContactInfo />
      </aside>
    </div>
  )
}

export default News