import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList/ExpenseList'
import TotalBalance from './components/TotalBalance/TotalBalance'
import Login from "./components/LoginPage/Login"
import SignupPage from './components/SignUpPage/SignupPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<SignupPage/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ExpenseForm" element={<ExpenseForm/>} />
        <Route path="/ExpenseList" element={<ExpenseList/>} />
        <Route path="/TotalBalance" element={<TotalBalance/>}/>
      </Routes>
      </Router>
  )
}

export default App
