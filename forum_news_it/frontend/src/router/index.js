import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import navBar from "../components/navBar.vue";
import Auth from "../components/Auth.vue";
import ProfileUser from "../views/ProfileUser.vue";

import  store  from "../store";
const routes=[
    {
        path:'/',
        redirect:'/homePage',
        component:navBar,
        meta:{requiresAuth : true},
        children: [
            
            { path:'/homePage', name:'HomePage',component:HomePage},
            { path:'/profileUser', name:'ProfileUser',component:ProfileUser},
        ]
    }, 
   
   
    {
        path:'/auth',
        redirect:'/login',

        name:'Auth',
        component:Auth,
        meta: {isGuest :true},

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
}else if(store.state.user.token && (to.meta.isGuest)){
   
    next({name:'HomePage'});
}
else {
    next();
}

})
export default router;