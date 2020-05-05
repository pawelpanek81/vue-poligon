import Vue from 'vue'
import App from './App.vue'
import 'primeflex/primeflex.css';

import 'primevue/resources/themes/nova-light/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //shared css
import 'primeicons/primeicons.css'                           //icons
import Button from 'primevue/button';
Vue.component('Button', Button);

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
