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
    setVis(state, vis){
        state.vis = vis;
    },
    setSquelettes(state, squelettes){
        state.squelettes = squelettes;
    },
    setPlaquettes(state, plaquettes){
        state.plaquettes = plaquettes;
    },
    setMateriaux(state, materiaux){
        state.materiaux = materiaux;
    },
    setGravures(state, gravures){
        state.gravures = gravures;
    },
  }
})
