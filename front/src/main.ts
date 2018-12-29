import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router';
//import '../node_modules/vuetify/dist/vuetify.min.css';
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');