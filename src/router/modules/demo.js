export default [
  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: '演示页面'
    },
    component: () => import('@/views/demo/index.vue')
  }
]
