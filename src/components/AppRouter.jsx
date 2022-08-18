import React, { memo } from 'react'
import { Routes, Route } from 'react-router-dom'

import { publicRoutes } from '../routes'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Routes>
          {
            publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} exact />
            ))
          }
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default memo(AppRouter)