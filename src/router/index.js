import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/LandingPage.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/About.vue'),
      },
      {
        path: 'episodes/:category',
        component: () => import('../views/EpisodesView.vue'),
      },
      {
        path: 'episode/:id',
        component: () => import('../views/EpisodeView.vue'),
      },
      {
        path: 'sponsorus',
        component: () => import('../views/SponsorusView.vue'),
      },
      {
        path: 'customerorder',
        component: () => import('../views/CustomerOrder.vue'),
      },
    ],
  },
  {
    path: '/loginpage',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/AdminProduct.vue'),
      },
      {
        path: '/order',
        component: () => import('../views/OrderView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
