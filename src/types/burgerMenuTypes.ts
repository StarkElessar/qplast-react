import { RouteVariablesTypes } from "./routesTypes"

export interface ILinkItems {
  id: string
  label: string
  icon?: boolean
  path: RouteVariablesTypes
  subList?: ILinkItems[]
}

export interface IBurgerMenuState {
  isVisible: boolean
  linkItems: ILinkItems[]
}

export enum BurgerMenuActionTypes {
  SET_VISIBLE_MENU = 'SET_VISIBLE_MENU',
  SET_CLOSE_MENU = 'SET_CLOSE_MENU'
}

interface SetVisibleMenuAction {
  type: BurgerMenuActionTypes.SET_VISIBLE_MENU
  payload: boolean
}
interface SetCloseMenuAction {
  type: BurgerMenuActionTypes.SET_CLOSE_MENU
  payload: boolean
}

export type BurgerMenuAction =
  | SetVisibleMenuAction
  | SetCloseMenuAction