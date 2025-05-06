import React, { useEffect, useState } from 'react'
import TotalBalance from '../TotalBalance/TotalBalance'

const ExpenseList = () => {

    const [savedExpenses, setSavedExpenses] = useState([])
    const [triggerReload, setTriggerReload] = useState(false)

    useEffect(() => {
        fetch("http://localhost:5173/ExpenseList")
        .then(res => res.json())
        .then(data.console.log(data))
        .catch(err => console.error("Error:" , err))
    }, [])

    useEffect(() => {
            const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || []
            const validExpenses = storedExpenses.filter(expense => expense && expense.category); // Remove null/invalid entries
            setSavedExpenses(validExpenses)

    }, [triggerReload])

    const handleDelete = (index) => {
        let storedExpenses = localStorage.getItem("expenses");

        storedExpenses = storedExpenses ? JSON.parse(storedExpenses) : [];

        // Ensure it's an array
        if (!Array.isArray(storedExpenses)) {
            console.error("Expenses data is corrupted, resetting storage.");
            storedExpenses = []; // Reset to empty array if corrupted
        }
        const updatedExpenses = storedExpenses.filter((_, i) => i != index)
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses))
        setTriggerReload((prev) => !prev)
    }

    return (
    <div>ExpenseList
        {savedExpenses.length == 0 ? (
            <p>No Expense yet. Add one!</p>
        ) : (
            <ul>
            {savedExpenses.map((expense, index) => (
                <li key={index}><strong>{expense.category || "Unknown Category"}</strong> : {expense.amount || "0"}
                <button onClick={() => handleDelete(index)} style = {{marginLeft: '10px', color: 'red'}}>
                   🗑️ Delete 
                </button>
                </li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default ExpenseList