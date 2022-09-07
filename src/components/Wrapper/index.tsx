import { FC } from 'react'
import { useScrollToTop } from 'hooks'

interface WrapperProps {
  children: JSX.Element[]
}

const Wrapper: FC<WrapperProps> = ({ children }): JSX.Element => {
  useScrollToTop()

  return <div className='wrapper'>{children}</div>
}

export default Wrapper
