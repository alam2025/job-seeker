import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AppliedJob from './components/AppliedJob';
import Blog from './components/Blog';
import Statistics from './components/Statistics';
import ErrorPage from './components/ErrorPage';
import { loadData } from './components/utilities/dataLoader';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    errorElement: <ErrorPage />,
    children :[
      {
        path:'/',
        element:<Home></Home>,
        loader : loadData,
      },
      {
        path : 'applied-job',
        element : <AppliedJob/>
      },
      {
        path :'blog',
        element : <Blog />
      },
      {
        path: 'statistics',
        element: <Statistics />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
