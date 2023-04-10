import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet, useLoaderData } from 'react-router-dom'

export const jobContext = createContext([]);

function App() {
  const jobs = useLoaderData();

  return (
    <div >
      <jobContext.Provider value={jobs} >
        <Header />
        <Outlet />
      </jobContext.Provider>
    </div>
  )
}

export default App
