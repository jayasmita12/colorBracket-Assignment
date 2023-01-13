
const express = require("express")
const cors = require("cors")
const dbConnect = require("./src/config/db")
const userController = require("./src/controller/userController")
const receipeController = require("./src/controller/receipeController")
const ingredientController = require("./src/controller/ingredientController")
const processcontroller = require("./src/controller/processController")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/users",userController)
app.use("/receipes",receipeController)
app.use("/ingredients",ingredientController)
app.use("/process",processcontroller)



let port = 5500;
app.listen(process.env.PORT || port ,async()=>{
    try{
        await dbConnect()
        console.log(`Server running on PORT ${port}`)
    }
    catch(err){
        console.log(err.message)
    }
})