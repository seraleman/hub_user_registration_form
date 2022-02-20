import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import formRouter from '../modules/form/router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../modules/form/layouts/FormLayout.vue'),
    children: [
      {
        path: '',
        ...formRouter,
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../modules/form/pages/Error404.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
