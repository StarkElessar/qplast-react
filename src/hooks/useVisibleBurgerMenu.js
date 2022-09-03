import { useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseMenu } from '../redux/actions/burgerMenu'

const useVisibleBurgerMenu = () => {
  const dispatch = useDispatch()
  const burgerMenuRef = useRef()
  const isVisibleBurgerMenu = useSelector(({ burgerMenu }) => burgerMenu.isVisible)

  const onClickWrapperClose = ({ target }) => {
    target === burgerMenuRef.current && dispatch(setCloseMenu())
  }

  const onClickButtonClose = () => dispatch(setCloseMenu())

  useLayoutEffect(() => {
    const body = document.body
    const lockPaddingValue = window.innerWidth - body.offsetWidth
    const initialBodyOverflowStyle = window.getComputedStyle(body).overflow
    const initialBodyPaddingRightStyle =
      window.getComputedStyle(body).paddingRight

    if (isVisibleBurgerMenu) {
      body.style.overflow = 'hidden'
      body.style.paddingRight = `${lockPaddingValue}px`
    }

    return () => {
      body.style.overflow = initialBodyOverflowStyle
      body.style.paddingRight = initialBodyPaddingRightStyle
    }
  }, [isVisibleBurgerMenu])

  return {
    onClickWrapperClose,
    onClickButtonClose,
    burgerMenuRef,
  }
}

export default useVisibleBurgerMenu
