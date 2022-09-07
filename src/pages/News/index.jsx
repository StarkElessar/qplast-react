import { Link, useLocation } from 'react-router-dom'
import { AiOutlineUnorderedList, AiFillFolder } from 'react-icons/ai'

import s from './index.module.scss'
import { TitleH1, TitleH3 } from 'ui'
import { PostPreview, ContactInfo } from 'components'
import { useTypedSelector } from 'hooks'
import { RouteVariables } from 'types/routesTypes'

const News = () => {
  const { pathname } = useLocation()
  const { allNews } = useTypedSelector(({ news }) => news)
  const articles = allNews.filter(({ category }) => category === 'articles')

  return (
    <section className='news__container'>
      <div className={s.contentWrapper}>
        <TitleH1>{pathname === RouteVariables.ARTICLES_ROUTE() ? 'Статьи' : 'Новости'}</TitleH1>
        <ul className={s.postsListWrapper}>
          {(pathname === RouteVariables.ARTICLES_ROUTE() ? articles : allNews).map((news) => (
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
            <Link className={s.sideLink} to={RouteVariables.NEWS_ROUTE()}>
              <span className={s.sideLinkIcon}>
                <AiOutlineUnorderedList />
              </span>
              <span className={s.sideLinkText}>Все новости</span>
            </Link>
          </li>
          <li className={s.sideItem}>
            <Link className={s.sideLink} to={RouteVariables.ARTICLES_ROUTE()}>
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
