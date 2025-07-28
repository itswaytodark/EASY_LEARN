import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({

    image: {type:String },

    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    
    title: {type:String, required:true, unique:true},
    description: {type:String, required:true},
    link: {type:String, required:true, default:''},
    details: {type:String, required:true},
    
})

const blogModel = mongoose.model('Blog' , blogSchema)

export default blogModel