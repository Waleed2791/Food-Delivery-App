import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-outer-container' id='footer-section'>
        <div className='footer-container'>
            <div className='footer-left-container'>
                <img src={assets.logo} />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.</p>
                <div className='social-icons'>
                    <img src={assets.facebook_icon} alt='facebook' />
                    <img src={assets.twitter_icon} alt='twiter' />
                    <img src={assets.linkedin_icon} alt='linkedin' />
                </div>
            </div>
            <div className='footer-right-container'>
                <div className='company-container'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='get-in-touch-container'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright-text">
            <p>Copyright 2024 Tomato.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
