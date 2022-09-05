import React from 'react'
import useScrollToTop from '../../hooks/useScrollToTop'

const Wrapper = ({ children }) => {
  useScrollToTop()

  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default Wrapper
