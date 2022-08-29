import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router/router'
import Tacklebox from '@narrative.io/tackle-box'
import AppModule from '@narrative.io/tackle-box/'
import store from '@/plugins/vuex'

Vue.use(Tacklebox)
Vue.mixin(AppModule)
Vue.config.productionTip = false

new Vue({
	vuetify,
	store: store,
	router,
  render: h => h(App),
}).$mount('#app')