import mongoose from "mongoose";
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },  
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    coverImage: {
        type: String,
        default: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
    },
    category: {
        type:String,
        default: "General",
    },
}, { timestamps: true });
const Post = mongoose.model("Post", postSchema);
export default Post;