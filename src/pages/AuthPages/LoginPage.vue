<template>
  <q-page>
    <AuthWrapper :page="'login'">
      <div class="flex flex-col w-full gap-8">
        <div>
          <span>Welcome Back!</span>
        </div>
        <form class="flex flex-col gap-3" action="">
          <div class="flex flex-col gap-3">
            <label for="email">Email</label>
            <q-input
              filled
              type="email"
              v-model="email"
              label="Your Email"
              :rules="[(val) => (val && val.length > 0) || 'Email required']"
            />
          </div>
          <div class="flex flex-col gap-3">
            <label for="password">Password</label>
            <q-input
              label="Your Password"
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              :rules="[(val) => (val && val.length > 6) || 'Password required']"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div>
            <q-checkbox v-model="tos" label="I accept terms and conditions" />
          </div>
          <div class="h-12">
            <q-btn class="w-full h-full" label="Register" type="submit" color="primary" />
          </div>
        </form>
      </div>
    </AuthWrapper>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import AuthWrapper from '../../components/AuthWrapper.vue'

const password = ref('')
const isPwd = ref(true)
const tos = ref(false)
</script>
