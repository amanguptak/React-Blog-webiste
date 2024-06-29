import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import './write.css'

export default function Write() {
   const {user}= useContext(Context)
   const [title , setTitle]= useState("");
   const [file , setFile]= useState("");
   const [des , setDes]= useState("");
   
   const handleSubmit = async(e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,
      des,

    };
    if(file){
      const data = new FormData();
      const filename= Date.now() + file.name
      data.append("name",filename);
      data.append("file",file)
      newPost.photos = filename;
      try{
         await axios.post("http://localhost:5000/api/upload",data)
      }catch(e){

      }
    }
    const res = await axios.post("http://localhost:5000/api/posts",
     newPost
    )
    console.log(res)
    window.location.replace("/post/" + res.data._id)
   }

  return (
    <div className="write">
      {
        file && (<img src={URL.createObjectURL(file)} className="writeImg" alt="" />)
      }
        
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                  
                <i className=" fileIcon fa-solid fa-file-circle-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} 
                onChange={(e) => setFile(e.target.files[0])}
                />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}
                 onChange={e=>setTitle(e.target.value)}
                />
            </div>
<div className="writeFormGroup">
 <textarea placeholder="Tell Your Story...." type="text" className="writeInput writeText "  onChange={e=>setDes(e.target.value)}></textarea>

</div>
<button className="writeSubmit" type="submit">Publish</button>
        </form>


    </div>
  )
}
