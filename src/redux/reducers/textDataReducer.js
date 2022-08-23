import { BiLike } from 'react-icons/bi'
import { FaRegUser, FaShippingFast } from 'react-icons/fa'
import { MdPriceCheck, MdCreditScore } from 'react-icons/md'
import { RiSecurePaymentFill } from 'react-icons/ri'

const initialState = {
  shippingList: [
    { id: 1, label: 'наличный расчет;' },
    { id: 2, label: 'безналичный расчет.' },
  ],
  calculationList: [
    { id: 1, label: 'самовывоз розничной или оптовой продукции со склада;' },
    { id: 2, label: 'возможна доставка оптовой продукции по всей Беларуси и странам Европейского союза.' },
  ],
  aboutProductImages: [
    { id: 1, img: require('../../assets/images/about/01.jpg') },
    { id: 2, img: require('../../assets/images/about/02.jpg') },
    { id: 3, img: require('../../assets/images/about/03.jpg') },
    { id: 4, img: require('../../assets/images/about/04.jpg') },
    { id: 5, img: require('../../assets/images/about/05.jpg') },
    { id: 6, img: require('../../assets/images/about/06.jpg') },
    { id: 7, img: require('../../assets/images/about/07.jpg') },
    { id: 8, img: require('../../assets/images/about/08.jpg') },
    { id: 9, img: require('../../assets/images/about/09.jpg') },
    { id: 10, img: require('../../assets/images/about/10.jpg') },
    { id: 11, img: require('../../assets/images/about/11.jpg') },
    { id: 12, img: require('../../assets/images/about/12.jpg') },
    { id: 13, img: require('../../assets/images/about/13.jpg') },
    { id: 14, img: require('../../assets/images/about/14.jpg') },
    { id: 15, img: require('../../assets/images/about/15.jpg') },
    { id: 16, img: require('../../assets/images/about/16.jpg') },
  ],
  aboutBenefitsGrid: [
    {
      id: 1,
      IconTag: BiLike,
      label: 'Гарантия 10 лет',
      description: 'Cответствие изделий заданным характеристикам за счет испытаний в лаборатории'
    },
    {
      id: 2,
      IconTag: FaRegUser,
      label: 'Квалифицированные специалисты',
      description: 'Специалисты с опытом работы более 20 лет в производстве изделий из пластмасс и уплотнителей'
    },
    {
      id: 3,
      IconTag: FaShippingFast,
      label: 'Доставка',
      description: 'Доставка оптовой продукции по Беларуси и странам Европейского союза'
    },
    {
      id: 4,
      IconTag: MdPriceCheck,
      label: 'Низкие цены',
      description: 'Мы имеем низкие цены благодаря полному циклу производства'
    },
    {
      id: 5,
      IconTag: RiSecurePaymentFill,
      label: 'Удобная оплата',
      description: 'Мы принимаем, как наличный так и безналичный расчет'
    },
    {
      id: 6,
      IconTag: MdCreditScore,
      label: 'Отсрочка платежа',
      description: 'Для постоянных покупателей мы предусмотрели отсрочку платежа'
    },
  ]
}

const textDataReducer = (state = initialState) => state

export default textDataReducer