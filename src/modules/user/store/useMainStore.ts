import { defineStore } from 'pinia'
import { User, UserStore } from '../interfaces'

export const useMainStore = defineStore('main', {
  state: (): UserStore => ({
    user: {
      dateOfBirth: '',
      documentType: '',
      document: '',
      email: '',
      entity: '',
      fullName: '',
      password: '',
      phoneNumber: '',
      position: '',
      role: '',
    },
  }),

  actions: {
    async createUser(user: User) {},
  },
})
