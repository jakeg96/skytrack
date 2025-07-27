<script lang="ts" setup>
import type { StatusFilter } from '@/types/filter'

const props = defineProps<{
  filter: StatusFilter
  currentFilter: StatusFilter
}>()

const emits = defineEmits<{
  setFilter: [filter: StatusFilter]
}>()
</script>

<template>
  <button
    :class="{
      'text-green-400': currentFilter === filter,
      'text-white hover:text-zinc-400 active:text-zinc-600': currentFilter !== filter,
    }"
    class="uppercase font-bold px-3"
    @click="emits('setFilter', filter)"
  >
    {{ filter }}
  </button>
</template>
