import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../StoreContext/StoreContext'


function navbar({ShowAuthModal}) {
    const [menu, setMenu] = useState('home')
    const handleMenuClick = (menuName, sectionId) => {
        setMenu(menuName)
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
    const { TotalCartQuantity } = useContext(StoreContext)
  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <Link to='/'><img src={assets.logo} alt='logo' /></Link>
        </div>
        <div className='header-menu-container'>
            <ul>
                <Link to='/' onClick={() => handleMenuClick('home', '')} className={menu==='home'?'active':''} >Home</Link>
                <li onClick={() => handleMenuClick('menu', 'catalog-section')} className={menu==='menu'?'active':''} >Menu</li>
                <li onClick={() => handleMenuClick('mobile-app', 'app-download-section')} className={menu==='mobile-app'?'active':''} >Mobile App</li>
                <li onClick={() => handleMenuClick('contact-us', 'footer-section')} className={menu==='contact-us'?'active':''} >Contact Us</li>
            </ul>
        </div>
        <div className='header-right-container'>
            <ul>
                <li>
                    <img src={assets.search_icon} alt='search-icon' />
                </li>
                <li>
                    <Link to='/cart'>
                        <div className='basket-icon-container'>
                            <img src={assets.basket_icon} alt='add-to-cart' />
                            <div className='basket-counter'>{TotalCartQuantity()}</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <button className='auth-button' onClick={()=>ShowAuthModal(true)}>Sign In</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default navbar
