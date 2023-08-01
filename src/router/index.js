import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from "../views/Register.vue"
import Home from "../views/Home.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"Home",
      component:Home
    },
    {
      path:"/Login",
      name:"Login",
      component:Login,
    },
    {
      path:'/Register',
      name:"Register",
      component:Register,
    }
  ]
})

export default router
