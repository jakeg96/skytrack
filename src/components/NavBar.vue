<script setup lang="ts">
import { useFlightStore } from '@/stores/flights'

const flightData = useFlightStore()
</script>

<template>
  <div
    class="flex items-center justify-between p-3.5 max-w-220 rounded-xl bg-zinc-800 border border-zinc-700 w-full"
  >
    <div class="flex text-2xl text-white italic font-bold ml-1">
      <div class="flex items-center pr-3">
        <img src="../assets/icons/logo.png" class="size-5" />
      </div>
      <div>SkyTrack</div>
    </div>
    <button
      @click="() => flightData.fetchFlights()"
      class="bg-zinc-300 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-400 px-4 py-1.5 rounded-xl"
    >
      Scan
    </button>
  </div>
</template>
