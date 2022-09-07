import { FC } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import './about-swiper.scss'

import styles from './index.module.scss'
import { QuoteText, BenefitsGrid, ContactInfo } from 'components'
import { TitleH1, TitleH3 } from 'ui'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const About: FC = (): JSX.Element => {
  const {aboutProductImages, aboutBenefitsGrid} = useTypedSelector(({textData}) => textData)

  const sliderBreakpoints = {
    0: { slidesPerView: 1, spaceBetween: 30 },
    465: { slidesPerView: 2, spaceBetween: 30 },
    865: { slidesPerView: 3, spaceBetween: 30 },
  }
  return (
    <section className='about__container'>
      <TitleH1>О компании</TitleH1>
      <QuoteText>
        Наша компания работает на рынке производства изделий из пластмасс и
        уплотнителей с 2017 года. Она была образована двумя целеустремлёнными
        инженерами, которые благодаря своим знаниям, упорству, терпению,
        энтузиазму смогли не только удержаться на рынке производства, но смогли
        расширить собственное производство и увеличить численность коллектива до
        десяти человек.
      </QuoteText>
      <p style={{ marginTop: 20 }} className={styles.article}>
        На сегодняшний день <b>ООО «КЮ Пласт Тех»</b> занимается производством
        уплотнителей, гибких экранов для Led освещения, профилей из ПВХ.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={true}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        className={styles.swiperWrapper}
        breakpoints={sliderBreakpoints}
      >
        {aboutProductImages.map(({ id, img }) => (
          <SwiperSlide className={styles.slide} key={id}>
            <div className={styles.imgBlock}>
              <img className={styles.img} src={img} alt='Slide' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className={styles.article}>
        В месяц компания выпускает <b>до 167 000 м.п.</b> разнообразных
        уплотнителей. Наши изделия используются в автомобилях, холодильниках,
        торговом оборудовании и в домашнем интерьере.
      </p>
      <p className={styles.article}>
        У нас Вы сможете заказать свой уплотнитель на самых выгодных условиях.
        Наша компания ориентирована на оптовых покупателей. Минимальная партия
        оптового заказа уплотнителя — <b>от 100 м.п.</b> У нас Вы сможете купить
        уплотнители по самым доступным ценам. Чтобы узнать цену на резиновые
        уплотнители и стать нашим клиентом, Вам достаточно будет набрать нам по
        телефонам или написать на электронную почту, и мы обязательно Вам
        перезвоним. Доставим уплотнители оптом в любую точку Беларуси и стран
        Европейского союза.
      </p>
      <QuoteText>
        Мы разработаем и изготовим необходимое Вам изделие от пяти календарных
        дней!
      </QuoteText>
      <p style={{ marginTop: 20 }} className={styles.article}>
        Выбирая нас, наши клиенты получают качественные уплотнители, технология
        которых постоянно совершенствуется путем внедрения научного подхода,
        инноваций и применения самых высоких стандартов производства. При
        изготовлении уплотнителей наша компания использует проверенные временем
        материалы (PVC elastomer; SBS; SEBS; TPE) от надежных европейских
        производителей и высокотехнологичное оборудование ведущих мировых марок.
        Вся наша продукция изготавливается по <b>ТУ BY 692151319.001-2020</b>.
      </p>
      <p className={styles.article}>
        Наша цель – быть лучшим производителем и поставщиком качественных
        уплотнителей, профилей ПВХ и гибких экранов для Led освещения для Вас —
        наших Клиентов.
      </p>
      <p className={styles.article} style={{ marginBottom: 0 }}>
        Каждому нашему покупателю мы предоставим консультацию по выбору или
        изготовлению нужного изделия. Звоните!
      </p>
      <BenefitsGrid arrayData={aboutBenefitsGrid} />

      <TitleH3>Контактная информация:</TitleH3>
      <ContactInfo />
    </section>
  )
}

export default About
