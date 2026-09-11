import React, { useState } from 'react'
import './AuthModal.css'
import { assets } from '../../assets/assets'

const AuthModal = ({hideAuthModal}) => {
  const [form, setform] = useState('Login');
  return (
    <div className='auth-outer-container'>
      <div className='auth-overlay-container'></div>
      <form className='authentication-form'>
        <div className='auth-header-container'>
            <h1>{form==='Sign-up'?'Sign Up':'Login'}</h1>
            <img src={assets.cross_icon} alt='close' onClick={()=>hideAuthModal(false)} />
        </div>
        <div className='authentication-input-container'>
            {form==='Sign-up'?<input type="text" placeholder='Your name' required />:<></>}
            <input type='email' placeholder='Your email' required />
            <input type='password' placeholder='Password' required />
        </div>
        <div className='auth-submission-container'>
            <button>{form==='Sign-up'?'Create account':'Login'}</button>
        </div>
        <div className='auth-policy-check'>
            <input type='checkbox' required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <div className='form-switcher-container'>
            {form==='Sign-up'?<p>Alreay have an account? <span onClick={()=>setform('Login')}>Login.</span></p>:<p>Create a new account? <span onClick={()=>setform('Sign-up')}>Click Here.</span></p>}            
        </div>
      </form>
    </div>
  )
}

export default AuthModal
