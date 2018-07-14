import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDqvyIakh4dyPQL0iT4B6gllXkeh0KwHkM',
    libraries: 'places'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
