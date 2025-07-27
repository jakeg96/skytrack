<script setup lang="ts">
import FlightCard from '@/components/FlightCard.vue'
import type { Flight } from '@/types/flight'

const props = defineProps<{
  filteredFlights: Flight[]
}>()
</script>

<template>
  <div class="flex flex-col">
    <TransitionGroup name="list" tag="div">
      <div v-for="(flight, index) in filteredFlights" :key="index">
        <FlightCard :flight="flight" />
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>
