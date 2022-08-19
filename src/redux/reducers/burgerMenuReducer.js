import { SET_VISIBLE_MENU, SET_CLOSE_MENU } from '../../utils/constsActionTypes'

const initialState = {
  isVisible: false,
  linkItems: [
    { id: '1', label: 'Главная', path: '/', },
    {
      id: '2', label: 'Каталог продукции', path: '/catalog', icon: true, subList: [
        {
          id: '2-1', label: 'Уплотнители', path: '/catalog/uplotniteli', icon: true, subList: [
            { id: '2-1-1', label: 'Комплектующие для натяжных потолков', path: '/catalog/uplotniteli/dlya-natyajnih-potolkov', },
            { id: '2-1-2', label: 'Уплотнители для алюминиевых конструкций', path: '/catalog/uplotniteli/dlya-alyuminievyh-konstrukci', },
            { id: '2-1-3', label: 'Уплотнители для изготовления мебели', path: '/catalog/uplotniteli/dlya-mebeli', },
            { id: '2-1-4', label: 'Уплотнители для межкомнатных дверей', path: '/catalog/uplotniteli/dlya-dverei', },
            { id: '2-1-5', label: 'Уплотнители для окон ПВХ', path: '/catalog/uplotniteli/dlya-okon-pvc', },
            { id: '2-1-6', label: 'Уплотнители для деревянных окон', path: '/catalog/uplotniteli/dlya-derevyannyh-okon', },
            { id: '2-1-7', label: 'Уплотнители для стекла и поликарбоната', path: '/catalog/uplotniteli/dlya-stekla-i-polikarbona', },
            { id: '2-1-8', label: 'Прочие уплотнители', path: '/catalog/uplotniteli/uncategorized', },
          ]
        },
        { id: '2-2', label: 'Рассеиватели для Led светильников', path: '/spreaders-for-led', },
        { id: '2-3', label: 'Профили ПВХ', path: '/profil-pvc', },
      ]
    },
    { id: '3', label: 'Доставка и оплата', path: '/shipping-and-payment', },
    { id: '4', label: 'Новости', path: '/news', },
    { id: '5', label: 'О компании', path: '/about', },
    { id: '6', label: 'Контакты', path: '/contacts', },
  ]
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBLE_MENU:
      return {
        ...state,
        isVisible: true
      }
    case SET_CLOSE_MENU:
      return {
        ...state,
        isVisible: false
      }
    default:
      return state
  }
}

export default menuReducer