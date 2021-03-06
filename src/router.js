import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Members from './views/Members.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
      meta: { requiresAuth: true }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})


router.beforeEach((to, from, next) => {
  let routerAuthCheck = true;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.


    if(routerAuthCheck) {
      //user is Authenticated
      //TODO: commit to store that the user Authenticated
      next();
    } else {
      //user not Authenticated
      router.replace('/login')
    }

    // if (!auth.loggedIn()) {
    //   next({
    //     path: '/login',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }
  } else {
    next() // make sure to always call next()!
  }
})


export default router;