<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

import { Icon } from '@iconify/vue'
import type { Flight } from './types/flight'
import type { StatusFilter } from './types/filter'
import flightAPI from './services/api'

import FlightList from '@/components/FlightList.vue'
import NavBar from './components/NavBar.vue'
import FilterButton from './components/FilterButton.vue'

const flightData = ref<Flight[]>([])
const filter = ref<StatusFilter>('All')
const isLoading = ref(false)

const fetchFlights = async () => {
  isLoading.value = true
  try {
    const response = await flightAPI.get('/flights')
    flightData.value = response.data.data.filter((flight: Flight) => flight.flight.iata)
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
}

const filteredFlights = computed(() => {
  switch (filter.value) {
    case 'All':
      return flightData.value.filter((flight) => flight)
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

onMounted(fetchFlights)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-10 w-full items-center justify-items-center px-4 select-none">
    <NavBar @refresh="fetchFlights" />
    <div
      v-if="flightData.length"
      class="flex justify-around mx-12 p-2 rounded-xl bg-zinc-800 border border-zinc-700"
    >
      <FilterButton :currentFilter="filter" filter="All" @set-filter="setFilter" />
      <FilterButton :currentFilter="filter" filter="Scheduled" @set-filter="setFilter" />
      <FilterButton :currentFilter="filter" filter="Active" @set-filter="setFilter" />
      <FilterButton :currentFilter="filter" filter="Landed" @set-filter="setFilter" />
    </div>
  </header>
  <main class="flex flex-col mt-32 px-3 select-none">
    <div
      v-if="isLoading"
      class="flex flex-col items-center justify-items-center text-sm text-zinc-400 mt-30 p-4 uppercase"
    >
      <Icon icon="svg-spinners:gooey-balls-2" class="pb-2 size-10" />
      Scanning for new flights
    </div>
    <div
      v-if="!isLoading && flightData.length"
      class="flex justify-center text-sm text-zinc-400 p-4 uppercase"
    >
      {{ filteredFlights.length }} flights found.
    </div>
    <FlightList v-if="!isLoading" :filteredFlights />
  </main>
</template>
