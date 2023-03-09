import HomeView from './views/HomeView.vue'
import AboutView from  './views/AboutView.vue'
import ContactUs from  './views/ContactUs.vue'
import FormRout from  './views/FormRout.vue'

import {createRouter,createWebHistory } from 'vue-router'
import EditPage from  './views/EditPage.vue'

const routes = [
    {
        name:'HomeView',
        component:HomeView,
        path:'/'
    },
    {
        name:'AboutView',
        component:AboutView,
        path:'/AboutView'
    },
    {
        name:'ContactUs',
        component:ContactUs,
        path:'/ContactUs'
    },
    {
        name:'FormRout',
        component:FormRout,
        path:'/FormRout'
    },
    {
        name:'EditPage',
        component:EditPage,
        path:'/EditPage'
    }
]

const router = createRouter ({
    history:createWebHistory(),
    routes
})

export default router