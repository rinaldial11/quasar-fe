import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),

  getters: {
    doubleCount: (state) => state.counter * 2,
  },

  actions: {
    increment() {
      this.counter++
    },
  },
})

export const useRegisterStore = defineStore('register', {
  state: () => ({
    user: [{}],
  }),

  actions: {
    register(user) {
      this.user.push(user)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, useRegisterStore, import.meta.hot))
}
