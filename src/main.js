import { createApp } from 'vue'
import { createPinia } from 'pinia'
import createPersistedState from 'pinia-persistedstate'
import { EncryptStorageNoble } from 'encrypt-storage'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import router from './router'

const encryptStorage = new EncryptStorageNoble(import.meta.env.VITE_APP_CACHE_SECRET, {
  storageType: 'localStorage',
})

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .use(
    createPinia().use(
      createPersistedState({
        key: import.meta.env.VITE_APP_CACHE_KEY,
        paths: ['adminStore'],
        storage: {
          getItem: (key) => encryptStorage.getItem(key),
          setItem: (key, value) => encryptStorage.setItem(key, value),
          removeItem: (key) => encryptStorage.removeItem(key),
        },
      }),
    ),
  )
  .mount('#app')
