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
import AjoutSqueletteView from '../views/AjoutSqueletteView'
import AjoutPlaquetteView from '../views/AjoutPlaquetteView'
import AjoutMateriauView from '../views/AjoutMateriauView'
import AjoutVisView from '../views/AjoutVisView'
import AjoutGravureView from '../views/AjoutGravureView'
import VisView from '../views/VisView'
import GravuresView from '../views/GravuresView'
import CouteauxView from '../views/CouteauxView'
import $cookie from "vue-cookie"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: AccueilView
  },
  {
    path: '/couteaux',
    name: 'Couteaux',
    component: CouteauxView
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: ConnexionView
  },
  {
    path: '/administration',
    name: 'Comptes',
    component: AdministrationView,
    meta: {
      authRequired: true,
      rolePermission: ["admin"]
    },
  },
  {
    path: '/creation',
    name: 'Ajouter un compte',
    component: CreationView,
    meta: {
      authRequired: true,
      rolePermission: ["admin"]
    },
  },
  {
    path: '/modification',
    name: 'Modifier un compte',
    component: ModificationView,
    meta: {
      authRequired: true,
      rolePermission: ["admin"]
    },
  },
  {
    path: '/modificationC',
    name: 'Modifier un couteau',
    component: ModificationCouteauView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/squelettes',
    name: 'Squelettes',
    component: SquelettesView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/plaquettes',
    name: 'Plaquettes',
    component: PlaquettesView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/materiaux',
    name: 'Materiaux',
    component: MateriauxView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/ajoutSquelette',
    name: 'Ajouter un squelette',
    component: AjoutSqueletteView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/ajoutPlaquette',
    name: 'Ajouter une plaquette',
    component: AjoutPlaquetteView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/ajoutMateriau',
    name: 'Ajouter un materiau',
    component: AjoutMateriauView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/vis',
    name: 'Vis',
    component: VisView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/ajoutVis',
    name: 'Ajouter un vis',
    component: AjoutVisView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/gravures',
    name: 'Gravures',
    component: GravuresView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
  {
    path: '/ajoutGravure',
    name: 'Ajouter une gravure',
    component: AjoutGravureView,
    meta: {
      authRequired: true,
      rolePermission: ["admin","utilisateur"]
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = JSON.parse($cookie.get('userAuthentificated'));
  if (to.meta.authRequired){
    if (!to.meta.rolePermission.includes(user.role)){
      next("/connexion");
    } else {
      next();
    }
  }
  next();
})

export default router
