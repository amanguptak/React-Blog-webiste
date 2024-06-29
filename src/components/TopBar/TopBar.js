import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./topbar.css"

export default function TopBar() {
  const {user,dispatch}= useContext(Context)
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
  }
  const PF = "http://localhost:5000/images/"
  return (
    <div className="top">
        <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-discord"></i>
        </div>
        <div className="topCenter">
          <ul className="toplist">
            <li className="topListItem"><Link to="/" className="link">Home</Link></li>
            <li className="topListItem"><Link to="/" className="link">About</Link></li>
            <li className="topListItem"><Link to="/" className="link">Contact</Link></li>
            <li className="topListItem"><Link to="/write" className="link">Write</Link></li>
            <li className="topListItem"><Link to="/" className="link"onClick={handleLogout}>{user && "LogOut" }</Link></li>
          </ul>
        </div>
        <div className="topRight">
          {
            user?(<Link to="/settings"> <img src={PF + user.profilePic} alt="" className="topImg"/></Link>)
            :(<ul className="toplist">
              <li className="topListItem">
              <Link className="link" to='/login'>LOGIN</Link></li>
              <li className="topListItem"><Link className="link" to='/register'>Register</Link></li>

              
            
            </ul>)
          }
          
         
        </div>
    </div>
  )
}
