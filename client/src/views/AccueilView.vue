<template>
  <div class='accueil'>
    <br><br><br>

      <v-layout v-if="userConnected.role==null" justify-center>
        <div style="width:40%">
          <v-card elevation='4' class='cardConnexion'>
            <v-layout column>
              <div>Vous n' êtes pas connecté</div>
              <br>
              <router-link to="/connexion" justify-content-center>
                <v-btn  depressed color="green">Connexion</v-btn>
              </router-link>
            </v-layout> 
          </v-card>
        </div>
      </v-layout>

  </div>
</template>


<script>

import {mapMutations, mapState} from 'vuex';
import { VLayout } from 'vuetify/lib';

export default{
  name: 'AccueilView',
  metaInfo: {
    title: 'Accueil'
  },
  components: {
    VLayout
  },
  methods: {
    ...mapMutations(['setMessageCo']),
  },
  computed: {
    ...mapState(['messageCo','userConnected','url'])
  },
  beforeMount() {
    setTimeout(() => {
      this.setMessageCo("");
    }, 3000);
  },
  beforeDestroy() {
    this.setMessageCo("");
  }
}

</script>

<style scoped>
.cardConnexion {
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  margin: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>