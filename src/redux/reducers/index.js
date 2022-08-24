import { combineReducers } from 'redux'

import burgerMenuReducer from './burgerMenuReducer'
import footerReducer from './footerReducer'
import newsReducer from './newsReducer'
import textDataReducer from './textDataReducer'

const rootReducer = combineReducers({
  burgerMenu: burgerMenuReducer,
  footer: footerReducer,
  textData: textDataReducer,
  news: newsReducer
})

export default rootReducer