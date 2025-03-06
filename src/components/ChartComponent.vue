<template>
  <div class="flex text-center justify-between flex-col w-full h-[450px]">
    <div class="text-base font-medium w-full">Financial Chart</div>
    <div class="w-full h-[400px]">
      <BarChart class="h-full" :chart-data="chartData" :chart-options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'
import { BarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

// Registrasi plugin Chart.js
Chart.register(...registerables)

// Data dan opsi chart
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
  datasets: [
    {
      label: 'Income',
      data: [12, 19, 3, 5, 2, 14, 16, 8],
      backgroundColor: 'rgb(0, 141, 218)',
    },
    {
      label: 'Expanse',
      data: [10, 17, 1, 3, 1, 10, 10, 4],
      backgroundColor: 'rgb(255, 0, 0)',
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>
