<script setup lang="ts">

import type { Flight } from "@/types/flight"

interface Props {
  flight: Flight
}

const props = defineProps<Props>()

</script>

<template>
  <article class="flightCard">
    <div class="departingInfo">
      <h1>{{ flight.departure.iata }}</h1>
      <p>{{ flight.departure.airport }}</p>
      <p>{{ flight.departure.scheduled }}</p>
      <p>Gate: {{ flight.departure.gate }}</p>
    </div>
    <div class="statusInfo">
      <h1>{{ flight.flight.iata }}</h1>
      <h2>{{ flight.flight_status }}</h2>
      <h3>{{ flight.flight_date }}</h3>
    </div>
    <div class="arivalInfo">
      <h1>{{ flight.arrival.iata }}</h1>
      <p>{{ flight.arrival.airport }}</p>
      <p>{{ flight.arrival.scheduled }}</p>
      <p>Gate: {{ flight.arrival.gate }}</p>
    </div>
  </article>
</template>

<style>
.flightCard {
  display: flex;
  justify-content: space-between;

  padding: 20px;
  margin-bottom: 10px;
}
.statusInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}
.arivalInfo {
  text-align: right;
}
</style>
