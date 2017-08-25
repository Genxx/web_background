/*jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/index';
import device from '../components/device.vue';
import account from '../components/account.vue';
import gains from '../components/gains.vue';
import deviceDetail from '../components/device_detail.vue';
import devicenum from '../components/devicenum.vue';
import gif from '../components/gif.vue';
import price from '../components/price.vue';
import purse from '../components/purse.vue';
import balance from '../components/balance';
import login from '../components/login.vue';
import regis from '../components/regis.vue';
import addaddr from '../components/addaddr.vue';
import gifmanage from '../components/gifmanage.vue';
import addgif from '../components/addgif.vue';
import sellername from '../components/sellername.vue';
import customnum from '../components/customnum.vue';
import delivery from '../components/delivery.vue';
import regisDevice from '../components/regis_device.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/device',
      component: device
    },
    {
      path: '/account',
      component: account
    },
    {
      path: '/gains',
      component: gains
    },
    {
      path:'/deviceDetail',
      component: deviceDetail
    },
    {
      path:'/deviceNum',
      component: devicenum
    },
    {
      path:'/gif',
      component: gif
    },
    {
      path:'/price',
      component: price
    },
    {
      path:'/purse',
      component: purse
    },
    {
      path:'/balance',
      component: balance
    },
    {
      path:'/regis',
      component: regis
    },
    {
      path:'/addaddr',
      component: addaddr
    },
    {
      path:'/gifmanage',
      component: gifmanage
    },
    {
      path:'/addgif',
      component: addgif
    },
    {
      path:'/sellername',
      component:sellername
    },
    {
      path:'/customnum',
      component:customnum
    },
    {
      path:'/delivery',
      component:delivery
    },
    {
      path:'/regisDevice',
      component:regisDevice
    }
  ],
})
