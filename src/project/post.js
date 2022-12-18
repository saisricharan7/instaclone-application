import React from "react";
import { useEffect,useState} from "react";
import "./post.css";
import insta_logo_img from "./insta_logo.png";
import camera_icon from "./camera_icon.png"
import like from "./like_logo.png";
import share from "./share_logo.png"
import { Link } from "react-router-dom";
// import axios from "axios";
// import Form from "./form";
// import { BrowserRouter,Routes, Route} from 'react-router-dom';
function Post(){
    const [data,setData]=useState([
        // {
        // name:'',
        // location:'',
        // likes:'',
        // description:'',
        // PostImage:'',
        // date:''
        // }
    ]);
    const all_posts=[];
    useEffect( ()=>{
         fetch("https://instabe.onrender.com/posts")
        .then(res=>res.json())
        .then(data=>{setData(data)
             })
        .catch((err)=>{
            console.log(err)
        })
       
    // axios.get("/posts").then(res=>res.json()).then(data=>setData(data))
    // }
     } ,[])
     let k=0;
     for(let i=data.length-1;i>=0;i--){
        all_posts[k]=data[i];
        k++
     }
  
    return(
        <>
            <div className="main-header">
                <Link to={"/"}><img src={insta_logo_img} alt="logo" className="insta_logo"></img></Link>
                <span className="tag">Instaclone</span>
                <Link to={"/form"}><img src={camera_icon} alt="icon" className="cam_logo"></img></Link>
            </div>
            <div className="all_posts">
                {all_posts.map((udata)=>{
                    return(
                        <section className="post">
                            <section className="post_header">
                                <div className="first_line"><strong>{udata.name}</strong><span className="dots"><strong>...</strong></span></div>
                                <div className="second_line"><p>{udata.location}</p></div>
                            </section>
                            <section className="post_img">
                                <img src={udata.PostImage} alt={udata.name} style={{width:'100%',height:'80vh'}}></img>
                            </section>
                            <section className="footer">
                                <img className="like_icon"  src={like} alt="like" style={{width:'50px',height:'30px',padding:'5px'}}></img>
                                <img className="share_icon" src={share} alt="share" style={{width:'50px',height:'30px',padding:'5px'}}></img>
                                <span className="date" >{udata.date}</span>
                                <div className="likes" ><p>{udata.likes} likes</p></div>
                                <div className="desc"><strong>{udata.description}</strong></div>
                            </section>
                        </section>
                    )
                })}
                  </div>
        </>
    )
}
 export default Post