import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/navbar'
import Home from './Pages/Home/home'
import Footer from './Components/Footer/Footer'
import AuthModal from './Components/AuthModal/AuthModal'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Orders from './Pages/Orders/Orders';

function App() {
  const [ShowAuthModal, setShowAuthModal] = useState(false);
  return (
    <>
    {ShowAuthModal?<AuthModal hideAuthModal={setShowAuthModal} ></AuthModal>:<></>}
    <div className='app'>
      <Navbar ShowAuthModal={setShowAuthModal} ></Navbar>
        <div className='app-content-loader'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/PlaceOrder" element={<PlaceOrder/>} />
            <Route path="/my-orders" element={<Orders/>} />
          </Routes>
        </div>
        <Footer></Footer>
    </div>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App