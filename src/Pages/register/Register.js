import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./register.css"

export default function Register() {
  const [username , setUsername]= useState("")
  const [email , setEmail]= useState("")
  const [password , setPassword]= useState("")
  const [error,setError]= useState(false)

const handleSubmit = async (e) =>{
  e.preventDefault()
  setError(false)

try{
  const res= await axios.post("http://localhost:5000/api/auth/register",
  {
     username,
     email,
     password
 
  });
   res.data && window.location.replace("/login")
}catch(err){
setError(true);
}

}


    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." 
        onChange= {e =>{setUsername(e.target.value)}}
        
        />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." 
        onChange= {e =>{setEmail(e.target.value)}}
        />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..."
        onChange= {e =>{setPassword(e.target.value)}}
        />
        <button className="registeRButton">Register</button>
      </form>
        <button className="loginButton"><Link to='/login' className="link" type="submit">Login</Link></button>
        {error && <span><h3>Somthing went Wrong</h3></span>}
    </div>
    )
}