import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('../view/main-app.vue'),
  },
  {
    path: '/react-app',
    component: () => import('../view/react-app.vue'),
  },
];

const router = (basename = '') => createRouter({
  history: createWebHistory(basename),
  routes,
});

export default router;
