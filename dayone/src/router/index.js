import { createWebHistory, createRouter } from "vue-router";
import apps from './routes/apps'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: { name: 'sample' } },
        ...apps,
      ],
  });

export default router