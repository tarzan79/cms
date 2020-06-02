const routes = [{
  path: '/admin/nodes',
  component: () => import('layouts/AdminLayout.vue'),
  meta: {
    permission: 'owner',
    requiresAuth: true
  },
  children: [{
    path: '',
    component: () => import('boot/node/components/List.vue')
  }, {
    path: 'create',
    component: () => import('boot/node/components/Create.vue')
  }, {
    path: ':name',
    component: () => import('boot/node/components/Edit.vue')
  }, {
    path: ':name/list',
    component: () => import('boot/node/components/ListElement.vue')
  }, {
    path: ':name/item/:id',
    component: () => import('boot/node/components/EditElement.vue')
  }, {
    path: 'config',
    component: () => import('boot/node/components/List.vue')
  }]

}]

export default routes
