const express = require("express");
const router= express.Router();
const Post = require("./model");

router.route("/create").post((req,res)=>{
    const name= req.body.name;
    const location=req.body.location;
    const likes=req.body.likes;
    const description=req.body.description;
    const PostImage= req.body.PostImage;
    const date=req.body.date;
    const newpost = new Post({
        name,
        location,
        likes,
        description,
        PostImage,
        date
    });
    newpost.save();
});

router.route("/posts").get( async (req,res)=>{
   await Post.find()
    .then((data)=>res.json(data))
});


module.exports= router;


// let user=await Blog.find({topic:search})
// res.json({status:'success',result:user})