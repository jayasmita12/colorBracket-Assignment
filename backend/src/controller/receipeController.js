const express = require("express")
const ReceipeModel = require("../model/recipesModel")
const path= require("path")
const uploads = require("../middleware/fileUpload")
const router = express.Router()


router.get("/",async(req,res)=>{
    try{
        const receipes =await ReceipeModel.find().populate({path:"creator_id",select:"user_id"}).lean().exec()
        return res.status(200).send({receipes:receipes})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.post("/", uploads.single("image_url"),async(req,res)=>{
    try{
        req.body.image_url = req.file.path
        const receipe =await ReceipeModel.create(req.body)
        return res.status(201).send({receipe:receipe})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

module.exports=router