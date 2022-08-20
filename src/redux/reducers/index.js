import { combineReducers } from 'redux'

import burgerMenuReducer from './burgerMenuReducer'
import footerReducer from './footerReducer'
import textDataReducer from './textDataReducer'

const rootReducer = combineReducers({
  burgerMenu: burgerMenuReducer,
  footer: footerReducer,
  textData: textDataReducer
})

export default rootReducer