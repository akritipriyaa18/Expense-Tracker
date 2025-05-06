import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../Schema/User.js"

const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

//SignUp Route
router.post("/signup", async(req, res) => {
    const {name, email, password} = req.body

    try{
        let user = await User.findOne({email})
        if(user)
            return res.status(400).json({message: "User already exists"})

        const hashedPassword = await bcrypt.hash(password, 10)

        user = new User({name, email, password: hashedPassword})
        await user.save()

        const token = jwt.sign({userId: user._id}, JWT_SECRET)

        res.status(201).json({message : "User created successfully!!"})

    }catch(error){
        res.status(500).json({message: "Server Error"})
    }
})


//login route
router.post("/login", async (req, res) => {
     const {email, password} = req.body

     try{
        let user = await User.findOne({email})
        if(!user)
            return res.status(400).json({message: "Invalid Email!!"})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch)
            return res.status(400).json({message: "Invalid Password!!"})

        const token = jwt.sign({userId:user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1h"})

        res.json(token)
     }catch(error){
        res.status(500).json({message: "Server Error"})
     }
})

export default router