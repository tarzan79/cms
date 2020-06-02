const routes = [{
  path: '/page',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
    path: ':name',
    component: () => import('boot/page/components/Read.vue')
  }]
}]

export default routes
