<script setup lang="ts">
import type { Flight } from '@/types/flight'
import { ref, computed } from 'vue'
import { useDateFormat } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  flight: Flight
}>()

const emits = defineEmits<{
  favourite: [updateFav: boolean]
}>()

const favouriteNow = ref(false)
const expandInfo = ref(false)

const formattedArrival = computed(() => {
  return useDateFormat(props.flight.arrival.scheduled!, 'HH:MM', { locales: 'en-UK' })
})
const formattedDeparture = computed(() => {
  return useDateFormat(props.flight.departure.scheduled!, 'HH:MM', { locales: 'en-UK' })
})

const getTimeDifference = (startTime: string, endTime: string) => {
  const diffMs = new Date(endTime).getTime() - new Date(startTime).getTime()

  const hours = Math.floor(diffMs / (1000 * 60 * 60))
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

  return { hours, minutes, totalMinutes: Math.floor(diffMs / (1000 * 60)) }
}

const flightDuration = computed(() => {
  const { hours, minutes } = getTimeDifference(
    props.flight.departure.scheduled!,
    props.flight.arrival.scheduled!,
  )
  return `${hours}h ${minutes}m`
})
</script>

<template>
  <div
    class="flex flex-col mx-auto p-3.5 mb-3 max-w-140 rounded-xl text-white bg-zinc-800 border border-zinc-700 hover:border-zinc-600 select-none"
  >
    <div class="flex justify-between">
      <Icon
        :icon="favouriteNow ? 'solar:star-bold' : 'solar:star-linear'"
        class="size-6"
        :color="favouriteNow ? 'gold' : 'white'"
        @click="favouriteNow = !favouriteNow"
      />
      <div
        :class="{
          'text-green-400': flight.flight_status === 'active',
          'text-zinc-300': flight.flight_status === 'scheduled',
          'text-yellow-400': flight.flight_status === 'diverted',
          'text-orange-400': flight.flight_status === 'incident',
          'text-zinc-600': flight.flight_status === 'landed',
          'text-red-400': flight.flight_status === 'cancelled'
        }"
        class="font-bold uppercase text-sm"
      >
      {{ flight.flight_status }}
      </div>
      <Icon
        :icon="expandInfo ? 'solar:info-circle-bold' : 'solar:info-circle-linear'"
        class="size-6"
        @click="expandInfo = !expandInfo"
      />
    </div>
    <div class="flex justify-center text-sm text-zinc-400 mb-1">{{ formattedDeparture }}</div>
    <div class="flex justify-between">
      <div class="flex flex-col xs:flex-row">
        <div class="pr-2 my-auto">
          <img
            :src="`/airline_logos/${flight.airline?.icao ?? 'default'}.png`"
            width="40px"
            :alt="flight.airline?.name || 'Airline Logo'"
            draggable="false"
          />
        </div>
        <div class="flex flex-col">
          <div class="font-bold text-2xl text-zinc-200">
            {{ flight.departure.iata }} - {{ flight.arrival.iata }}
          </div>
          <div class="font-bold text-zinc-400 text-sm uppercase italic">
            {{ flight.airline.name }}
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-end text-end">
        <div class="font-bold text-2xl text-zinc-100">{{ flight.flight.iata }}</div>

        <div v-if="flight.departure.delay" class="font-bold text-red-400 text-sm">
          DELAYED {{ flight.departure.delay }}m
        </div>
        <div v-else class="font-bold text-green-400 text-sm">ON TIME</div>
      </div>
    </div>

    <div v-if="expandInfo" class="flex flex-row mt-3">
      <div class="flex flex-col">
        <div class="font-bold text-zinc-400 text-md uppercase italic">Departure</div>

        <div class="font-bold text-zinc-200 text-sm">
          {{ flight.departure.timezone?.trim().split('/').pop()?.replace(/_/g, ' ') }}
        </div>
        <div class="text-zinc-200 text-sm">{{ flight.departure.airport }}</div>
        <div>{{ formattedDeparture }}</div>
        <div class="text-sm">Gate: {{ flight.departure.gate || 'Not Assigned' }}</div>
      </div>
      <div class="ml-auto text-end">
        <div class="font-bold text-zinc-400 text-md uppercase italic">Arrival</div>

        <div class="font-bold text-zinc-200 text-sm">
          {{ flight.arrival.timezone?.trim().split('/').pop()?.replace(/_/g, ' ') }}
        </div>
        <div class="text-zinc-200 text-sm">{{ flight.arrival.airport }}</div>
        <div>{{ formattedArrival }}</div>
        <div class="text-sm">Gate: {{ flight.arrival.gate || 'Not Assigned' }}</div>
      </div>
    </div>
  </div>
</template>
