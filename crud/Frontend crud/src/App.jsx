import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'
import { Router,Routes,Route } from 'react-router-dom'
import Create from './components/Create'
import Update from './components/update'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Table/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>

    </Routes>


    </>
  )
}

export default App
