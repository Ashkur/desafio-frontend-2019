import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import { VueMaskDirective } from "v-mask";

import '../src/assets/css/main.css';
import '../src/assets/css/all.min.css';

Vue.config.productionTip = false

Vue.use(VueCarousel);

Vue.directive("mask", VueMaskDirective);

new Vue({
  render: h => h(App),
}).$mount('#app')