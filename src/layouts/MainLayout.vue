<template>
  <q-layout view="hHh LpR fFf">
    <q-header
      reveal
      bordered
      class="bg-primary text-white h-20 flex items-center justify-between px-5"
      height-hint="98"
    >
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <button to="/" class="w-24 flex items-center">
            <img class="w-full" src="../assets//ppay.svg" alt="" />
          </button>
        </q-toolbar-title>
        <q-space />
        <div class="flex gap-4">
          <q-btn to="/auth/register" text-color="white" color="primary" outline label="Sign Up" />
          <q-btn to="/auth/login" text-color="primary" color="white" unelevated label="Sign In" />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer class="px-5" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const menuList = [
  {
    label: 'Landing Page',
    separator: true,
  },
  {
    label: 'Dashboard',
    separator: true,
  },
  {
    label: 'Profile',
    separator: true,
  },
]

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
