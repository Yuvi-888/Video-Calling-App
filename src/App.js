import React from 'react'
import css from './App.css'
import Home from './components/Home'
import Room from './components/Room'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {

  return (
  <>
<BrowserRouter>
<Navbar/>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/room/:roomID' element={<Room/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}











