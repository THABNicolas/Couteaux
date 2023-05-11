<template>
  <v-app>
    <NavBar />
    <router-view />
  </v-app>
</template>

<script>

import { mapMutations } from 'vuex';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods:{
    ...mapMutations(['setUserConnected'])
  },
  created(){
    this.setUserConnected({role:null});
    if(JSON.parse(this.$cookie.get('userAuthentificated'))!=null && JSON.parse(this.$cookie.get('userAuthentificated'))!=undefined){
      this.setUserConnected(JSON.parse(this.$cookie.get('userAuthentificated')));
    }
  }
};

</script>