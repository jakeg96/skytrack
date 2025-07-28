import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import type { Flight } from '@/types/flight'
import type { StatusFilter } from '@/types/filter'
import flightAPI from '@/services/api'

export const useFlightStore = defineStore('flights', () => {
  const isLoading = ref(false)
  const flightData = ref<Flight[]>([])
  const filter = ref<StatusFilter>('All')

  const fetchFlights = async () => {
    isLoading.value = true
    try {
      const response = await flightAPI.get('/flights')
      flightData.value = response.data.data
        .filter((flight: Flight) => flight.flight.iata)
        .map((flight: Flight, index: number) => ({
          ...flight,
          id: `${flight.flight.iata},${flight.departure.scheduled},${index}`,
        }))
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  const filteredFlights = computed(() => {
    switch (filter.value) {
      case 'All':
        return flightData.value
      case 'Scheduled':
        return flightData.value.filter((flight) => flight.flight_status === 'scheduled')
      case 'Active':
        return flightData.value.filter((flight) => flight.flight_status === 'active')
      case 'Landed':
        return flightData.value.filter((flight) => flight.flight_status === 'landed')
    }
  })

  const setFilter = (value: StatusFilter) => {
    filter.value = value
  }

  return {
    isLoading,
    flightData,
    filter,
    filteredFlights,
    fetchFlights,
    setFilter,
  }
})
