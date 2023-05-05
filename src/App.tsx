import { Children, useLayoutEffect, useState } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Layout } from './pages/layout';
import { Login } from './pages/login';
import { Map } from './pages/map';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/map',
        element: <Map />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
