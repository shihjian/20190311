import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/HelloWorld';
import dashboard from '@/components/dashboard';
import Login from '@/components/pages/Login';
import Signout from '@/components/pages/Signout';
import Products from '@/components/pages/Products';

Vue.use(VueRouter);
export default new VueRouter({
    routes:[
    {
        path:'*',
        redirect:'login',
        
    },
    {
        path:'/login',
        name:'Login',
        component:Login,
    
    },
    // {
    //     path:'/',
    //     name:'Signout',
    //     component:Signout,
    //     meta:{requiresAuth:true},
    // },
    {
        path:'/admin',
        name:'dashboard',
        component:dashboard,       
        children:[
            {
                path:'products',
                name:'Product',
                component:Products,
                meta:{requiresAuth:true},
            },
        ],
    },
    
    ],
});