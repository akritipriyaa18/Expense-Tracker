import React, { useEffect } from 'react'
import { useState } from 'react'

const TotalBalance = () => {
    
    const [savedExpenses, setSavedExpenses] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0)

    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        const validExpenses = storedExpenses.filter(expense => expense && expense.category);
        const total = validExpenses.reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0)
        setTotalBalance(total)
        setSavedExpenses(validExpenses);
    },[])

  return (
    <div>
       <h1>Total Spent: Rs{totalBalance.toFixed(2)}</h1> 
       {savedExpenses > 5000 ? (
       <h2>You're broke!!</h2> 
       ) : totalBalance > 3000 ? (
        <h2>Careful, sending too much!!</h2>
       ) : (
        <h2>Nice! Keep Saving</h2>
       )
        }
    </div>
  )
}

export default TotalBalance