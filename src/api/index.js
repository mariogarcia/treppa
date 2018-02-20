import axios from 'axios'

const API_BASE_URL = 'http://172.17.0.3:5050'

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const fetchTasks = () => {
    return client.get('/task')
}

export const createTask = (params) => {
    return client.post('/task', params)
}
