<template>
  <div
    v-if="props.page == 'register'"
    class="bg-gray-200 flex justify-center items-center h-screen"
  >
    <div class="bg-sky-400 w-1/2 rounded-3xl h-[650px] overflow-hidden">
      <div class="bg-white w-1/2 px-8 py-10 h-full flex justify-center items-center rounded-r-3xl">
        <slot></slot>
      </div>
    </div>
  </div>
  <div v-if="props.page == 'login'" class="bg-gray-200 flex justify-center items-center h-screen">
    <div class="bg-sky-400 w-1/2 flex justify-end rounded-3xl h-[650px] overflow-hidden">
      <div class="bg-white w-1/2 px-8 py-10 h-full flex justify-center items-center rounded-l-3xl">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
// const text = 'Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users'
const props = defineProps(['page'])
</script>
