import axios from 'axios'

const flightAPI = axios.create({
  baseURL: 'https://api.aviationstack.com/v1',
  timeout: 10000,
  params: {
    access_key: import.meta.env.VITE_FLIGHT_API_KEY,
  },
})

export default flightAPI
