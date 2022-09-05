import React from 'react'
import { Transition } from 'react-transition-group'
import { useSelector } from 'react-redux'
import BurgerMenu from './components/BurgerMenu'

const AnimatedBurgerMenu = () => {
  const isVisibleBurgerMenu = useSelector(({ burgerMenu }) => burgerMenu.isVisible)

  return (
    <Transition in={isVisibleBurgerMenu} timeout={350}>
      {(stateClasses) => <BurgerMenu classTransition={stateClasses} />}
    </Transition>
  )
}

export default AnimatedBurgerMenu
