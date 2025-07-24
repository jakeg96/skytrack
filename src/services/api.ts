import axios from 'axios'

const flightAPI = axios.create({
  baseURL: 'https://api.aviationstack.com/v1',
  timeout: 10000,
  params: {
    access_key: import.meta.env.VITE_FLIGHT_API_KEY,
  },
})

async function flightRefresh() {
  try {
    const response = await flightAPI.get('/flights', {
      params: {
        limit: 10,
      },
    })
    return response
  } catch (error: any) {
    if (error.response) {
      // get response with a status code not in range 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // no response
      console.log(error.request)
    } else {
      // Something wrong in setting up the request
      console.log('Error', error.message)
    }
    console.log(error.config)
  }
}

export default flightAPI
