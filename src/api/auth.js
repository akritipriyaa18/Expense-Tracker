import axios from "axios"

const BASE_URL = import.meta.env.VITE_BACKEND_URL
console.log('BASE_URL:', BASE_URL)

export const login = async (userData) => {
    return axios.post(`${BASE_URL}/auth/login`, userData)
}

export const signup = async (userData) => {
    return axios.post(`${BASE_URL}/auth/signup`, userData)
}
