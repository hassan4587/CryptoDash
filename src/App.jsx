import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Coin from './pages/coins/Coin'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App