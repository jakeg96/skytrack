<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import type { Flight } from './types/flight';
import type { StatusFilter } from './types/filter';
import { Icon } from "@iconify/vue";

import FlightList from '@/components/FlightList.vue';
import NavBar from './components/NavBar.vue';
import FilterButton from './components/FilterButton.vue';

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
    <header class="fixed top-0 left-0 right-0 z-10 lg:mx-auto lg:w-220">
      <NavBar @refresh="fetchFlights"/>
      <div v-if="flightData.length" class="flex justify-around mx-6 md:max-w-100 md:mx-auto py-2 rounded-xl bg-zinc-800 border-1 border-zinc-700 ">
        <FilterButton :currentFilter="filter" filter="All" @set-filter="setFilter"/>
        <FilterButton :currentFilter="filter" filter="Scheduled" @set-filter="setFilter"/>
        <FilterButton :currentFilter="filter" filter="Active" @set-filter="setFilter"/>
        <FilterButton :currentFilter="filter" filter="Landed" @set-filter="setFilter"/>
      </div>
    </header>
    <div class="flex flex-col pt-30">
      <div v-if="isLoading" class="flex flex-col justify-center items-center text-sm text-zinc-400 mt-30 p-4 uppercase">
        <Icon icon="svg-spinners:gooey-balls-2" width="48" height="48" class="pb-2" />
        Scanning for new flights</div>
      <div v-if="!isLoading && flightData.length" class="flex justify-center text-sm text-zinc-400 p-4 uppercase">{{ filteredFlights.length }} flights found.</div>
      <FlightList v-if="!isLoading" :filteredFlights />
    </div>
  </div>
</template>
