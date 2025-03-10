<template>
  <q-page>
    <AuthWrapper :page="'register'">
      <div class="flex flex-col gap-8 w-full">
        <div>
          <span class="text-3xl font-semibold">SIGN UP!</span>
        </div>
        <SocmedSignIn />
        <q-form class="flex flex-col gap-3" @submit="register">
          <div class="flex flex-col gap-3">
            <label for="email">Email</label>
            <q-input
              filled
              type="email"
              v-model="email"
              label="Your Email"
              :rules="[
                (val) => val.includes('@') || 'Invalid email format, must contain @',
                (val) => val.length >= 8 || 'Email must be at least 8 characters',
              ]"
            />
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
            <q-checkbox
              v-model="tos"
              label="I accept terms and conditions"
              :rules="[(val) => val || 'You must agree to the terms']"
            />
          </div>
          <div class="h-12">
            <q-btn type="submit" class="w-full h-full" label="Register" color="primary" />
          </div>
        </q-form>
      </div>
    </AuthWrapper>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import { useRegisterStore } from 'src/stores/userStore'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import AuthWrapper from '../../components/AuthWrapper.vue'
import SocmedSignIn from '../../components/SignInWith.vue'

const registerStore = useRegisterStore()
const router = useRouter()
const $q = useQuasar()

const email = ref('')
const password = ref('')
const isPwd = ref(true)
const tos = ref(false)

function register() {
  const user = {
    email: email.value.toLowerCase(),
    password: password.value,
  }

  const foundUser = registerStore.user.find((v) => v.email === user.email)

  if (user.email === '' && user.password === '') {
    $q.notify({
      type: 'warning',
      message: 'Form must be fill',
      timeout: 2000,
      position: 'top',
    })
  } else if (tos.value === false) {
    $q.notify({
      type: 'warning',
      message: 'You must agree the terms and conditions',
      timeout: 2000,
      position: 'top',
    })
  } else if (foundUser) {
    $q.notify({
      type: 'warning',
      message: 'Email is not available',
      timeout: 2000,
      position: 'top',
    })
  } else {
    registerStore.register(user)
    $q.notify({
      type: 'positive',
      message: 'Register success',
      timeout: 2000,
      position: 'top',
    })
    router.push('/auth/login')
  }
}
</script>
