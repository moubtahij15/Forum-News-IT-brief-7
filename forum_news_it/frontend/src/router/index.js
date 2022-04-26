import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import navBar from "../components/navBar.vue";
import Auth from "../components/Auth.vue";
// import test from "../views/test.vue";

import  store  from "../store";
const routes=[
    {
        path:'/',
        redirect:'/dashboard',
        component:navBar,
        meta:{requiresAuth : true},
        children: [
            
            { path:'/dashboard', name:'Dashboard',component:Dashboard},
            
        ]
    }, 
   
   
    {
        path:'/auth',
        redirect:'/login',

        name:'Auth',
        component:Auth,
        children :[ {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/register',
            name:'Register',
            component:Register
        },
           
        ]
    },
];


const router=createRouter({
history:createWebHistory(),
routes

})

router.beforeEach((to,from,next)=>{

if(to.meta.requiresAuth && !store.state.user.token){

    next({name:'Login'});
}else if(store.state.user.token && (to.name==='Login'||to.name==='Register')){
   
    next({name:'Dashboard'});
}
else {
    next();
}

})
export default router;