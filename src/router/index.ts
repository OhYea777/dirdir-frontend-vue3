// Import dependencies
import { createRouter, createWebHistory } from 'vue-router';

// Import local dependencies
import HomeView from '@/views/HomeView.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
  ],
});
