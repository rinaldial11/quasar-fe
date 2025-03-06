<template>
  <q-page>
    <content-wrapper>
      <div class="flex flex-col gap-10 w-full">
        <div class="flex gap-5 justify-between w-full px-20">
          <div
            class="w-1/3 border border-gray-200 rounded p-5 flex flex-col items-start justify-center gap-5"
          >
            <div class="flex gap-3 items-center">
              <oh-vue-icon class="text-primary" name="md-accountbalancewallet-outlined" />
              <span class="text-base text-gray-400">Balance</span>
            </div>
            <div class="text-2xl font-medium">Rp.120.000</div>
            <div class="flex gap-10">
              <div class="flex flex-col gap-3">
                <div class="text-gray-400">Income</div>
                <div class="text-green">Rp.200.000</div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="text-gray-400">Expanse</div>
                <div class="text-red">Rp.100.000</div>
              </div>
            </div>
          </div>
          <div class="w-3/5 border border-gray-200 rounded p-5 flex items-center justify-between">
            <div class="text-base font-medium">Fast Service</div>
            <div class="flex gap-5">
              <div class="w-28">
                <button class="bg-primary text-white rounded-md px-3 py-2 text-base w-full">
                  <oh-vue-icon name="fa-money-bill" /> Top up
                </button>
              </div>
              <div class="w-28">
                <button class="bg-primary text-white rounded-md px-3 py-2 text-base w-full">
                  <oh-vue-icon name="bi-send-fill" /> Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-5 justify-between w-full px-20">
          <div class="w-3/5 border border-gray-200 rounded p-5">
            <chart-component />
          </div>
          <div class="flex flex-col gap-5 w-1/3 border border-gray-200 rounded p-5">
            <div class="flex justify-between items-center">
              <div class="text-base font-medium">Transaction History</div>
              <button class="text-xs text-blue">See All</button>
            </div>
            <div class="flex flex-col gap-5">
              <div
                v-for="(_, index) in Array(6)"
                :key="index"
                class="flex justify-between items-center"
              >
                <div class="flex gap-10">
                  <q-avatar rounded>
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                  </q-avatar>
                  <div class="flex flex-col justify-between">
                    <div class="font-semibold">Floyd Miles</div>
                    <div class="font-light text-gray-500">Send</div>
                  </div>
                </div>
                <div class="text-green">+Rp50.000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </content-wrapper>
  </q-page>
</template>
<script setup>
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdAccountbalancewalletOutlined, BiSendFill, FaMoneyBill } from 'oh-vue-icons/icons'
import ContentWrapper from 'src/components/ContentWrapper.vue'
import ChartComponent from 'src/components/ChartComponent.vue'

addIcons(MdAccountbalancewalletOutlined, BiSendFill, FaMoneyBill)
</script>
