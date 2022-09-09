import { FC } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'

import { RouteVariables } from './types/routesTypes'
import { Wrapper, Header, Footer, BurgerMenu } from 'components'
import {
  OnePost,
  Home,
  Catalog,
  Shipping,
  News,
  About,
  Contacts,
  Soglashenie,
  PrivacyPolicy,
  Vakansii,
} from './pages'

const App: FC = (): JSX.Element => (
  <HashRouter>
    <Wrapper>
      <Header />
      <main className='page'>
        <Routes>
          <Route path={RouteVariables.HOME_ROUTE()} element={<Home />} />
          <Route path={RouteVariables.CATALOG_ROUTE()} element={<Catalog />} />
          <Route path={RouteVariables.SHIPPING_PAYMENT_ROUTE()} element={<Shipping />} />
          <Route path={RouteVariables.NEWS_ROUTE()} element={<News />} />
          <Route path={RouteVariables.ARTICLES_ROUTE()} element={<News />} />
          <Route path={RouteVariables.ONE_POST_ROUTE()} element={<OnePost />} />
          <Route path={RouteVariables.ABOUT_ROUTE()} element={<About />} />
          <Route path={RouteVariables.CONTACTS_ROUTE()} element={<Contacts />} />
          <Route path={RouteVariables.SOGLASHENIE_ROUTE()} element={<Soglashenie />} />
          <Route path={RouteVariables.PRIVACY_POLICY_ROUTE()} element={<PrivacyPolicy />} />
          <Route path={RouteVariables.VAKANSII_ROUTE()} element={<Vakansii />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <BurgerMenu />
    </Wrapper>
  </HashRouter>
)

export default App
