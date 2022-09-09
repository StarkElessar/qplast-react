import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink } from 'react-icons/fi'

import style from './index.module.scss'
import { RouteVariables } from 'types/routesTypes'
import uplotniteliImg from 'images/home/01.png'

const SectionPromo: FC = (): JSX.Element => (
  <section className={style.wrapper}>
    <div className='promo__container'>
      <div className={style.row}>
        <div className={style.columnText}>
          <h1 className={style.title}>
            Производство уплотнителей в Минске и в других регионах Беларуси
          </h1>
          <p className={style.subTitle}>
            Изготовим любой уплотнитель по Вашим чертежам в срок от 5 дней
          </p>
          <Link className={style.link} to={RouteVariables.CATALOG_ROUTE()}>
            <FiExternalLink className={style.icon} />
            <span className={style.text}>Каталог нашей продукции</span>
          </Link>
        </div>
        <div className={style.columnImg}>
          <div className={style.wrapperImg}>
            <img src={uplotniteliImg} alt='Pack of Seals' />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SectionPromo
