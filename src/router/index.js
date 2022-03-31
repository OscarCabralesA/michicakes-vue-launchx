import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderView from '../views/OrderView.vue'
import RecentOrdersView from '../views/RecentOrdersView.vue'
import StockView from '../views/StockView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/hacer-pedido',
    name: 'hacer-pedido',
    component: OrderView
    // lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/pedidos-recientes', 
    name: 'pedidos-recientes', 
    component: RecentOrdersView
  }, 
  {
    path: '/stock', 
    name: 'stock', 
    component: StockView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
