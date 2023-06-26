import React, { lazy, Fragment, Suspense } from 'react'
import { Outlet, Route } from 'react-router-dom'

export const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    const Component = route.element || Fragment
    const Layout = route.layout || Fragment
    return (
      <Route path={route.path}
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Layout>
              { route.children ? <Outlet/> : <Component/>}
            </Layout>
          </Suspense>
        }
        key={index}
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    )
  })
}

export const routes = [
  {
    layout: lazy(async() => await import('../layouts/MainLayout')),
    children: [
      {
        path: '/',
        element: lazy(async() => await import('../pages/Dashboard')),
      },
      {
        path: '/login',
        element: lazy(async() => await import('../pages/Login'))
      },
      {
        path: '/stock',
        element: lazy(async() => await import('../pages/Stock'))
      },
      {
        path: '*',
        element: lazy(async() => await import('../pages/Error404'))
      }
    ]
  },
]