import {FC, Fragment} from 'react'
import SectionPromo from 'components/SectionPromo'

interface HomeProps {}

const Home: FC<HomeProps> = (): JSX.Element => {
  return (
    <Fragment>
      <SectionPromo/>
    </Fragment>
  )
}

export default Home