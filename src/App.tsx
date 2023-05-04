import { Children, useLayoutEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/layout';
import { Login } from './pages/login';
import { Chat } from './pages/chat';
import { Map } from './pages/map';

const router = createBrowserRouter([
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
