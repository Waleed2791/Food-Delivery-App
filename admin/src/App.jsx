import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Routes } from "react-router-dom"
import AddItem from "./Pages/AddItem/AddItem"
import ListItem from "./Pages/ListItem/ListItem"
import Orders from "./Pages/Orders/Orders"
import "./App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='flx-layout'>
        <div className='sidebar-container'>
          <Sidebar/>
        </div>
        <div className='page-content-container'>
          <Routes>
            <Route path='/' element={<AddItem />} />
            <Route path='/listItem' element={<ListItem />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
