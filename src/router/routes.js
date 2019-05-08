const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: 'pages', component: () => import('pages/Pages/Index.vue') },
      { path: 'images', component: () => import('pages/Images/Index.vue') },
      { path: 'users', component: () => import('pages/Users/Index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: 'pages/create', component: () => import('pages/Pages/Create/Index.vue'), props: true },
      { path: 'pages/:id', component: () => import('pages/Pages/Update/Index.vue'), props: true },
      { path: 'images/create', component: () => import('pages/Images/Create/Index.vue'), props: true },
      { path: 'images/:id', component: () => import('pages/Images/Update/Index.vue'), props: true },
      { path: 'html', name: 'html', component: () => import('pages/Html/Index.vue'), props: true },
      { path: 'text', component: () => import('pages/Text/Index.vue') },
      { path: 'users/:id', component: () => import('pages/Users/Update/Index.vue'), props: true }
    ]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
