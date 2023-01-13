const  mongoose = require("mongoose")
const ProcessSchema = new mongoose.Schema({
    step:{type:String,required:true},
    receipe_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"receipe",
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})
const ProcessModel = mongoose.model("process",ProcessSchema)
module.exports=ProcessModel