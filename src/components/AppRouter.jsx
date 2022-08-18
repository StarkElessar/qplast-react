import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { publicRoutes } from '../routes'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        {
          publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))
        }
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default AppRouter