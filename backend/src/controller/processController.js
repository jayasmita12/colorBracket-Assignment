const express = require("express")
const ProcessModel = require("../model/processModel")
const router = express.Router()


router.get("/",async(req,res)=>{
    try{
        const process =await ProcessModel.find().populate("receipe_id").lean().exec()
        return res.status(200).send({process:process})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.get("/:receipe_id",async(req,res)=>{
    try{
        const process =await ProcessModel.find({receipe_id:req.params.receipe_id}).lean().exec()
        return res.status(200).send({process:process})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.post("/",async(req,res)=>{
    try{
        const process =await ProcessModel.create(req.body)
        return res.status(201).send({process:process})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

module.exports=router