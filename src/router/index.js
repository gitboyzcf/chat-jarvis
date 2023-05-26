import { createRouter, createWebHistory } from 'vue-router'
import { modulesHandle } from '@/utils'
import { usePageTitle } from './helper'

import { constantRoutes, lastRoute } from './constantRoutes'

const routes = modulesHandle(import.meta.glob('./modules/**/*.js', { eager: true }))
const router = createRouter({
  base: 'chat-jarvis',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...constantRoutes, ...routes, lastRoute]
})

router.beforeEach((to, from, next) => {
  usePageTitle(to)
  next()
})

export default router
