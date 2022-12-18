import {React,useState} from 'react';
import { Link,useNavigate } from "react-router-dom";
import insta_logo_img from "./insta_logo.png";
import camera_icon from "./camera_icon.png";
import './form.css';
import axios from "axios";
function Form(){
    const current= new Date();
    const navigate = useNavigate();
    const up_date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    const[post,setPost]=useState({name:"",location:"",likes:"0",description:"",PostImage:"",date:""});
    const [image,setImage]=useState('');
    const handlesubmit= async (e)=>{
        e.preventDefault();
        setPost({...post,date:up_date})
        const data= new FormData();
        data.append("file",image);
        data.append("upload_preset","clouders");
        data.append("cloud_name","dtaa0npi3");
        await fetch("https://api.cloudinary.com/v1_1/dtaa0npi3/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            const newpost={
                name:post.name,
                location:post.location,
                likes:post.likes,
                description:post.description,
                PostImage:data.url,
                date:up_date
            }
             axios.post('https://instabe.onrender.com/posts',newpost)
            
            })
        .catch(err=>console.log(err))
            navigate("/post")
      }
    return(
        <>
         <div className="main-header">
                <Link to={"/"}><img src={insta_logo_img} alt="logo" className="insta_logo"></img></Link>
                <span className="tag">Instaclone</span>
                <Link to={"/form"}><img src={camera_icon} alt="icon" className="cam_logo"></img></Link>
         </div>
        <form>
            <section>
                <input type="file" id="myfile" name="myfile" onChange={(event)=>{setImage(event.target.files[0])}}/>
                <input type="text"  id='author' placeholder='Author' onChange={(event)=>{setPost({...post,name:event.target.value})}}/>
                <input type="text"  id="location" placeholder='Location' onChange={(event)=>{setPost({...post,location:event.target.value})}}/>
                <input type="text" id="description" placeholder='Description' onChange={(event)=>{setPost({...post,description:event.target.value})}}/>
                <button id="btn" onClick={handlesubmit}>Post</button>
            </section>
           
        </form>
        </>
    )
}

export default Form

