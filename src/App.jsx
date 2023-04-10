import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet, useLoaderData } from 'react-router-dom'

function App() {
  const jobs= useLoaderData();
  console.log(jobs);

  return (
    <div >
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
