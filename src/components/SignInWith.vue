<template>
  <div>
    <div class="flex flex-col gap-2">
      <button
        class="border w-full py-2 rounded-3xl shadow-md flex items-center justify-center gap-3 hover:bg-gray-200"
        v-for="item in social"
        :key="item.icons"
      >
        <OhVueIcon :name="item.icons" /> {{ item.text }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FcGoogle, BiFacebook } from 'oh-vue-icons/icons'

addIcons(FcGoogle, BiFacebook)

const social = [
  {
    text: 'Sign In With Google',
    icons: 'fc-google',
  },
  {
    text: 'Sign In With Facebook',
    icons: 'bi-facebook',
  },
]
</script>
