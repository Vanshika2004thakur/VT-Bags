import React from "react"
import NavBar from './components/NavBar/NavBar'
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomPage/HomePage"
import Cart from './components/cart/cart'
import Footer from'./components/footer/footer'
const App=()=>{
  return(
    <div><NavBar />
    <Routes>
      <Route path ='/' element={<HomePage />} />
      <Route path='/cart' element={<Cart />}  />
      </Routes>
      <Footer />
      </div>
  )
}

export default App