import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('./views/Home.vue')
        },



        {
            path: '/Profile',
            name: 'Profile',
            component: () =>
                import ('./views/Profile.vue')
        },
        {
            path: '/Previous config',
            name: 'Previous Configurations',
            component: () =>
                import ('./views/Previous.vue')
        },
        {
            path: '/Configuration',
            name: 'Feature Model Configuration',
            component: () =>
                import ('./views/Configuration.vue')
        },

    ]
})