import { createRouter, createWebHistory } from 'vue-router'

import Overview from '@/domains/calories/views/Overview.vue'
import Create from '@/domains/calories/views/Create.vue'
import Edit from '@/domains/calories/views/Edit.vue'

const routes = [
	{ path: '/', component: Overview },
  { path: '/create', component: Create },
  { path: '/edit/:id', component: Edit },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router