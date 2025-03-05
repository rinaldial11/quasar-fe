const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'dashboard',
        component: () => import('pages/ContentPages/DashboardPage.vue'),
      },
      {
        path: 'profile',
        component: () => import('pages/ContentPages/ProfilePage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: 'register',
        component: () => import('pages/AuthPages/RegisterPage.vue'),
      },
      {
        path: 'login',
        component: () => import('pages/AuthPages/LoginPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
