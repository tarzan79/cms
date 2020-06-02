const routes = [{
  path: '/admin/pages',
  component: () => import('layouts/AdminLayout.vue'),
  meta: {
    permission: 'owner',
    requiresAuth: true
  },
  children: [{
    path: '',
    component: () => import('boot/page/components/List.vue')
  }, {
    path: 'create',
    component: () => import('boot/page/components/Create.vue')
  }, {
    path: ':title',
    component: () => import('boot/page/components/Edit.vue')
  }, {
    path: 'config',
    component: () => import('boot/page/components/List.vue')
  }]

}]

export default routes
