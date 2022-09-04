import { useLayoutEffect } from 'react'

const useLockBodyScroll = (isVisibleBurgerMenu) => {
  useLayoutEffect(() => {
    const { body } = document
    const bodyScrollOffset = window.innerWidth - body.offsetWidth
  
    if (isVisibleBurgerMenu) {
      body.style.overflow = 'hidden'
      body.style.paddingRight = `${bodyScrollOffset}px`
    } else {
      body.style.overflow = null
      body.style.paddingRight = null
    }
  }, [isVisibleBurgerMenu])
}

export default useLockBodyScroll
