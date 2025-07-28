<script setup lang="ts">
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'

import FlightList from '@/components/FlightList.vue'
import NavBar from './components/NavBar.vue'
import FilterButton from './components/FilterButton.vue'

import { useFlightStore } from './stores/flights'

const flightStore = useFlightStore()

onMounted(() => flightStore.fetchFlights())
</script>

<template>
  <header class="fixed top-2 left-0 right-0 z-10 w-full justify-items-center px-4 select-none">
    <NavBar />
    <div
      v-if="flightStore.flightData.length"
      class="flex justify-between mt-2 py-2 rounded-xl bg-zinc-800 border border-zinc-700"
    >
      <FilterButton
        :currentFilter="flightStore.filter"
        filter="All"
        @set-filter="flightStore.setFilter"
      />
      <FilterButton
        :currentFilter="flightStore.filter"
        filter="Scheduled"
        @set-filter="flightStore.setFilter"
      />
      <FilterButton
        :currentFilter="flightStore.filter"
        filter="Active"
        @set-filter="flightStore.setFilter"
      />
      <FilterButton
        :currentFilter="flightStore.filter"
        filter="Landed"
        @set-filter="flightStore.setFilter"
      />
    </div>
  </header>
  <main class="flex flex-col mt-32 px-3 select-none">
    <div
      v-if="flightStore.isLoading"
      class="flex flex-col items-center justify-items-center text-sm text-zinc-400 mt-30 p-4 uppercase"
    >
      <Icon icon="svg-spinners:gooey-balls-2" class="pb-2 size-10" />
      Scanning for new flights
    </div>
    <div
      v-if="!flightStore.isLoading && flightStore.flightData.length"
      class="flex justify-center text-sm text-zinc-400 p-4 uppercase"
    >
      {{ flightStore.filteredFlights.length }} flights found.
    </div>
    <FlightList v-if="!flightStore.isLoading" />
  </main>
</template>
