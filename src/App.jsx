import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Wrapper, Header, Footer, BurgerMenu } from './components'

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
  Vakansii
} from './pages'

import {
  HOME_ROUTE,
  CATALOG_ROUTE,
  SHIPPING_PAYMENT_ROUTE,
  NEWS_ROUTE,
  ARTICLES_ROUTE,
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  SOGLASHENIE_ROUTE,
  PRIVACY_POLICY_ROUTE,
  VAKANSII_ROUTE,
} from './utils/constsPath'

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Header />
      <main className='page'>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} exact />
          <Route path={CATALOG_ROUTE} element={<Catalog />} exact />
          <Route path={SHIPPING_PAYMENT_ROUTE} element={<Shipping />} exact />
          <Route path={NEWS_ROUTE} element={<News />} exact />
          <Route path={ARTICLES_ROUTE} element={<News />} exact />
          <Route path={`${NEWS_ROUTE}/:id`} element={<OnePost />} exact />
          <Route path={ABOUT_ROUTE} element={<About />} exact />
          <Route path={CONTACTS_ROUTE} element={<Contacts />} exact />
          <Route path={SOGLASHENIE_ROUTE} element={<Soglashenie />} exact />
          <Route path={PRIVACY_POLICY_ROUTE} element={<PrivacyPolicy />} exact />
          <Route path={VAKANSII_ROUTE} element={<Vakansii />} exact />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <BurgerMenu />
    </Wrapper>
  </BrowserRouter>
)

export default App
