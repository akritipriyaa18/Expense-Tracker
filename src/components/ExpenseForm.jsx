import React, { useState, useEffect } from "react"
import Dropdown from "./Dropdown/Dropdown"
import DropdownItem from "./DropdownItems/DropdownItem"
import ExpenseList from "./ExpenseList/ExpenseList"

const ExpenseTracker = () => {
    const [expense, setExpense] = useState("")
    const [category, setSelectedCategory] = useState("Select Category")
    const [isExpanded, setIsExpanded] = useState(false)
    

    const items = ["Starbucks Overdose ☕", "Retail Therapy 🛍️", "Foodie Adventures 🍕", "Useless Subscriptions 📺 ", "Random Splurges 💸"]

    useEffect(() => {
        console.log("Selected category:", category); // Debugging
    }, [category])

    const handleExpense = (event) => {
        setExpense(event.target.value.trim())
    }

    const handleSelectedCategory = (selectedCategory) => {
        setSelectedCategory(selectedCategory)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(category === "Select Category")
            {
                alert("Please select where you wasted your money 😭")
                return
            }

        const regex = /[^0-9]/g
        if(regex.test(expense))
        {
            alert("Are you stupid????, Enter a valid numeric expense 😡")
            return
        }

            const newExpense = {category: category.trim(), amount: expense.trim()}

            console.log(newExpense)

            const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || []
            const updatedExpenses = [...storedExpenses, newExpense]
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses))
                
            setExpense("")
            setSelectedCategory("Select Category")
            setIsExpanded(false)
            setTriggerReload((prev) => !prev)
    }

    return (
    <div>
        <h3>Save because thinking too much might make you reconsider</h3>
        <div className= "expense-tile"  onClick={() => setIsExpanded(true)}>
            {!isExpanded ? (
                <span>➕ Add Expense</span>
            ) : ( 
           <div className="expense-content">
           <form onSubmit={handleSubmit} className="form-container">
            <Dropdown buttonText={category} content={items} onSelect={handleSelectedCategory}></Dropdown>
            <input type="text"
                   value={expense}
                   onChange={handleExpense}>
            </input>
            <button type="submit">Submit</button>
            </form>
            </div>
           )}
        </div>
    <div>
</div>
</div>

)}

export default ExpenseTracker