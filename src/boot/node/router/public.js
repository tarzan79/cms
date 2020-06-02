const routes = [{
  path: '/nodes',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
    path: ':name',
    component: () => import('boot/node/components/Read.vue')
  }]
}]

export default routes
