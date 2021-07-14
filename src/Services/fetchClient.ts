import axios from 'axios'

const fetchClient = axios.create({
	baseURL: "http://localhost:3000/api"
})

export { fetchClient }