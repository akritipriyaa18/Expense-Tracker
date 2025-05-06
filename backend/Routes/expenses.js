import express from 'express'
import Expense from '../Schema/expense.js'
import {authMiddleware} from "../MiddleWare/auth.js"

const Router = express.Router()

//Create Expenses
Router.post("/expenses", authMiddleware, async(req, res) => {
    try{
        const {title, amount, category, date} = req.body
        const newExpense = new Expense({title, amount, category, date})
        await newExpense.save()
        res.status(201).json(newExpense)
    }catch(error){
        res.status(400).json({error : error.message})
    }
})

//Get All Expenses
Router.get("/", authMiddleware, async(req, res) => {
    try{
        const expenses = await Expense.find()
        res.status(200).json(expenses)
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

//Delete an Expense
Router.delete("/:id", authMiddleware, async(req, res) => {
    try{
        await Expense.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Expense Deleted"})
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

export default Router

