import React, { memo, useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchPanel = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [minWindow, setMinWindow] = useState(false)

  const onVisibleSearch = () => {
    if (minWindow) {
      setIsVisible(!isVisible)
    } else {
      return
    }
  }

  const checkWidthWindow = () => window.innerWidth <= 1024 ? setMinWindow(true) : setMinWindow(false)
    
  useEffect(() => {
    window.addEventListener('resize', checkWidthWindow)

    return () => {
      window.addEventListener('resize', checkWidthWindow)
    }
  }, [minWindow])



  return (
    <div className="nav-menu__search">
      <input
        className={`nav-menu__search-input ${isVisible ? 'active' : ''}`}
        type="text"
        placeholder='Поиск по сайту'
      />
      <AiOutlineSearch
        onClick={onVisibleSearch}
        className='nav-menu__search-icon'
      />
    </div>
  )
}

export default memo(SearchPanel)