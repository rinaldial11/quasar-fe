<template>
  <q-page>
    <AuthWrapper :page="'register'">
      <div class="flex flex-col gap-8 w-full">
        <div>
          <span class="text-3xl font-semibold">SIGN UP!</span>
        </div>
        <SocmedSignIn />
        <form class="flex flex-col gap-3" @submit.prevent="register">
          <div class="flex flex-col gap-3">
            <label for="email">Email</label>
            <q-input filled type="email" v-model="email" label="Your Email" />
          </div>
          <div class="flex flex-col gap-3">
            <label for="password">Password</label>
            <q-input
              label="Your Password"
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              :rules="[(val) => val.length > 6 || 'Password required']"
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
            <q-btn type="submit" class="w-full h-full" label="Register" color="primary" />
          </div>
        </form>
      </div>
    </AuthWrapper>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import AuthWrapper from '../../components/AuthWrapper.vue'
import { useRegisterStore } from 'src/stores/example-store'
import SocmedSignIn from '../../components/SignInWith.vue'

const registerStore = useRegisterStore()

const email = ref('')
const password = ref('')
const isPwd = ref(true)
const tos = ref(false)

function register() {
  const user = {
    email: email.value,
    password: password.value,
  }

  if (user.email === '' && user.password === '') {
    window.alert('data must be fill')
  } else if (tos.value === false) {
    window.alert('you must agree the terms and conditions')
  } else {
    registerStore.register(user)
    window.alert(`${user.email} registered`)
  }
}
</script>
