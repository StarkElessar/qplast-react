import {
  ABOUT_ROUTE,
  ARTICLES_ROUTE,
  CONTACTS_ROUTE,
  DLYA_ALYUMINIEVYH_KONSTRUKCI_ROUTE,
  DLYA_DEREVYANNYH_OKON_ROUTE,
  DLYA_IZGOTOVLENIYA_MEBELI_ROUTE,
  DLYA_MEZHKOMNATNYH_DVEREJ_ROUTE,
  DLYA_NATYAZHNYH_POTOLKOV_ROUTE,
  DLYA_OKON_PVC_ROUTE,
  DLYA_STEKLA_I_POLIKARBONA_ROUTE,
  NEWS_ROUTE,
  PRIVACY_POLICY_ROUTE,
  PROFIL_PVC_ROUTE,
  SHIPPING_PAYMENT_ROUTE,
  SOGLASHENIE_ROUTE,
  SPREADERS_FOR_LED_ROUTE,
  UNCATEGORIZED_ROUTE,
  VAKANSII_ROUTE,
} from '../../utils/constsPath'

const initialState = {
  productCatalog: [
    {
      id: 1,
      label: 'Рассеиватели для светодиодной ленты',
      path: SPREADERS_FOR_LED_ROUTE,
    },
    { id: 2, label: 'Уплотнители для окон ПВХ', path: DLYA_OKON_PVC_ROUTE },
    {
      id: 3,
      label: 'Уплотнители для деревянных окон',
      path: DLYA_DEREVYANNYH_OKON_ROUTE,
    },
    {
      id: 4,
      label: 'Уплотнители для межкомнатных дверей',
      path: DLYA_MEZHKOMNATNYH_DVEREJ_ROUTE,
    },
    {
      id: 5,
      label: 'Уплотнители для алюминиевых конструкций',
      path: DLYA_ALYUMINIEVYH_KONSTRUKCI_ROUTE,
    },
    {
      id: 6,
      label: 'Уплотнители для стекла и поликарбоната',
      path: DLYA_STEKLA_I_POLIKARBONA_ROUTE,
    },
    {
      id: 7,
      label: 'Уплотнители для изготовления мебели',
      path: DLYA_IZGOTOVLENIYA_MEBELI_ROUTE,
    },
    { id: 8, label: 'Прочие уплотнители', path: UNCATEGORIZED_ROUTE },
    {
      id: 9,
      label: 'Комплектующие для натяжных потолков',
      path: DLYA_NATYAZHNYH_POTOLKOV_ROUTE,
    },
    { id: 10, label: 'Профили ПВХ', path: PROFIL_PVC_ROUTE },
  ],
  info: [
    { id: 1, label: 'О компании', path: ABOUT_ROUTE },
    { id: 2, label: 'Вакансии', path: VAKANSII_ROUTE },
    { id: 3, label: 'Доставка и оплата', path: SHIPPING_PAYMENT_ROUTE },
    { id: 4, label: 'Новости', path: NEWS_ROUTE },
    { id: 5, label: 'Статьи', path: ARTICLES_ROUTE },
    { id: 6, label: 'Пользовательское соглашение', path: SOGLASHENIE_ROUTE },
    { id: 7, label: 'Политика конфиденциальности', path: PRIVACY_POLICY_ROUTE },
    { id: 8, label: 'Контактная информация', path: CONTACTS_ROUTE },
  ],
}

export const footerReducer = (state = initialState) => state
