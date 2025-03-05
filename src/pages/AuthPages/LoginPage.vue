<template>
  <q-page>
    <AuthWrapper :page="'login'">
      <div class="flex flex-col w-full gap-8">
        <div>
          <span class="text-3xl font-semibold">Welcome Back! 👋</span>
        </div>
        <SocmedSignIn />
        <q-form class="flex flex-col gap-3" @submit="login">
          <div class="flex flex-col gap-3">
            <label for="email">Email</label>
            <q-input
              filled
              type="email"
              v-model="email"
              label="Your Email"
              :rules="[
                (val) => val.includes('@') || 'Invalid email format, must contain @',
                (val) => val.length > 0 || 'Email must be fill',
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
              :rules="[(val) => (val && val.length > 0) || 'Password required']"
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
          <div class="h-12">
            <q-btn class="w-full h-full" label="Login" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </AuthWrapper>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import { useRegisterStore } from 'src/stores/example-store'
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

function login() {
  const user = {
    email: email.value.toLowerCase(),
    password: password.value,
  }

  const registeredUser = registerStore.user

  const foundUser = registeredUser.find((v) => v.email === user.email)

  if (!foundUser) {
    $q.notify({
      type: 'warning',
      message: 'incorrect email or password',
      timeout: 2000,
      position: 'top',
    })
  } else if (user.password !== foundUser?.password) {
    $q.notify({
      type: 'warning',
      message: 'Incorrect email or password',
      timeout: 2000,
      position: 'top',
    })
  } else {
    $q.notify({
      type: 'positive',
      message: 'Log in success',
      timeout: 2000,
      position: 'bottom',
    })
    router.push('/')
  }
}
</script>
