<template>
  <div class="text-primary w-full h-full bg-gray-100 flex justify-center items-center">
    <OhVueIcon name="bi-person-fill" scale="4" />
  </div>
</template>
<script setup>
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiPersonFill } from 'oh-vue-icons/icons'

addIcons(BiPersonFill)
</script>
