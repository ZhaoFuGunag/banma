import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/mudi',
    name: 'mudi',
    component: () => import(/* webpackChunkName: "about" */ '../views/MuDi.vue')
  },
  // {
  //   path: '/dingzhi',
  //   name: 'dingzhi',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/DingZhi.vue')
  // },
  {
    path: '/found',
    name: 'found',
    component: () => import(/* webpackChunkName: "about" */ '../views/Found.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "about" */ '../views/My.vue')
  },
  {
    path: '/twopage',
    name: 'twopage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Twopage.vue')
  },
  {
    path: '/detal',
    name: 'detal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detal.vue')
  },
  {
    path: '/two',
    name: 'two',
    component: () => import(/* webpackChunkName: "about" */ '../views/Two1.vue')
  },
  {
    path: '/mudidetail',
    name: 'mudidetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/MuDiDetail.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/order',
    name: 'order',
    redirect: "/order/sishengzi",
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue'),
    children: [
      {
        path: 'sishengzi',
        name: 'sishengzi',
        component: () => import('../views/SiShengZi.vue')
      },
      {
        path: 'erzi',
        name: 'erzi',
        component: () => import('../views/QiYe.vue')
      },

    ]
  },
  {
    path: '/person',
    name: 'person',
    component: () => import(/* webpackChunkName: "about" */ '../views/Person.vue')
  },
  {
    path: '/founddetail',
    name: 'founddetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fode.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
