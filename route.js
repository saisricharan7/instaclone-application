const express = require("express");
const router= express.Router();
const Post = require("./model");

router.route("/posts").post(async (req,res)=>{
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
    try{
        let user= await Post.insertMany(newpost)
        res.json({status:"success",result:user})
    }
    catch(e){
        res.json({status:"failed",result:e.message})
    }

});

router.route("/posts").get( async (req,res)=>{
   await Post.find()
    .then((data)=>res.json(data))
});


module.exports= router;


