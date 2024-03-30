import mongoose  from "mongoose";

// Define Schema

const postSchema = new mongoose.Schema({

      title:{type:String, required:true,trim:true},
      body: {type:String, required:true,trim:true}
});

// compiling Schema

const Post = mongoose.models.Post || mongoose.model('Post',postSchema);

export default Post