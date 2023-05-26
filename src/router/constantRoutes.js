export const constantRoutes = [
  // {
  //   path: '/',
  //   name: 'index'
  // }
]
export const lastRoute = {
  path: '/:pathMatch(.*)*',
  component: () => import('@/views/404/404.vue'),
  meta: {
    title: '找不到页面'
  }
}
