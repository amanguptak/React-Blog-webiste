import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';
import './login.css'

export default function Login() {
const userRef= useRef();
const passwordRef= useRef();
const [flag,setFlag]=useState(false)
const {dispatch,isFetching} = useContext(Context)
const handleSubmit =async(e)=>{
  e.preventDefault();
  dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("http://localhost:5000/api/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value

      });
      dispatch({type:"LOGIN_SUCCESS", payload:res.data})
    }catch(err){
        dispatch({type:"LOGIN_FAILURE"})
        setFlag(true)
        
    }
}


  return (
    <div className="login">
      <span className="loginTitle">Login</span>
        <form className="loginform" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="loginInput" placeholder="Enter your username address"
            ref={userRef}
            
            />
            <label>password</label>
            <input type="password" className="loginInput" placeholder="Enter your password"
            ref={passwordRef}
            />
            <button className="logiNButton" type="submit" disabled={isFetching} >Login</button>
            { flag &&
                (<span style={{color:"red"}}><h3>Invalid Data</h3></span>)
                }
            </form>
       
        <button className="registerButton"><Link to='/register' className="link">Register</Link></button>
    
              
    </div>

  )
}
