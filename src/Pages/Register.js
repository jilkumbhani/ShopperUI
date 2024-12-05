import React, { useState } from 'react'
import "./Css/Register.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const register = async () => {
        const data = {
            name: name,
            email: email,
            password: password
        }

        if(name == "")
            {
              alert("enter name")
            }
            else if(email == "")
            {
              alert("enter email")
            }
            else if(password == "")
            {
              alert("enter password")
            }
            else{
              await axios.post("https://shopper-1-awv0.onrender.com/",data).then((res)  => {
                  console.log(res);
      
                  navigate('/')
                
                })
                setName("")
                setEmail("")
                setPassword("")
            }
          }

    return (
        <div className='register'>
            <div className="register-container">
                <h1>Register User</h1>
                <div className="register-fields">
                    <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='enter name' required />
                    <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='enter email' required />
                    <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='enter password' required />
                </div>
                <button onClick={() => register()}>Continue</button>
                <p className='register-login'>Already have an account? <Link to="/"><span>Login</span></Link></p>
                <div className="register-agree">
                    <input type='checkbox' name='' id='' />
                    <p>By continuing, i agree to thr terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Register
