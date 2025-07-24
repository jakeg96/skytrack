<script setup lang="ts">
import type { Flight } from '@/types/flight'
import { ref, computed } from 'vue';

const props = defineProps<{
  flight: Flight
}>();

const emits = defineEmits<{
  favourite: [updateFav: boolean]
}>();

const favouriteNow = ref(false)
const expandInfo = ref(false)

</script>

<template>
  <div @click="expandInfo = !expandInfo" class="flex flex-col sm:w-130 mx-4 p-3.5 mb-3 rounded-xl text-white bg-zinc-800 border-1 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600">
    <div class="flex justify-between mb-1">
        <img src="../assets/icons/logo.png" width="20px">
        <div v-if="flight.flight_status == 'active'" class="font-bold text-green-400 uppercase text-sm">{{ flight.flight_status }}</div>
        <div v-if="flight.flight_status == 'scheduled'" class="font-bold text-zinc-300 uppercase text-sm">{{ flight.flight_status }}</div>
        <div v-if="flight.flight_status == 'diverted'" class="font-bold text-yellow-400 uppercas text-sm">{{ flight.flight_status }}</div>
        <div v-if="flight.flight_status == 'incident'" class="font-bold text-orange-400 uppercase text-sm">{{ flight.flight_status }}</div>
        <div v-if="flight.flight_status == 'landed'" class="font-bold text-zinc-600 uppercase text-sm">{{ flight.flight_status }}</div>
        <div v-if="flight.flight_status == 'cancelled'" class="font-bold text-red-400 uppercase text-sm">{{ flight.flight_status }}</div>

        <img v-if="!favouriteNow" src="../assets/icons/heart_white.svg" width="20px" @click="favouriteNow = !favouriteNow, expandInfo = !expandInfo">
        <img v-if="favouriteNow" src="../assets/icons/heart_gold.svg" width="20px" @click="favouriteNow = !favouriteNow, expandInfo = !expandInfo">
    </div>
    <div class="flex justify-center text-sm text-zinc-400">14h 20m</div>
    <div class="flex justify-between">

      <div class="flex flex-col xs:flex-row">
        <div class="pr-2 my-auto">
          <img
            :src="`/airline_logos/${flight.airline?.icao}.png`"
            width="40px"
            :alt="flight.airline?.name || 'Airline Logo'"
            @error="e => ((e.target as HTMLImageElement).src = '/airline_logos/default.png')"
          />
        </div>
        <div class="flex flex-col">
          <div class="font-bold text-2xl text-zinc-200">{{ flight.departure.iata }} - {{ flight.arrival.iata }}</div>
          <div class="font-bold text-zinc-400 text-sm uppercase italic">{{ flight.airline.name }}</div>
        </div>

      </div>

      <div class="flex flex-col justify-end text-end">
        <div class="font-bold text-2xl text-zinc-100">{{ flight.flight.iata }}</div>

        <div v-if="flight.departure.delay" class="font-bold text-red-400 text-sm uppercase">
          delayed +{{ flight.departure.delay }} hrs
        </div>
        <div v-if="!flight.departure.delay" class="font-bold text-green-400 text-sm uppercase">
          on time
        </div>
      </div>
    </div>


    <div v-if="expandInfo" class="sm:flex flex-row mt-3 hidden">
      <div class="flex flex-col">
        <div class="font-bold text-zinc-400 text-md uppercase italic">Departure</div>

        <div class="font-bold text-zinc-200 text-sm">{{ flight.departure.timezone.trim().split('/').pop()?.replace(/_/g, ' ') }}</div>
        <div class=" text-zinc-200 text-sm ">{{ flight.departure.airport }}</div>
        <!-- <div>{{ flight.flight_date }}</div> -->
        <div class=" text-sm">Gate: {{ flight.departure.gate || "Not Assigned"}}</div>
      </div>
      <div class="ml-auto text-end">
        <div class="font-bold text-zinc-400 text-md uppercase italic">Arrival</div>

        <div class="font-bold text-zinc-200 text-sm">{{ flight.arrival.timezone.trim().split('/').pop()?.replace(/_/g, ' ') }}</div>
        <div class=" text-zinc-200 text-sm ">{{ flight.arrival.airport }}</div>
        <!-- <div>{{ flight.departure.scheduled }}</div> -->
        <div class="text-sm">Gate: {{ flight.arrival.gate || "Not Assigned" }}</div>
      </div>
    </div>
  </div>
</template>
