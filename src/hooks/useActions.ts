import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as BurgerMenuActionCreators from 'store/actions/burgerMenu'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(BurgerMenuActionCreators, dispatch)
}