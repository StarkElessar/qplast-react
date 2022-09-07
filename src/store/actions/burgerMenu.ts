import { BurgerMenuActionTypes } from 'types/burgerMenu'

export const setVisibleMenu = () => ({
  type: BurgerMenuActionTypes.SET_VISIBLE_MENU,
  payload: true,
})
export const setCloseMenu = () => ({
  type: BurgerMenuActionTypes.SET_CLOSE_MENU,
  payload: false,
})
