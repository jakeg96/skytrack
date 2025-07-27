import { defineStore } from "pinia"

import { ref } from "vue"
import type { Flight } from "@/types/flight"
import flightAPI from "@/services/api"

export const useFlightStore = defineStore('flights',() => {
  const isLoading = ref(false)
  const flightData = ref<Flight[]>([])

  const fetchFlights = async () => {
    isLoading.value = true
    try {
      const response = await flightAPI.get('/flights')
      console.log('flight API :',response)
      flightData.value = response.data.data.filter((flight: Flight) => flight.flight.iata)
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }
  return { isLoading, flightData, fetchFlights }
})

