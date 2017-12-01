import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import driver from '@/components/driver'
import tms from '@/components/tms'
import service from '@/components/service'
import recruit from '@/components/recruit'
import contact from '@/components/contact'
import ypTms from '@/components/ypTms'
import download from '@/components/download'
import news from '@/components/news'

Vue.use(Router);

export default new Router({
  /*mode : 'history',*/
  routes: [
    {
      path: '/',
      redirect : '/tms',
    },
    /*{
      path: '/home',
      name: 'Home',
      component: home
    },*/
    {
      path: '/ypTms',
      name: 'YpTms',
      component: ypTms
    },
    {
      path: '/about',
      name: 'About',
      component: about
    },
    {
      path: '/driver',
      name: 'Driver',
      component: driver
    },
    {
      path: '/tms',
      name: 'Tms',
      component: tms
    },
    {
      path: '/service',
      name: 'Service',
      component: service
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: recruit
    },
    {
      path: '/contact',
      name: 'Contact',
      component: contact
    },
    {
      path: '/download',
      name: 'Download',
      component: download
    },
    {
      path: '/news',
      name: 'News',
      component: news
    }
  ],
  scrollBehavior (to, from, savedPosition){
      return {x : 0, y : 0}
  }
})


