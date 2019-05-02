import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/dashboard.css'
import './assets/css/fontawesome.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview'
import VueRouter from 'vue-router';

Vue.use(iView);
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')