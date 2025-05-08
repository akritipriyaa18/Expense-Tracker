import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import {login} from "../../api/auth.js"

const Login = () => {

  const [email, setEmail]= useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try{
      const res = await login({email, password})
      const token = res.data.token

      localStorage.setItem("token", token)
      navigate("/Home")
    }
    catch(err){
      alert(err.response?.data?.message || "Something went wrong")
    }

    setEmail("")
    setPassword("")

  }

  const navigateToSigup = () => {
    navigate("/Signup")
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md relative'>
      <h1 classname='text-3xl font-semibold text-center mb-6'>Spendora</h1>
        <form onSubmit={handleSubmit} className='login-form'>
          <label htmlFor='email' className='form-label'>email</label>
          <input id= "email"
                 type='text'
                 value={email}
                 onChange={handleEmail}
                 placeholder='Your Email Id'
                 className='form-input'
                 required
          />
          <label htmlFor='password' className='form-label'>password</label>
          <input id='password'
                 type='text'
                 value={password}
                 onChange={handlePassword}
                 placeholder='don’t use ‘1234’ pls 🙃'
                 className='form-input'
                 required
          ></input>
          <button type='submit' className='login-button'>log me in, I'm ready to cry 💸</button>
          <button type='button' className='signup-button' onClick={navigateToSigup}>No account, signup</button>
        </form>
    </div>
    </div>
  )
}

export default Login