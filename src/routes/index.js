/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/pages/Home/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Source
  {
    path: '/source',
    name: 'source.index',
    component: () => import('@/pages/Source/Index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },
  // Headline
  {
    path: '/headline',
    name: 'headline.index',
    component: () => import('@/pages/Headline/Index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },
  // Share
  {
    path: '/share',
    name: 'share.index',
    component: () => import('@/pages/Share/Index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/pages/Login/Index'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/pages/Register/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
