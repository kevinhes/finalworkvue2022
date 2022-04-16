import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/frontviews/LandingPage.vue'),
        meta: {
          title: '首頁',
          requiresAuth: true,
        },
      },
      {
        path: 'about',
        component: () => import('../views/frontviews/AboutView.vue'),
        meta: {
          title: '關於',
          requiresAuth: true,
        },
      },
      {
        path: 'episodes/:category',
        component: () => import('../views/frontviews/EpisodesView.vue'),
        meta: {
          title: '節目列表',
          requiresAuth: true,
        },
      },
      {
        path: 'episode/:id',
        component: () => import('../views/frontviews/EpisodeView.vue'),
        meta: {
          title: '詳細節目',
          requiresAuth: true,
        },
      },
      {
        path: 'sponsorus',
        component: () => import('../views/frontviews/SponsorusView.vue'),
        meta: {
          title: '贊助',
          requiresAuth: true,
        },
      },
      {
        path: 'customerorder',
        component: () => import('../views/frontviews/CustomerOrder.vue'),
        meta: {
          title: '結帳頁面',
          requiresAuth: true,
        },
      },
      {
        path: 'orderfinish',
        component: () => import('../views/frontviews/OrderFinish.vue'),
        meta: {
          title: '結帳完成',
          requiresAuth: true,
        },
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/frontviews/NotFound.vue'),
      },
    ],
  },
  {
    path: '/loginpage',
    component: () => import('../views/dashboard/LoginView.vue'),
    meta: {
      title: '後臺登入',
      requiresAuth: true,
    },
  },
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/dashboard/AdminProduct.vue'),
        meta: {
          title: '產品列表',
          requiresAuth: true,
        },
      },
      {
        path: '/order',
        component: () => import('../views/dashboard/OrderView.vue'),
        meta: {
          title: '訂單管理',
          requiresAuth: true,
        },
      },
      {
        path: '/imageupload',
        component: () => import('../views/dashboard/ImageUpload.vue'),
        meta: {
          title: '圖片上傳',
          requiresAuth: true,
        },
      },
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'navbar-active',
});

export default router;
