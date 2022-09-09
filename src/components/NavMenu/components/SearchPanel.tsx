import { ChangeEvent, FC, memo, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchPanel: FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const onVisibleSearch = (): void => setIsVisible(!isVisible)
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value)
    
  return (
    <div className='nav-menu__search'>
      <input
        className={`nav-menu__search-input ${isVisible ? 'active' : ''}`}
        type='text'
        value={searchValue}
        onChange={changeHandler}
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
