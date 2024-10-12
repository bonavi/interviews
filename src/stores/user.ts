import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const userID = ref<string>('')

    return {
        userID,
    }
})
