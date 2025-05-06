import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {signup} from "../../api/auth.js"
import "./SignupPage.css"


const SignupPage = () => {
    
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async(event) => {
        event.preventDefault()

        try{
            const res = await signup({name, email, password})
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

  return (
    <div className='signup-wrapper'>
        <h1 className='signup-title'>Let's start you expense journey!!</h1>
        <form onSubmit={handleSubmit} className='signup-form'>
            <label htmlFor='name' className='form-label'>name</label>
            <input id='name'
                   type='text'
                   value={name}
                   onChange={handleName}
                   placeholder='Enter your Name'
                   className='form-input'
                   required
            />
            <label htmlFor='email' className='form-label'>email</label>
            <input id='email'
                   type='text'
                   value={email}
                   onChange={handleEmail}
                   placeholder='Enter your Email'
                   className='form-input'
                   required
            />
            <label htmlFor='password' className='form-label'>password</label>
            <input id='password'
                   type='text'
                   value={password}
                   onChange={handlePassword}
                   placeholder='Enter your password'
                   className='form-input'
                   required
            />
            <button type='submit' className='signup-button'>Signup</button>
        </form>
    </div>
  )
}

export default SignupPage
