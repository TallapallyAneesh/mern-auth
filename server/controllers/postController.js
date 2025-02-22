import Post from "../models/postModel.js";

export const post = async (req, res) => {
    console.log(req.body.isAdmin);
    if(!req.body.isAdmin){
        return res.status(403).json({error:"You are not authorized to post"});
    }
    if(req.body.title === "" || req.body.content === ""){
        return res.status(400).json({error:"Title and content are required"});
    }
    const slug  = req.body.title.toLowerCase().split(" ").join("-");
    const newPost = new Post({
        title:req.body.title,
        content:req.body.content,
        slug,
        postedBy:req.body._id
    });
    try {
      const savedPost=  await newPost.save();
        res.status(201).json(savedPost);
    }
    catch (error) {
        res.status(500).json({error:error.message});
    }
};