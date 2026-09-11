import React, { useState } from 'react'
import './Sidebar.css'
import assets from '../../assets/assets'
import { Link, useLocation  } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  return (
    <div className='siderbar-items-container'>
        <Link to="/" className={location.pathname==="/"?"active":""}>
            <img src={assets.add_icon} />
            <span>Add Items</span>
        </Link>
        <Link to="/listItem" className={location.pathname==="/listItem"?"active":""}>
            <img src={assets.order_icon} />
            <span>List Items</span>
        </Link>
        <Link to="/orders" className={location.pathname==="/orders"?"active":""}>
            <img src={assets.order_icon} />
            <span>Orders</span>
        </Link>
    </div>
  )
}

export default Sidebar
