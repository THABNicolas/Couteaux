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

import {mapState} from 'vuex';

export default{
  name: 'AccueilView',
  metaInfo: {
    title: 'Accueil'
  },
  computed: {
    ...mapState(['userConnected']),
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