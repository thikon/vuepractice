import { createWebHistory, createRouter } from "vue-router";
import apps from './app'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: { name: 'sample' } },
        ...apps,
      ],
  });
export default router

