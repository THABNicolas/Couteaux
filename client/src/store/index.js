import Vue from 'vue'
import Vuex from 'vuex'

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
        state.materiaux = materiaux;
    },
    setVis(state, vis){
      state.vis = vis;
    },
    setGravures(state, gravures){
        state.gravures = gravures;
    },
  }
})

function sortRank(p1,p2){
  return p1.rang - p2.rang;
}