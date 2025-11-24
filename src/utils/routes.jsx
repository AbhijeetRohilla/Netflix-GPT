import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../component/login'
import Browse from '../component/browse'

function Routes() {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element: <Browse/>
        }
    ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Routes
