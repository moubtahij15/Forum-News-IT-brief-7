import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import navBar from "../components/navBar.vue"
import test from "../views/test.vue"
const routes=[
    {
        path:'/',
        redirect:'/dashboard',
        component:navBar,
        children: [
            {path: '/login', name: "Login", component: Login},
            {
                path:'/login',
                name:'Login',
                component:Login
            },
            {
                path:'/test',
                name:'test',
                component:test
            },
        ]
    }, 
    // {
    //     path:'/login',
    //     name:'Login',
    //     component:Login
    // },
    {
        path:'/register',
        name:'Register',
        component:Register
    },
];


const router=createRouter({
history:createWebHistory(),
routes

})

export default router;