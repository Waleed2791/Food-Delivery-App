import React, { useEffect, useState } from 'react'
import './AuthModal.css'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'

const AuthModal = ({hideAuthModal}) => {
  const [form, setform] = useState('Login');
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    policy_check: false,
  })
  const FormInputHandler = (event) => {
    const field = event.target.name;
    setdata((prev)=>({...prev, [field]: event.target.type === "checkbox" ? event.target.checked : event.target.value}))
  }
  const AuthSubmission = async (event) => {
    event.preventDefault();

    const name = data.name;
    const email = data.email;
    const password = data.password;

    if (form==='Login') {
      if (!email || !password) {
        toast.error("All fields are required!")
        return
      }

      if (!data.policy_check) {
        toast.error("Please accept the terms and privacy policy");
        return;
      }


      try {

        const response = await axios.post("http://localhost:4000/api/users/login", {email, password})
        console.log(response.data);
        
      } catch (error) {

        console.log(error);
        toast.error(
            error.response?.data?.message ||
            "Something went wrong"
        );

      }


    }

    if (form==='Sign-up') {
      if (!name || !email || !password) {
        toast.error("All fields are required!")
        return
      }

      if (!data.policy_check) {
        toast.error("Please accept the terms and privacy policy");
        return;
      }


      try {

        const response = await axios.post("http://localhost:4000/api/users/add", {name, email, password})
        console.log(response.data);
        
      } catch (error) {

        console.log(error);
        toast.error(
            error.response?.data?.message ||
            "Something went wrong"
        );

      }


    }

  }
  

  return (
    <div className='auth-outer-container'>
      <div className='auth-overlay-container'></div>
      <form className='authentication-form' onSubmit={(event)=>AuthSubmission(event)}>
        <div className='auth-header-container'>
            <h1>{form==='Sign-up'?'Sign Up':'Login'}</h1>
            <img src={assets.cross_icon} alt='close' onClick={()=>hideAuthModal(false)} />
        </div>
        <div className='authentication-input-container'>
            {form==='Sign-up'?<input type="text" name="name" placeholder='Your name' value={data.name} onChange={(event)=>FormInputHandler(event)} />:<></>}
            <input type='email' name="email" placeholder='Your email' value={data.email} onChange={(event)=>FormInputHandler(event)} />
            <input type='password' name="password" placeholder='Password' value={data.password} onChange={(event)=>FormInputHandler(event)} />
        </div>
        <div className='auth-submission-container'>
            <button>{form==='Sign-up'?'Create account':'Login'}</button>
        </div>
        <div className='auth-policy-check'>
            <input type='checkbox' name="policy_check" checked={data.policy_check} onChange={(event)=>FormInputHandler(event)} />
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
