import Vue from 'vue'
import VueRouter from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import AdministrationView from '../views/AdministrationView.vue'
import CreationView from '../views/CreationView.vue'
import ModificationView from '../views/ModificationView'
import $cookie from "vue-cookie"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: AccueilView
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: ConnexionView
  },
  {
    path: '/administration',
    name: 'administration',
    component: AdministrationView,
    meta: {
      authRequired: true,
      rolePermission: ["admin"]
    },
  },
  {
    path: '/creation',
    name: 'creation',
    component: CreationView,
    meta: {
      authRequired: true,
      rolePermission: ["admin"]
    },
  },
  {
    path: '/modification',
    name: 'modification',
    component: ModificationView,
    meta: {
      authRequired: true,
      rolePermission: ["admin"]
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = JSON.parse($cookie.get('userAuthentificated'));
  if (to.meta.authRequired){
    if (!to.meta.rolePermission.includes(user.role)){ // Si personne authentifié n'a pas les permissions de la page
      next("/connexion");
    } else {
      next();
    }
  }
  next();
})

export default router
