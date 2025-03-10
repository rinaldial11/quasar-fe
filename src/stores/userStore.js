import { defineStore, acceptHMRUpdate } from 'pinia'
import { getUserById } from 'src/services/userService'

export const useRegisterStore = defineStore('register', {
  state: () => ({
    user: [],
  }),

  actions: {
    register(user) {
      this.user.push(user)
    },
  },

  persist: {
    enabled: true,
    storage: localStorage,
  },
})

export const userStore = defineStore('user', {
  state: () => ({
    user: {},
    loading: false,
    error: null,
  }),
  actions: {
    async fetchUserById(id) {
      this.loading = true
      try {
        this.user = await getUserById(id)
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRegisterStore, userStore, import.meta.hot))
}
