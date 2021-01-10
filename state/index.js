import Vue from 'vue'
import { reactive } from '@nuxtjs/composition-api'

export const state = reactive({
  users: [],
  surrentUser: {},
  count: 0,
  articles: [],
})

Vue.use(reactive)
