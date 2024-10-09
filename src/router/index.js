import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/domains/calories/views/HomeView.vue'

const routes = [
	{ 
    path: '/',
    name: 'home', 
    component: HomeView 
  },
  { 
    path: '/create',
    name: 'create', 
    component: () => import('@/domains/calories/views/CreateView.vue') 
  },
  { 
    path: '/edit/:id',
    name: 'edit',
    component: () => import('@/domains/calories/views/EditView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router