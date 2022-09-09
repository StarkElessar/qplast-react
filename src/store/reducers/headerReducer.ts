import { IHeaderState } from 'types/headerTypes'
import { RouteVariables } from 'types/routesTypes'

const initialState: IHeaderState = {
  menuLinkList: [
    { id: 1, label: 'Главная', route: RouteVariables.HOME_ROUTE() },
    {
      id: 2,
      label: 'Каталог продукции',
      route: RouteVariables.CATALOG_ROUTE(),
    },
    {
      id: 3,
      label: 'Доставка и оплата',
      route: RouteVariables.SHIPPING_PAYMENT_ROUTE(),
    },
    { id: 4, label: 'Новости', route: RouteVariables.NEWS_ROUTE() },
    { id: 5, label: 'О компании', route: RouteVariables.ABOUT_ROUTE() },
    { id: 6, label: 'Контакты', route: RouteVariables.CONTACTS_ROUTE() },
  ],
}

export const headerReducer = (state = initialState): IHeaderState => state
