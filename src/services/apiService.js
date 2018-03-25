import axios from 'axios'
import { BASE_API_ENDPOINT } from './../shared/constants'

const apiService = axios.create({
    baseURL: BASE_API_ENDPOINT,
    timeout: 1000
})

export { apiService }
