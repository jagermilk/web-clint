import { createRouter,createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes:[
    {
    path: '/',
    name: 'home',
    component: () => import('@/pages/login.vue'),
},
{
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/other/contact.vue'),
},{
    path: '/',
    name: 'home',
    component: () => import('@/pages/home.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/pages/index.vue'),
      },

      {
        path: '/detail',
        name: 'detail',
        component: () => import('@/pages/detail.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/supplier',
    name: 'supplier',
    component: () => import('@/pages/other/supplier.vue'),
  },
  {
    path: '/metallurgy',
    name: 'metallurgy',
    component: () => import('@/pages/other/metallurgy.vue'),
  },
  {
    path: '/example',
    name: 'example',
    component: () => import('@/pages/other/example.vue'),
  },
  {
    path: '/contactme',
    name: 'contactme',
    component: () => import('@/pages/other/contactme.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/order/Order.vue'), // 路由懒加载
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('../pages/order/OrderList.vue') // 路由懒加载
      },
      {
        path: 'confirm',
        name: 'confirm',
        component: () => import('../pages/order/OrderConfirm.vue') // 路由懒加载
      },
      {
        path: 'pay',
        name: 'pay',
        component: () => import('../pages/order/OrderPay.vue') // 路由懒加载
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('../pages/order/Alipay.vue') // 路由懒加载
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/pages/product/product.vue'),
    children: [
      {
        path: 'online',
        name: 'online',
        component: () => import('@/pages/product/online.vue'),
      },
      {
        path: 'techservice',
        name: 'techservice',
        component: () => import('@/pages/product/techservice.vue'),
      },
      {
        path: 'functionservice',
        name: 'functionservice',
        component: () => import('@/pages/product/functionservice.vue'),
      },
      {
        path: 'mechineservice',
        name: 'mechineservice',
        component: () => import('@/pages/product/mechineservice.vue'),
      }
    ],
  },
  {
    path: '/tech',
    name: 'tech',
    component: () => import('@/pages/tech/tech.vue'),
    children: [
      {
        path: 'addrecommonds',
        name: 'addrecommonds',
        component: () => import('@/pages/tech/addrecommonds.vue'),
      },
      {
        path: 'verifyrecommonds',
        name: 'verifyrecommonds',
        component: () => import('@/pages/tech/verifyrecommonds.vue'),
      },
      {
        path: 'recommondslist',
        name: 'recommondslist',
        component: () => import('@/pages/tech/recommondslist.vue'),
      }
    ]
  }
]

})
export default router
