import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineUnorderedList, AiFillFolder } from 'react-icons/ai'

import style from './index.module.scss'
import { useTypedSelector } from 'hooks'
import { RouteVariables } from 'types/routesTypes'
import { TitleH1, TitleH3 } from 'ui'
import { PostPreview, ContactInfo } from 'components'

const News: FC = (): JSX.Element => {
  const { pathname } = useLocation() as { pathname: string }
  const { allNews } = useTypedSelector(({ news }) => news)
  const articles = allNews.filter(({ category }) => category === 'articles')

  return (
    <section className='news__container'>
      <div className={style.contentWrapper}>
        <TitleH1>
          {pathname === RouteVariables.ARTICLES_ROUTE() ? 'Статьи' : 'Новости'}
        </TitleH1>
        <ul className={style.postsListWrapper}>
          {(pathname === RouteVariables.ARTICLES_ROUTE()
            ? articles
            : allNews
          ).map((news) => (
            <li className={style.postsItem} key={news.id}>
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
      <aside className={style.sideBar}>
        <TitleH3>Категории</TitleH3>
        <ul className={style.sideList}>
          <li className={style.sideItem}>
            <Link className={style.sideLink} to={RouteVariables.NEWS_ROUTE()}>
              <span className={style.sideLinkIcon}>
                <AiOutlineUnorderedList />
              </span>
              <span className={style.sideLinkText}>Все новости</span>
            </Link>
          </li>
          <li className={style.sideItem}>
            <Link
              className={style.sideLink}
              to={RouteVariables.ARTICLES_ROUTE()}
            >
              <span className={style.sideLinkIcon}>
                <AiFillFolder />
              </span>
              <span className={style.sideLinkText}>Статьи</span>
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
