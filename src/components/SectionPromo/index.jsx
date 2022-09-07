import React from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink } from 'react-icons/fi'

import s from './index.module.scss'
import { CATALOG_ROUTE } from 'src/utils/constsPath'
import uplotniteliImg from 'img/home/01.png'

const SectionPromo = () => {
  return (
    <section className={s.wrapper}>
      <div className='promo__container'>
        <div className={s.row}>
          <div className={s.columnText}>
            <h1 className={s.title}>
              Производство уплотнителей в Минске и в других регионах Беларуси
            </h1>
            <p className={s.subTitle}>
              Изготовим любой уплотнитель по Вашим чертежам в срок от 5 дней
            </p>
            <Link className={s.link} to={CATALOG_ROUTE}>
              <FiExternalLink className={s.icon} />
              <span className={s.text}>Каталог нашей продукции</span>
            </Link>
          </div>
          <div className={s.columnImg}>
            <div className={s.wrapperImg}>
              <img src={uplotniteliImg} alt='Pack of Seals' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionPromo
