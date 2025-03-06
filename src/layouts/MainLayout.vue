<template>
  <q-layout class="bg-gray-200" view="hHh LpR fFf">
    <q-header
      reveal
      bordered
      class="bg-primary text-white h-20 flex items-center justify-between px-5"
      height-hint="98"
    >
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-btn to="/" class="w-32 flex items-center" unelevated="">
            <img class="w-full" src="../assets//ppay.svg" alt="" />
          </q-btn>
        </q-toolbar-title>
        <q-space />
        <div class="flex gap-4">
          <q-btn to="/auth/register" text-color="white" color="primary" outline label="Sign Up" />
          <q-btn to="/auth/login" text-color="primary" color="white" unelevated label="Sign In" />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left">
      <q-scroll-area class="fit">
        <q-list class="pt-5 pl-5 pr-3">
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              clickable
              :to="menuItem.path"
              :active="route.path === menuItem.path"
              v-ripple
              active-class="border-l-[6px] border-primary bg-sky-100 rounded-md border-l"
            >
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
import { useRoute } from 'vue-router'

const route = useRoute()

const menuList = [
  {
    label: 'Landing Page',
    separator: false,
    path: '/',
  },
  {
    label: 'Dashboard',
    separator: false,
    path: '/dashboard',
  },
  {
    label: 'Profile',
    separator: false,
    path: '/profile',
  },
]

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
