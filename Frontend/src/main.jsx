import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Hero from './component/Hero.jsx';
import Login from './component/Login.jsx';
import Main from './component/Main.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/main',
        element:<Main/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

