import { FC } from 'react'
import { Transition } from 'react-transition-group'
import BurgerMenu from './components/BurgerMenu'
import { useTypedSelector } from 'hooks/useTypedSelector'

const AnimatedBurgerMenu: FC = (): JSX.Element => {
  const isVisibleBurgerMenu = useTypedSelector(({burgerMenu}) => burgerMenu.isVisible)

  return (
    <Transition in={isVisibleBurgerMenu} timeout={350}>
      {(stateClasses) => <BurgerMenu classTransition={stateClasses} />}
    </Transition>
  )
}

export default AnimatedBurgerMenu
