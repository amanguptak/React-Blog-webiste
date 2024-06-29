import React from "react";
import { Link} from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/"
  
  return (
    <div className="post">
      
       {post.photos && <img className="postImg" src={PF+post.photos} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name} </span>
          ))}
          {/* {console.log(post)} */}
        </div>

        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle"> {post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.des}</p>
    </div>
  );
}
