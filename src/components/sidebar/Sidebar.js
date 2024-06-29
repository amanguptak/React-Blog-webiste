import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async()=>{
       const res = await axios.get("http://localhost:5000/api/cat")
       setCats(res.data)
      
       
    }
    getCats()
  },[])

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">
            About ME
        </span>
        <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/dbd90d92461abcfcb3c34c899ec76bf102b38f07/big-dd9725aabbc0ac027cf90eb223f21db4.jpg" alt="" />
        <p>
        “Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation."
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">
            Categories
      </span>
      <ul className="sidebarList">
        {
          cats.map((c,key=c._id)=>(
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem" key={key}>{c.name}</li>
            </Link>
            
          ))
        }
        
        
       
      </ul>

      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className=" sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-discord"></i>
        </div>
      </div>
    </div>
  )
}
