import { SET_VISIBLE_MENU, SET_CLOSE_MENU } from '../../utils/constsActionTypes'
import {
  ABOUT_ROUTE,
  CATALOG_ROUTE,
  CONTACTS_ROUTE,
  DLYA_ALYUMINIEVYH_KONSTRUKCI_ROUTE,
  DLYA_DEREVYANNYH_OKON_ROUTE,
  DLYA_IZGOTOVLENIYA_MEBELI_ROUTE,
  DLYA_MEZHKOMNATNYH_DVEREJ_ROUTE,
  DLYA_NATYAZHNYH_POTOLKOV_ROUTE,
  DLYA_OKON_PVC_ROUTE,
  DLYA_STEKLA_I_POLIKARBONA_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  PROFIL_PVC_ROUTE,
  SHIPPING_PAYMENT_ROUTE,
  SPREADERS_FOR_LED_ROUTE,
  UNCATEGORIZED_ROUTE,
  UPLOTNITELI_ROUTE,
} from '../../utils/constsPath'

const initialState = {
  isVisible: false,
  linkItems: [
    { id: '1', label: 'Главная', path: HOME_ROUTE },
    {
      id: '2',
      label: 'Каталог продукции',
      path: CATALOG_ROUTE,
      icon: true,
      subList: [
        {
          id: '2-1',
          label: 'Уплотнители',
          path: UPLOTNITELI_ROUTE,
          icon: true,
          subList: [
            {
              id: '2-1-1',
              label: 'Комплектующие для натяжных потолков',
              path: DLYA_NATYAZHNYH_POTOLKOV_ROUTE,
            },
            {
              id: '2-1-2',
              label: 'Уплотнители для алюминиевых конструкций',
              path: DLYA_ALYUMINIEVYH_KONSTRUKCI_ROUTE,
            },
            {
              id: '2-1-3',
              label: 'Уплотнители для изготовления мебели',
              path: DLYA_IZGOTOVLENIYA_MEBELI_ROUTE,
            },
            {
              id: '2-1-4',
              label: 'Уплотнители для межкомнатных дверей',
              path: DLYA_MEZHKOMNATNYH_DVEREJ_ROUTE,
            },
            {
              id: '2-1-5',
              label: 'Уплотнители для окон ПВХ',
              path: DLYA_OKON_PVC_ROUTE,
            },
            {
              id: '2-1-6',
              label: 'Уплотнители для деревянных окон',
              path: DLYA_DEREVYANNYH_OKON_ROUTE,
            },
            {
              id: '2-1-7',
              label: 'Уплотнители для стекла и поликарбоната',
              path: DLYA_STEKLA_I_POLIKARBONA_ROUTE,
            },
            {
              id: '2-1-8',
              label: 'Прочие уплотнители',
              path: UNCATEGORIZED_ROUTE,
            },
          ],
        },
        {
          id: '2-2',
          label: 'Рассеиватели для Led светильников',
          path: SPREADERS_FOR_LED_ROUTE,
        },
        { id: '2-3', label: 'Профили ПВХ', path: PROFIL_PVC_ROUTE },
      ],
    },
    { id: '3', label: 'Доставка и оплата', path: SHIPPING_PAYMENT_ROUTE },
    { id: '4', label: 'Новости', path: NEWS_ROUTE },
    { id: '5', label: 'О компании', path: ABOUT_ROUTE },
    { id: '6', label: 'Контакты', path: CONTACTS_ROUTE },
  ],
}

export const burgerMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBLE_MENU:
      return {
        ...state,
        isVisible: true,
      }
    case SET_CLOSE_MENU:
      return {
        ...state,
        isVisible: false,
      }
    default:
      return state
  }
}
