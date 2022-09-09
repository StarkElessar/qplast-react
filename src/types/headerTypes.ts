import { RouteVariablesTypes } from './routesTypes'

export interface IMenuLinkList {
  id: number
  label: string
  route: RouteVariablesTypes
}

export interface IHeaderState {
  menuLinkList: IMenuLinkList[]
}
