import { IFooterState } from 'types/footerTypes'
import { RouteVariables } from 'types/routesTypes'

const initialState: IFooterState = {
  productCatalog: [
    {
      id: 1,
      label: 'Рассеиватели для светодиодной ленты',
      path: RouteVariables.SPREADERS_FOR_LED_ROUTE(),
    },
    { id: 2, label: 'Уплотнители для окон ПВХ', path: RouteVariables.DLYA_OKON_PVC_ROUTE() },
    {
      id: 3,
      label: 'Уплотнители для деревянных окон',
      path: RouteVariables.DLYA_DEREVYANNYH_OKON_ROUTE(),
    },
    {
      id: 4,
      label: 'Уплотнители для межкомнатных дверей',
      path: RouteVariables.DLYA_MEZHKOMNATNYH_DVEREJ_ROUTE(),
    },
    {
      id: 5,
      label: 'Уплотнители для алюминиевых конструкций',
      path: RouteVariables.DLYA_ALYUMINIEVYH_KONSTRUKCI_ROUTE(),
    },
    {
      id: 6,
      label: 'Уплотнители для стекла и поликарбоната',
      path: RouteVariables.DLYA_STEKLA_I_POLIKARBONA_ROUTE(),
    },
    {
      id: 7,
      label: 'Уплотнители для изготовления мебели',
      path: RouteVariables.DLYA_IZGOTOVLENIYA_MEBELI_ROUTE(),
    },
    { id: 8, label: 'Прочие уплотнители', path: RouteVariables.UNCATEGORIZED_ROUTE() },
    {
      id: 9,
      label: 'Комплектующие для натяжных потолков',
      path: RouteVariables.DLYA_NATYAZHNYH_POTOLKOV_ROUTE(),
    },
    { id: 10, label: 'Профили ПВХ', path: RouteVariables.PROFIL_PVC_ROUTE() },
  ],
  info: [
    { id: 1, label: 'О компании', path: RouteVariables.ABOUT_ROUTE() },
    { id: 2, label: 'Вакансии', path: RouteVariables.VAKANSII_ROUTE() },
    { id: 3, label: 'Доставка и оплата', path: RouteVariables.SHIPPING_PAYMENT_ROUTE() },
    { id: 4, label: 'Новости', path: RouteVariables.NEWS_ROUTE() },
    { id: 5, label: 'Статьи', path: RouteVariables.ARTICLES_ROUTE() },
    { id: 6, label: 'Пользовательское соглашение', path: RouteVariables.SOGLASHENIE_ROUTE() },
    { id: 7, label: 'Политика конфиденциальности', path: RouteVariables.PRIVACY_POLICY_ROUTE() },
    { id: 8, label: 'Контактная информация', path: RouteVariables.CONTACTS_ROUTE() },
  ],
}

export const footerReducer = (state = initialState): IFooterState => state
