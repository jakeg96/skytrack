<script setup lang="ts">
import FlightCard from '@/components/FlightCard.vue'
import { useFlightStore } from '@/stores/flights'

const flightStore = useFlightStore()
</script>

<template>
  <div class="flex flex-col">
    <TransitionGroup name="list" tag="div">
      <div
        v-for="(flight) in flightStore.filteredFlights"
        :key="flight.id"
      >
        <FlightCard :flight="flight" />
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active {
  transition: all 0.5s ease;
  transition-delay: var(50ms);
}

.list-enter-from {
  opacity: 0;
  transform: translateX(300px);
}
</style>
