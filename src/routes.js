import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Shipping from './pages/Shipping'
import News from './pages/News'
import About from './pages/About'
import Contacts from './pages/Contacts'

import {
  ABOUT_ROUTE,
  CATALOG_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  SHIPPING_PAYMENT_ROUTE
} from './utils/constsPath'

export const publicRoutes = [
  { path: HOME_ROUTE, Component: Home },
  { path: CATALOG_ROUTE, Component: Catalog },
  { path: SHIPPING_PAYMENT_ROUTE, Component: Shipping },
  { path: NEWS_ROUTE, Component: News },
  { path: ABOUT_ROUTE, Component: About },
  { path: CONTACTS_ROUTE, Component: Contacts },
]