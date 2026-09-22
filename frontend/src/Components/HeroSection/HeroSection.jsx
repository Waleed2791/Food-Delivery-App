import React from 'react'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-overlay-container'></div>
      <div className='hero-inner-container'>
        <h2>Order your<br/> favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default HeroSection
