import React ,{useState,useEffect}  from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import { useLocation } from 'react-router-dom'
export default function Home() {
  const [posts , setPosts]= useState([]);
  const {search} = useLocation()
  useEffect(()=>{
      const fetchPosts =  async ()=>{
        const res = await axios.get("http://localhost:5000/api/posts"+search)
        setPosts(res.data)
        // console.log(res)

      }
      fetchPosts()
  },[search])
  return (
    <>
      <Header/>
      <div  className="home">
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
  )
}
