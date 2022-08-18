import { combineReducers } from 'redux'

import burgerMenuReducer from './burgerMenuReducer'

const rootReducer = combineReducers({
  burgerMenu: burgerMenuReducer
})

export default rootReducer