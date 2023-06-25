import React, { lazy, Fragment } from 'react'
import { Route } from 'react-router-dom'

export const renderRoutes = () => {
  return routes.map((route, index) => {
    const Component = route.element || Fragment
    const Layout = route.layout || Fragment
    return <Route path={route.path}
      element={
        <Layout>
          <Component />
        </Layout>
      }
      key={index}
    />
  })
}

export const routes = [
  {
    path: '/',
    element: lazy(async() => await import('../pages/Dashboard')),
    layout: lazy(async() => await import('../layouts/MainLayout'))
  },
  {
    path: '/login',
    element: lazy(async() => await import('../pages/Login'))
  }
]