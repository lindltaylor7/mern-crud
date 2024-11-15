import axios from "axios"

const instance = axios.create({
    baseURL: "https://mern-crud-olcs.onrender.com:3000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance