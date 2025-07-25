<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

import type { Flight } from './types/flight';
import type { StatusFilter } from './types/filter';

import FlightList from '@/components/FlightList.vue';
import NavBar from './components/NavBar.vue';

const flightData = ref<Flight[]>([]);
const filter = ref<StatusFilter>("All");
const isLoading = ref(false);

const aviationstackAPIKey = '6f0c4bdd725e175700af4c4c02f743c2';

const fetchFlights = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(`https://api.aviationstack.com/v1/flights?access_key=${aviationstackAPIKey}`);
    flightData.value = response.data.data.filter((flight: Flight) => flight.flight.iata);
  }catch (err) {
    console.log(err);
  }finally{
    isLoading.value = false;
  }
}

const filteredFlights = computed(() => {
  switch(filter.value) {
    case "All":
      return flightData.value.filter((flight) => flight);
    case "Scheduled":
      return flightData.value.filter((flight) => flight.flight_status === "scheduled" );
    case "Active":
      return flightData.value.filter((flight) => flight.flight_status === "active");
    case "Landed":
      return flightData.value.filter((flight) => flight.flight_status === "landed");
  }
});

function setFilter(value: StatusFilter){
  filter.value = value;
}
onMounted(fetchFlights)

</script>

<template>
  <div class="bg-zinc-900 flex flex-col">
    <NavBar @refresh="fetchFlights"/>
    <div class="flex flex-col pt-20">
      <div v-if="flightData.length" class="text-white justify-center py-2 rounded-xl bg-zinc-800 border-1 border-zinc-700 mx-auto ">
        <FilterButton :currentFilter="filter" filter="All" @set-filter="setFilter"/>
        <FilterButton :currentFilter="filter" filter="Scheduled" @set-filter="setFilter"/>
        <FilterButton :currentFilter="filter" filter="Active" @set-filter="setFilter"/>
        <FilterButton :currentFilter="filter" filter="Landed" @set-filter="setFilter"/>
      </div>
      <div v-if="isLoading" class="flex justify-center text-sm text-zinc-400 mt-30 p-4 uppercase">Scanning for new flights...</div>
      <div v-if="!isLoading && flightData.length" class="flex justify-center text-sm text-zinc-400 p-4 uppercase">{{ filter }} flights - {{ filteredFlights.length }}</div>
      <FlightList v-if="!isLoading" :filteredFlights />
    </div>
  </div>
</template>
