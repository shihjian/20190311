// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router'
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
axios.defaults.withCredentials=true; //跨域打開

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});


router.beforeEach((to, from, next) => {  //導航守衛
  
  if(to.meta.requiresAuth){
    const api = `${process.env.APIPATH}api/user/check`;
    axios.post(api).then((response) => {
    console.log(response.data);
    if(response.data.success){
    next();
    }else{
    next({
      path:'/login',
    });
    };
    });
  }else{
    next();
  }
})
