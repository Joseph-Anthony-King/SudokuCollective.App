<template>
  <h1>{{ getMessage }}</h1>
  <h1>
    {{ message }}
  </h1>
</template>

<script setup lang="js">
import { onMounted, ref, computed } from 'vue'
import { useAdminStore } from '@/stores/adminStore'

const adminStore = useAdminStore()
const message = ref('Vue Sudoku')
const updateMessageStrings = ['Vue Sudoku', 'Vue Sudoku .', 'Vue Sudoku ..', 'Vue Sudoku ...']
let index = 1

const getMessage = computed(() => adminStore.getMessage())

const updateMessage = () => {
  setInterval(() => {
    message.value = updateMessageStrings[index]
    index = index === updateMessageStrings.length - 1 ? 0 : index + 1
  }, 1000)
}

onMounted(async () => {
  await adminStore.initializeStoreAsync()
  updateMessage()
})
</script>

<style scoped>
h1 {
  margin-left: 1rem;
}
</style>
