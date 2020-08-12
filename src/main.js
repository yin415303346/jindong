import Vue from 'vue'
import App from './App.vue'
import {router} from "./router/router.js"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper, { Navigation, Pagination, Autoplay} from "swiper";
Swiper.use([Navigation, Pagination,Autoplay]);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
import {store} from "./store/index.js"


new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
