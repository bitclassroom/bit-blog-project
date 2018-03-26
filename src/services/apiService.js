import axios from 'axios'
import { BASE_API_ENDPOINT } from './../shared/constants'

const apiService = axios.create({
    baseURL: BASE_API_ENDPOINT,
    timeout: 1000
})

// Alternative way to create abstraction over our network layer
// using this we can easily switch behind scenes between fetch, axios
// or some other library
const fetchApiService = {
    baseUrl: BASE_API_ENDPOINT,
    get(path, queryParams) {
        const requestUrl = this.baseUrl + path

        const options = {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }

        return fetch(requestUrl, options)
            .then(response => response.json())
            .then(data => ({ data }))
    },

    post(path, data) {

        const requestUrl = this.baseUrl + path

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }

        return fetch(requestUrl, options)
            .then(response => response.json())
            .then(data => ({ data }))
    }
}

export { apiService, fetchApiService }
