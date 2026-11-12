import { defineStore } from 'pinia'
import { ref } from 'vue'
import { AdminService } from '@/services/adminService'

export const useAdminStore = defineStore('adminStore', () => {
  //#region State
  const message = ref('')
  //#endregion

  //#region Getters
  const getMessage = () => message.value
  //#endregion

  //#region Actions
  const initializeStoreAsync = async () => {
    const result = await AdminService.getHelloWorldAsync()
    console.debug(result)
    message.value = result.message
  }
  //#endregion

  return {
    message,
    getMessage,
    initializeStoreAsync,
  }
})
