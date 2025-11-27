import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../component/login'
import Browse from '../component/browse'
import Birthday from '../Temporary Component/birthday'

function Routes() {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
            // element:<Birthday/>
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
