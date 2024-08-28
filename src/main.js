import { createApp } from 'vue'
import showInfo from './utils/showRepoInfo'
// import router from './router'
import App from './App.vue'

// createApp(App).use(router).mount('#app')
createApp(App).mount('#app')

showInfo()
