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
import { categoryLoad, jobsLoader } from './components/utilities/dataLoader';
import JobDetails from './components/JobDetails';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    errorElement: <ErrorPage />,
    loader: ()=>fetch('jobs.json'),
    children :[
      
      {
        path:'/',
        element:<Home></Home>,
       
        
      },
      
      
      {
        path : 'applied-job',
        element : <AppliedJob/>,
        
      },
      {
        path :'blog',
        element : <Blog />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path : 'job-details/:id',
        element: <JobDetails/> ,
       
        
      },
     
    ]
  },
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
