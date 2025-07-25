<script setup lang="ts">

const emits = defineEmits<{
  refresh: [active: boolean]
}>();

</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-10 flex justify-between lg:mx-auto lg:w-220 m-4 p-3.5 rounded-xl bg-zinc-800 border-1 border-zinc-700">
      <div class="flex text-2xl text-white italic font-bold ml-1">
        <div class="flex items-center pr-3">
          <img src="../assets/icons/logo.png" width="20px">
        </div>
        <div> SkyTrack</div>
      </div>
      <button @click="emits('refresh', true)" class="bg-zinc-300 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-400 px-4 py-1.5 rounded-xl">Scan</button>
  </header>
</template>
