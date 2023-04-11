import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './components/Footer';

export const jobContext = createContext([]);


function App() {
  const jobs = useLoaderData()
 

  return (
    <div >
      <jobContext.Provider value={jobs} >
       
          <Header />
          <Outlet />
          <Footer/>
       

      </jobContext.Provider>
    </div>
  )
}

export default App
