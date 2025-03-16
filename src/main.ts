import "./styles/index.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faUserSecret } from "@fortawesome/free-solid-svg-icons"


import { createApp } from 'vue'
import App from './App.vue'


library.add(faUserSecret)

createApp(App)
.mount('#app')
