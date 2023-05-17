import Vue from 'vue'
import VueRouter from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import AdministrationView from '../views/AdministrationView.vue'
import CreationView from '../views/CreationView.vue'
import ModificationView from '../views/ModificationView'
import ModificationCouteauView from '../views/ModificationCouteauView'
import SquelettesView from '../views/SquelettesView'
import PlaquettesView from '../views/PlaquettesView'
import MateriauxView from '../views/MateriauxView'
import ModificationSqueletteView from '../views/ModificationSqueletteView'
import ModificationPlaquetteView from '../views/ModificationPlaquetteView'
import ModificationMateriauView from '../views/ModificationMateriauView'
import AjoutSqueletteView from '../views/AjoutSqueletteView'
import AjoutPlaquetteView from '../views/AjoutPlaquetteView'
import AjoutMateriauView from '../views/AjoutMateriauView'
import VisView from '../views/VisView'
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
  },
  {
    path: '/modificationC',
    name: 'modificationC',
    component: ModificationCouteauView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/squelettes',
    name: 'squelettes',
    component: SquelettesView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/plaquettes',
    name: 'plaquettes',
    component: PlaquettesView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/materiaux',
    name: 'materiaux',
    component: MateriauxView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/modificationSquelette',
    name: 'modificationsquelette',
    component: ModificationSqueletteView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/modificationPlaquette',
    name: 'modificationplaquette',
    component: ModificationPlaquetteView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/modificationMateriau',
    name: 'modificationmateriau',
    component: ModificationMateriauView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/ajoutSquelette',
    name: 'ajoutsquelette',
    component: AjoutSqueletteView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/ajoutPlaquette',
    name: 'ajoutplaquette',
    component: AjoutPlaquetteView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/ajoutMateriau',
    name: 'ajoutmateriau',
    component: AjoutMateriauView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/vis',
    name: 'vis',
    component: VisView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
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
