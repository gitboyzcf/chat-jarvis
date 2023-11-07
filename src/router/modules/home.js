export default [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/home.vue')
  }
]
