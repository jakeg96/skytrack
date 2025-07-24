<script lang="ts" setup>
import type { StatusFilter } from '@/types/filter';
import UIButton from '@/components/ui/Button.vue'

const props = defineProps<{
  filter: StatusFilter;
  currentFilter: StatusFilter;
}>();

const emits = defineEmits<{
  setFilter: [filter: StatusFilter]
}>();

</script>

<template>

  <button class="text-white hover:text-zinc-400 px-4 uppercase text-shadow-md active:text-zinc-600"
    @click="emits('setFilter', filter)"
  >
    {{ filter }}
  </button>

</template>
