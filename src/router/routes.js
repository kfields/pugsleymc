const routes = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'pages', component: () => import('pages/Pages/Index.vue') },
      { path: 'images', component: () => import('pages/Images/Index.vue') },
      { path: 'users', component: () => import('pages/Users/Index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'pages/create', component: () => import('pages/Pages/Create/Index.vue'), props: true },
      { path: 'pages/:id', component: () => import('pages/Pages/Update/Index.vue'), props: true },
      { path: 'pages/:id/html', name: 'html', component: () => import('pages/Html/Index.vue'), props: true },
      { path: 'pages/:id/text', name: 'text', component: () => import('pages/Text/Index.vue'), props: true },
      { path: 'images/create', component: () => import('pages/Images/Create/Index.vue'), props: true },
      { path: 'images/:id', component: () => import('pages/Images/Update/Index.vue'), props: true },
      { path: 'imagechooser', name: 'imagechooser', component: () => import('pages/Images/Chooser/Index.vue'), props: true },
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
