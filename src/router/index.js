import { createRouter, createWebHistory } from 'vue-router'

/* NAVIGATION */
import MainNav from '@/components/navigation/MainNav.vue'

/* COMPONENTS */
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        navigation: MainNav,
      },
      meta: {
        title: 'Jerick Dela Rosa',
      }
    },
    {
      path: '/helloworld',
      name: 'hello-world',
      // route level code-splitting
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HelloWorldView.vue'),
      meta: {
        title: 'Hello World',
      }
    },
    {
      path: '/:catchAll(.*)*',
      name: 'page-not-found',
      component: () => import('../views/errors/PageNotFound.vue'),
      meta: {
        title: 'Page Not Found'
      }
    }
  ],

})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Online Portfolio`

  next()

})

export default router