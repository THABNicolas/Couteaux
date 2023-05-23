<template>
  <v-app>
    <NavBar />
    <router-view />
  </v-app>
</template>

<script>

import { mapMutations } from 'vuex';
import NavBar from './components/NavBar.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods:{
    ...mapMutations(['setUserConnected','setSquelettes','setPlaquettes','setMateriaux','setVis','setGravures']),
  },
  created(){
    this.setUserConnected({role:null});
    if(JSON.parse(this.$cookie.get('userAuthentificated'))!=null && JSON.parse(this.$cookie.get('userAuthentificated'))!=undefined){
      this.setUserConnected(JSON.parse(this.$cookie.get('userAuthentificated')));
    }
    axios.get('https://cdn.shopify.com/s/files/1/0685/6458/2668/files/squelettes.json')
        .then((rep) => {
          this.setSquelettes(rep.data);
          console.log(rep.data)
        })
    axios.get('https://cdn.shopify.com/s/files/1/0685/6458/2668/files/plaquettes.json')
        .then((rep) => {
          this.setPlaquettes(rep.data);
        })
    axios.get('https://cdn.shopify.com/s/files/1/0685/6458/2668/files/plaquettesmatieres.json')
        .then((rep) => {
          this.setMateriaux(rep.data);
        })
    axios.get('https://cdn.shopify.com/s/files/1/0685/6458/2668/files/vis.json')
        .then((rep) => {
          this.setVis(rep.data);
        })
    axios.get('https://cdn.shopify.com/s/files/1/0685/6458/2668/files/gravures.json')
        .then((rep) => {
          this.setGravures(rep.data);
        })    
  }
};

</script>