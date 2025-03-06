<template>
  <q-page>
    <content-wrapper>
      <div class="flex flex-col gap-8 py-20 items-center justify-center">
        <div class="max-w-80 mb-20">
          <img src="../assets/ppay_invert.svg" alt="ppay" />
        </div>
        <div class="text-5xl">Smart Way to Your Financial Business</div>
        <div class="text-base font-light">
          We bring you a mobile app for banking problems that oftenly wasting much of your times.
        </div>
        <div>
          <q-btn to="/auth/login" text-color="white" color="primary" label="Get Started" />
        </div>
        <div class="text-base font-light">Available on</div>
        <div class="flex gap-5">
          <div>
            <OhVueIcon name="io-logo-google-playstore" scale="2" />
          </div>
          <div>
            <OhVueIcon name="bi-apple" scale="2" />
          </div>
        </div>
      </div>
      <div class="bg-gray-200 px-10 py-5 w-full flex justify-evenly">
        <img v-for="(item, index) in listIcons" :src="item.iconPath" :key="index" />
      </div>
      <div class="flex gap-48 py-20 items-center">
        <div class="flex flex-col gap-10">
          <div class="text-4xl">About The Aplication</div>
          <div class="max-w-96 text-lg font-light">
            We have some great features from the application and it’s totally free to use by all
            users around the world.
          </div>
        </div>
        <div class="flex gap-10">
          <q-card
            v-for="(item, index) in listCards"
            :key="index"
            class="bg-primary text-white text-center w-48 py-8 flex flex-col items-center justify-start shadow-xl"
          >
            <div class="bg-white w-10 aspect-square flex justify-center items-center">
              <OhVueIcon :name="item.icon" class="text-primary" />
            </div>
            <q-card-section>
              <div class="text-h6">{{ item.head }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">{{ item.desc }}</q-card-section>
          </q-card>
        </div>
      </div>
    </content-wrapper>
  </q-page>
</template>

<script setup>
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiApple,
  IoLogoGooglePlaystore,
  RiCustomerServiceFill,
  BiShieldCheck,
  BiDownload,
} from 'oh-vue-icons/icons'
import ContentWrapper from 'src/components/ContentWrapper.vue'

addIcons(BiApple, IoLogoGooglePlaystore, RiCustomerServiceFill, BiShieldCheck, BiDownload)

const listCards = [
  {
    icon: 'ri-customer-service-fill',
    head: '24/7 Support',
    desc: 'We have 24/7 contact support so you can contact us whenever you want and we will respond it.',
  },
  {
    icon: 'bi-shield-check',
    head: 'Data Privacy',
    desc: 'We make sure your data is safe in our database and we will encrypt any data you submitted to us.',
  },
  {
    icon: 'bi-download',
    head: 'Easy Download',
    desc: 'Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.',
  },
]

const listIcons = [
  {
    iconPath: 'src/assets/airbnb.svg',
  },
  {
    iconPath: 'src/assets/canon.svg',
  },
  {
    iconPath: 'src/assets/dell.svg',
  },
  {
    iconPath: 'src/assets/dropbox.svg',
  },
  {
    iconPath: 'src/assets/hnm.svg',
  },
  {
    iconPath: 'src/assets/microsoft.svg',
  },
]
</script>
