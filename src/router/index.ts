import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import formRouter from '../modules/user/router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../modules/ui/layouts/UiLayout.vue'),
    children: [
      {
        path: '',
        ...formRouter,
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../modules/ui/pages/Error404.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
