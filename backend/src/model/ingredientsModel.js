const  mongoose = require("mongoose")
const IngredientSchema = new mongoose.Schema({
    items:{type:String,required:true},
    amount:{type:Number,required:true},
    unit:{type:String,required:true},
    receipe_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"receipe",
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})
const IngredientModel = mongoose.model("ingredient",IngredientSchema)
module.exports=IngredientModel