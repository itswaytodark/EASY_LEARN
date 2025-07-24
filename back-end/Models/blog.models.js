import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({

    image: {type:String, },
    title: {type:String, required:true, unique:true},
    description: {type:String, required:true},
    link: {type:String, required:true, default:''},
    details: {type:String, required:true},
    
})

const blogModel = mongoose.model('blog' , blogSchema)

export default blogModel