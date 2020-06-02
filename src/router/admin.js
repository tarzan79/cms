const routes = [{
  path: '/admin',
  component: () => import('layouts/AdminLayout.vue'),
  // beforeEnter: 'requireAuth',
  meta: {
    permission: 'owner',
    requiresAuth: true
  },
  children: [{
    path: '',
    component: () => import('pages/admin/Index')
  }, {
    path: 'home',
    component: () => import('pages/admin/Index')
  }, {
    path: 'config',
    component: () => import('pages/admin/Config')
  }, {
    path: 'profile',
    component: () => import('pages/admin/Profile')
  }, {
    path: 'design/theme',
    component: () => import('pages/admin/Theme')
  }, {
    path: 'design/menu',
    component: () => import('pages/admin/MenuEditor')
  }]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404')
  })
}

export default routes
