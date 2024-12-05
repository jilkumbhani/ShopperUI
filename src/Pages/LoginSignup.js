import React, { useState } from 'react'
import './Css/Loginsignup.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginSignup = ({setStatus}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate('')

  const Login = async () => {

    const data = {
      email: email,
      password: password
    }


    axios.post('https://shopper-1-awv0.onrender.com/login', data)
      .then(function (response) {

        if (response.data.status == "true") {
          setStatus(false)
          localStorage.setItem('status',false)
          navigate("/")
        }
        else if (response.data.status == "check password of admin") {
          alert("check password of admin")
        }
        else if (response.data.status == "check email of admin") {
          alert("check email of admin")
        }
        else {
          alert("already admin login")
        }
      })
    setEmail("")
    setPassword("")
  }

  return (
    <div className='loginSignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='email' placeholder='enter email' onChange={(e) => { setEmail(e.target.value) }} value={email} required/>
          <input type='password' placeholder='enter password' onChange={(e) => { setPassword(e.target.value) }} value={password} required/>
        </div>
        <button onClick={()=>Login()}>Continue</button>
        <p className='loginsignup-login'>Don't Have Account <Link to="/register"><span>Register</span></Link></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to thr terms of use & privacy policy.</p>
        </div> 
      </div>
    </div>
  )
}

export default LoginSignup
