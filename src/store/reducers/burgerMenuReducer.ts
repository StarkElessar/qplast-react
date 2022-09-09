import { BurgerMenuAction, BurgerMenuActionTypes, IBurgerMenuState } from 'types/burgerMenuTypes'
import { RouteVariables } from 'types/routesTypes'

const initialState: IBurgerMenuState = {
  isVisible: false,
  linkItems: [
    { id: '1', label: 'Главная', path: RouteVariables.HOME_ROUTE() },
    {
      id: '2',
      label: 'Каталог продукции',
      path: RouteVariables.CATALOG_ROUTE(),
      icon: true,
      subList: [
        {
          id: '2-1',
          label: 'Уплотнители',
          path: RouteVariables.UPLOTNITELI_ROUTE(),
          icon: true,
          subList: [
            {
              id: '2-1-1',
              label: 'Комплектующие для натяжных потолков',
              path: RouteVariables.DLYA_NATYAZHNYH_POTOLKOV_ROUTE(),
            },
            {
              id: '2-1-2',
              label: 'Уплотнители для алюминиевых конструкций',
              path: RouteVariables.DLYA_ALYUMINIEVYH_KONSTRUKCI_ROUTE(),
            },
            {
              id: '2-1-3',
              label: 'Уплотнители для изготовления мебели',
              path: RouteVariables.DLYA_IZGOTOVLENIYA_MEBELI_ROUTE(),
            },
            {
              id: '2-1-4',
              label: 'Уплотнители для межкомнатных дверей',
              path: RouteVariables.DLYA_MEZHKOMNATNYH_DVEREJ_ROUTE(),
            },
            {
              id: '2-1-5',
              label: 'Уплотнители для окон ПВХ',
              path: RouteVariables.DLYA_OKON_PVC_ROUTE(),
            },
            {
              id: '2-1-6',
              label: 'Уплотнители для деревянных окон',
              path: RouteVariables.DLYA_DEREVYANNYH_OKON_ROUTE(),
            },
            {
              id: '2-1-7',
              label: 'Уплотнители для стекла и поликарбоната',
              path: RouteVariables.DLYA_STEKLA_I_POLIKARBONA_ROUTE(),
            },
            {
              id: '2-1-8',
              label: 'Прочие уплотнители',
              path: RouteVariables.UNCATEGORIZED_ROUTE(),
            },
          ],
        },
        {
          id: '2-2',
          label: 'Рассеиватели для Led светильников',
          path: RouteVariables.SPREADERS_FOR_LED_ROUTE(),
        },
        { id: '2-3', label: 'Профили ПВХ', path: RouteVariables.PROFIL_PVC_ROUTE() },
      ],
    },
    {
      id: '3',
      label: 'Доставка и оплата',
      path: RouteVariables.SHIPPING_PAYMENT_ROUTE(),
    },
    { id: '4', label: 'Новости', path: RouteVariables.NEWS_ROUTE() },
    { id: '5', label: 'О компании', path: RouteVariables.ABOUT_ROUTE() },
    { id: '6', label: 'Контакты', path: RouteVariables.CONTACTS_ROUTE() },
  ],
}

export const burgerMenuReducer = (state = initialState, action: BurgerMenuAction): IBurgerMenuState => {
  switch (action.type) {
    case BurgerMenuActionTypes.SET_VISIBLE_MENU:
      return {
        ...state,
        isVisible: action.payload,
      }
    case BurgerMenuActionTypes.SET_CLOSE_MENU:
      return {
        ...state,
        isVisible: action.payload,
      }
    default:
      return state
  }
}
