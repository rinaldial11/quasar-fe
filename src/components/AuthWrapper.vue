<template>
  <div
    v-if="props.page === 'register'"
    class="bg-gray-200 flex justify-center items-center h-screen"
  >
    <div class="bg-sky-400 w-1/2 rounded-3xl h-[650px] overflow-hidden shadow-lg flex">
      <div
        class="animate-slide-in bg-white w-1/2 px-8 py-10 h-full flex justify-center items-center rounded-r-3xl"
      >
        <slot></slot>
      </div>
      <div class="w-1/2 flex flex-col items-center px-8 justify-center gap-10">
        <div class="text-white text-2xl font-semibold text-center max-w-80">
          {{ text }}
        </div>
        <div class="flex flex-col gap-3">
          <div class="text-white font-semibold">Already have an account?</div>
          <q-btn to="/auth/login" text-color="primary" color="white" label="Sign In" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="props.page === 'login'" class="bg-gray-200 flex justify-center items-center h-screen">
    <div class="bg-sky-400 w-1/2 flex justify-end rounded-3xl h-[650px] overflow-hidden shadow-lg">
      <div class="w-1/2 flex flex-col items-center px-8 justify-center gap-10">
        <div class="text-white text-2xl font-semibold text-center max-w-80">
          {{ text2 }}
        </div>
        <div class="flex flex-col gap-3">
          <div class="text-white font-semibold">Create account</div>
          <q-btn to="/auth/register" text-color="primary" color="white" label="Sign Up" />
        </div>
      </div>
      <div
        class="animate-slide-out bg-white w-1/2 px-8 py-10 h-full flex justify-center items-center rounded-l-3xl"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
const text = 'Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users'
const text2 = 'Smart Way to Your Financial Business'
const props = defineProps(['page'])
</script>
<style scoped>
@keyframes slideIn {
  from {
    transform: translateX(500px);
  }
  to {
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.8s ease-out forwards;
}

@keyframes slideOut {
  from {
    transform: translateX(-500px);
  }
  to {
    transform: translateX(0);
  }
}

.animate-slide-out {
  animation: slideOut 0.8s ease-out forwards;
}
</style>
