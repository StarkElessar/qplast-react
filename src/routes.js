import Home from './pages/Home'
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
  ABOUT_ROUTE,
  ARTICLES_ROUTE,
  CATALOG_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  PRIVACY_POLICY_ROUTE,
  SHIPPING_PAYMENT_ROUTE,
  SOGLASHENIE_ROUTE,
  VAKANSII_ROUTE
} from './utils/constsPath'

export const publicRoutes = [
  { path: HOME_ROUTE, Component: Home },
  { path: CATALOG_ROUTE, Component: Catalog },
  { path: SHIPPING_PAYMENT_ROUTE, Component: Shipping },
  { path: NEWS_ROUTE, Component: News },
  { path: ARTICLES_ROUTE, Component: News },
  { path: `${NEWS_ROUTE}/:id`, Component: OnePost },
  { path: ABOUT_ROUTE, Component: About },
  { path: CONTACTS_ROUTE, Component: Contacts },
  { path: SOGLASHENIE_ROUTE, Component: Soglashenie },
  { path: PRIVACY_POLICY_ROUTE, Component: PrivacyPolicy },
  { path: VAKANSII_ROUTE, Component: Vakansii },
]