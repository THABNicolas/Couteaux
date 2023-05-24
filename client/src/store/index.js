import Vue from 'vue'
import Vuex, { mapState } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    url:"http://localhost:3000/",
    userConnected:{role:null},
    messageCo:"",
    comptes:[],
    userModif:null,
    messageIn:"",
    messageMod:"",
    nav:false,
    couteauModif:{},
    squeletteModif: {},
    plaquetteModif: {},
    materiauModif: {},
    squelettes: [],
    plaquettes: [],
    materiaux: [],
    vis: [],
    gravures: []
  }),
  mutations: {
    setUserConnected(state, user){
      state.userConnected = user;
    },
    setMessageCo(state, messageCo){
      state.messageCo = messageCo;
    },
    setComptes(state, comptes){
      state.comptes = comptes;
    },
    setUserModif(state, compte){
      state.userModif = compte;
    },
    setMessageIn(state, messageIn){
      state.messageIn = messageIn;
    },
    setMessageMod(state, messageMod){
      state.messageMod = messageMod;
    },
    setNav(state, nav){
      state.nav = nav;
    },
    setCouteauModif(state, couteau){
      state.couteauModif = couteau;
    },
    setSquelettes(state, squelettes){
        state.squelettes = squelettes.sort(sortRank);
    },
    setPlaquettes(state, plaquettes){
        state.plaquettes = plaquettes.sort(sortRank);
    },
    setMateriaux(state, materiaux){
        state.materiaux = materiaux.sort(sortMat(state.plaquettes));
    },
    setVis(state, vis){
      state.vis = vis;
    },
    setGravures(state, gravures){
        state.gravures = gravures;
    },
  },
  computed:{
    ...mapState(['plaquettes'])
  }
})

function sortRank(p1,p2){
  return p1.rang - p2.rang;
}

function sortMat(plaquettes){
  return function(p1,p2){
    // Priorité : type
    const typePriorities = {};
    plaquettes.forEach((plaquette) => {
      typePriorities[plaquette.ref] = plaquette.rang;
    });
    const typePriority1 = typePriorities[p1.type];
    const typePriority2 = typePriorities[p2.type];
    if (typePriority1 !== typePriority2) {
      return typePriority1 - typePriority2;
    }
    // Priorité : categorie
    const categoriePriorities = { Métaux: 0, Bois: 1, Résine: 2, Carbone: 3, "": 4 };
    const categoriePriority1 = categoriePriorities[p1.categorie];
    const categoriePriority2 = categoriePriorities[p2.categorie];
    if (categoriePriority1 !== categoriePriority2) {
      return categoriePriority1 - categoriePriority2;
    }
    // Priorité : rang
    return p1.rang - p2.rang;
  }
}