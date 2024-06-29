import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams,Link} from 'react-router-dom'
import { Context } from '../../context/Context'
import './singlepost.css'

export default function SinglePost() {
 const {postId}= useParams()
 const [post ,setPost] = useState({})
 const {user}= useContext(Context)
 const [title, setTitle] = useState("");
 const [des, setdes] = useState("");
 const [updateMode, setUpdateMode] = useState(false);
 const PF = "http://localhost:5000/images/"

 useEffect(()=>{
  
  const getPost =  async() =>{
       const res = await axios.get("http://localhost:5000/api/posts/"+postId)
       
       setPost(res.data)
       setTitle(res.data.title)
       setdes(res.data.des)
  }
 getPost()

 },[postId])

 const handleDelete = async ()=>{
   await axios.delete(`http://localhost:5000/api/posts/${postId}`,
   {data:{
    username:user.username
   }})
   window.location.replace("/")
 }
 const handleUpdate = async () => {
  try {
    await axios.put(`http://localhost:5000/api/posts/${postId}`, {
      username: user.username,
      title,
      des,
    });
    setUpdateMode(false)
    
  } catch (err) {}
};

return (
  <div className="singlePost">
    <div className="singlePostWrapper">
      {post.photos && (
        <img src={PF + post.photos} alt="" className="singlePostImg" />
      )}
      {updateMode ? (
        <input
          type="text"
          value={title}
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <h1 className="singlePostTitle">
          {title}
          {post.username === user.username && (
            <div className="singlePostEdit">
              <i
                className="singlePostIcon far fa-edit"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>
      )}
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:
          <Link to={`/?user=${post.username}`} className="link">
            <b> {post.username}</b>
          </Link>
        </span>
        <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      {updateMode ? (
        <textarea
          className="singlePostDescInput"
          value={des}
          onChange={(e) => setdes(e.target.value)}
        />
      ) : (
        <p className="singlePostDesc">{des}</p>
      )}
      {updateMode && (
        <button className="singlePostButton" onClick={handleUpdate}>
          Update
        </button>
      )}
    </div>
  </div>
);
}