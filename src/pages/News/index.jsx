import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineUnorderedList, AiFillFolder } from 'react-icons/ai'

import s from './index.module.scss'
import { TitleH1, TitleH3 } from 'ui'
import { PostPreview, ContactInfo } from 'components'
import { ARTICLES_ROUTE, NEWS_ROUTE } from '../../utils/constsPath'

const News = () => {
  const { pathname } = useLocation()
  const { allNews } = useSelector(({ news }) => news)
  const articles = allNews.filter(({ category }) => category === 'articles')

  return (
    <section className='news__container'>
      <div className={s.contentWrapper}>
        <TitleH1>{pathname === ARTICLES_ROUTE ? 'Статьи' : 'Новости'}</TitleH1>
        <ul className={s.postsListWrapper}>
          {(pathname === ARTICLES_ROUTE ? articles : allNews).map((news) => (
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
        <TitleH3>Категории</TitleH3>
        <ul className={s.sideList}>
          <li className={s.sideItem}>
            <Link className={s.sideLink} to={NEWS_ROUTE}>
              <span className={s.sideLinkIcon}>
                <AiOutlineUnorderedList />
              </span>
              <span className={s.sideLinkText}>Все новости</span>
            </Link>
          </li>
          <li className={s.sideItem}>
            <Link className={s.sideLink} to={ARTICLES_ROUTE}>
              <span className={s.sideLinkIcon}>
                <AiFillFolder />
              </span>
              <span className={s.sideLinkText}>Статьи</span>
            </Link>
          </li>
        </ul>
        <TitleH3>Наши контакты</TitleH3>
        <ContactInfo />
      </aside>
    </section>
  )
}

export default News
