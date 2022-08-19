import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './components/AppRouter'
import BurgerMenu from './components/BurgerMenu'

const App = () => {
  const isVisibleBurgerMenu = useSelector(({ burgerMenu }) => burgerMenu.isVisible)

  return (
    <BrowserRouter>
      <AppRouter />
      {isVisibleBurgerMenu && <BurgerMenu />}
    </BrowserRouter>
  )
}

export default memo(App)
