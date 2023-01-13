const express = require("express")
const IngredientModel = require("../model/ingredientsModel")
const router = express.Router()


router.get("/",async(req,res)=>{
    try{
        const ingredients =await IngredientModel.find().populate("receipe_id").lean().exec()
        return res.status(200).send({ingredients:ingredients})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
router.get("/:receipe_id",async(req,res)=>{
    try{
        const ingredient =await IngredientModel.find({receipe_id:req.params.receipe_id})
        .populate({path:"receipe_id",populate:({path:"creator_id", select:{"password":0}})})
       .lean().exec()
        return res.status(200).send({ingredient:ingredient})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.post("/", async(req,res)=>{
    try{
        const ingredient =await IngredientModel.create(req.body)
        return res.status(201).send({ingredient:ingredient})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

module.exports=router