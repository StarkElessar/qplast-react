import { RouteVariablesTypes } from './routesTypes'

export interface ILink {
  id: number
  label: string
  path: RouteVariablesTypes
}

export interface IFooterState {
  productCatalog: ILink[]
  info: ILink[]
}
