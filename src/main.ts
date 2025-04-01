import "./styles/index.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faUserSecret } from "@fortawesome/free-solid-svg-icons"


import "asd-components/dist/index.css"

console.log('111111111111')

import { createApp } from 'vue'
import App from './App.vue'


library.add(faUserSecret)

createApp(App)
.mount('#app')
