const express = require("express")
const { body, validationResult } = require('express-validator');
const UserModel = require("../model/userModel")
const router = express.Router()


router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find().lean().exec()
        return res.status(200).send({ users: users })
    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
})

router.post("/",
    body("user_id").custom(async (value) => {
        const user = await UserModel.findOne({ user_id: value })
        if (user) {
            throw new Error("user_id already exist")
        }
        return true
    }),
    body("password").isLength({min:8}).custom((value)=>{
        if(Boolean(value.match(/[A-Z]/))=== false){
            throw new Error("Password must contain atleast one capital letter")
        }
        else if(value.length < 8){
            throw new Error("password length minimum 8 character")
        }
        return true
    }),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const user = await UserModel.create(req.body)
            return res.status(201).send({ user: user })
        }
        catch (err) {
            return res.status(500).send({ message: err.message })
        }
    })

module.exports = router