// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Flashsale from './Flashsale.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/tailwind.css'

createApp(App)
  .use(router)  
  .mount('#app')



