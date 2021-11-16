import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcart = () => import('../views/shopcart/Shopcart')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
