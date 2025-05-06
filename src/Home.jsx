import React from 'react'
import {useNavigate} from "react-router-dom"
import "./Home.css"

const Home = () => {
    const navigate = useNavigate()

  return (
    <div className = "cards">
        <div className='title'>Spend With Caution!!</div>
        <div className="card-container">
        <div 
            style={cardStyle}
            onClick={() => navigate("/ExpenseForm")} >
                ExpenseForm
        </div>
        <div 
            style={cardStyle}
            onClick={() => navigate("/ExpenseList")}>
            ExpenseList
        </div>
        <div 
            style={cardStyle}
            onClick={() => navigate("/TotalBalance")}>
            TotalBalance
        </div>
        </div> 
    </div>
  )
}

const cardStyle = {
    width: "150px",
    height: "150px",
    background: "#f3f3f3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
}

export default Home