import { combineReducers } from 'redux'

import burgerMenuReducer from './burgerMenuReducer'
import footerReducer from './footerReducer'

const rootReducer = combineReducers({
  burgerMenu: burgerMenuReducer,
  footer: footerReducer
})

export default rootReducer