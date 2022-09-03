import ScrollToTop from '@src/utils/ScrollToTop'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Transition } from 'react-transition-group'

import AppRouter from './components/AppRouter'
import BurgerMenu from './components/BurgerMenu'

const App = () => {
  const isVisibleBurgerMenu = useSelector(({ burgerMenu }) => burgerMenu.isVisible)

  return (
    <BrowserRouter>
      <ScrollToTop>
        <AppRouter />
        <Transition in={isVisibleBurgerMenu} timeout={350}>
          {(stateClasses) => <BurgerMenu classTransition={stateClasses} />}
        </Transition>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default memo(App)
