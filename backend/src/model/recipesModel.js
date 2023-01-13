const  mongoose = require("mongoose")
const ReceipeSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    desc:{type:String,required:true},
    image_url:{type:String,required:true},
    creator_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})
const ReceipeModel = mongoose.model("receipe",ReceipeSchema)
module.exports=ReceipeModel