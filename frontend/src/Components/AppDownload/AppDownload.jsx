import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download-section'>
      <h1>For Better Experience Download <br/> Tomato App</h1>
      <div className='app-download-platform'>
        <img src={assets.play_store} alt='playstore' />
        <img src={assets.app_store} alt='appstore' />
      </div>
    </div>
  )
}

export default AppDownload
