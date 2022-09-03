import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu'

import Home from './pages/Home';
import Catalog from './pages/Catalog'
import Shipping from './pages/Shipping'
import News from './pages/News'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Soglashenie from './pages/Soglashenie'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Vakansii from './pages/Vakansii'
import OnePost from './components/OnePost'

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
  VAKANSII_ROUTE
} from './utils/constsPath';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Header />
      <main className="page">
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
    </Wrapper>
    <BurgerMenu />
  </BrowserRouter>
)

export default App;
