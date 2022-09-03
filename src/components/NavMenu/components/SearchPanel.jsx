import { memo, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchPanel = () => {
  const [isVisible, setIsVisible] = useState(false)

  const onVisibleSearch = () => setIsVisible(!isVisible)

  return (
    <div className='nav-menu__search'>
      <input
        className={`nav-menu__search-input ${isVisible ? 'active' : ''}`}
        type='text'
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
