import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/about',
        component: () => import('../views/About.vue'),
      },
      {
        path: '/episode',
        component: () => import('../views/EpisodeView.vue'),
      },
      {
        path: '/sponsorus',
        component: () => import('../views/SponsorusView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
