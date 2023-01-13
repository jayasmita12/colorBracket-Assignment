const mongoose = require("mongoose")
const dbConnect=()=>{
    return mongoose.connect("mongodb+srv://jayasmita:sahu1234@cluster0.eklndmm.mongodb.net/test")
}
module.exports = dbConnect
