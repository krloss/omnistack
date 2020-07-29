import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:4321'
})

export default api
