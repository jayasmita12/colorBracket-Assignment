const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name:{type:String,required:false},
    user_id:{type:String,required:true},
    password:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})
const UserModel = mongoose.model("user",UserSchema)
module.exports=UserModel