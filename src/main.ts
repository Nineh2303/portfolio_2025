import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'
import i18n from './i18n'
const pinia =  createPinia()
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faLinkedin,
    faFacebook,
    faGithub,
    faHtml5,
    faJs,
    faReact,
    faVuejs,  
    faCss3Alt,
    faPython,
    faJava,
    faNodeJs,
    faFigma,
  } from "@fortawesome/free-brands-svg-icons";
  import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add( faLinkedin,
    faFacebook,
    faGithub,
    faHtml5,
    faJs,
    faReact,
    faVuejs,  
    faCss3Alt,
    faPython,
    faJava,
    faNodeJs,
    faFigma,
    faBars,
    faXmark
  )

createApp(App).use(pinia).use(router).use(i18n)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
