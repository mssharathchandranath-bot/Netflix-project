import React, { useState } from 'react'

import { Form, Link, useNavigate } from 'react-router-dom';
import "./Login.css"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [Errors, setErrors] = useState({

    email: "",
    password: "",

  })

  const navigate=useNavigate();
  const onSubmitForm = e => {
  e.preventDefault() // stops page refresh
  console.log("E-mail:", email, "Password:", password)
  navigate('/home') // route path, NOT file name

}

  return (
    <div className='main'>
      <div className='body'>
        <form onSubmit={onSubmitForm}>

          <h1>Login</h1>

          <div className='email'>
            <label>E-mail:</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>

          </div>

          <div>
            <label>Password:</label>
            <input type='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>

          <br/>

          <div className='btn'>
            
              <input className='Loginn' type='submit' value="Login" />
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login