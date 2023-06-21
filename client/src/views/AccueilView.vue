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
      <v-layout v-else justify-center>
        <v-card style="width: 25%;margin-top: 2%;" elevation='4' class='cardConnexion'>
          <router-link to="/squelettes" justify-content-center>
            <v-card style="margin-top: 10%;" elevation='4' class='cardConnexion'>
              <v-btn  depressed color="white">Squelettes</v-btn>
            </v-card>
          </router-link>
          <router-link to="/plaquettes" justify-content-center>
            <v-card style="margin-top: 10%;" elevation='4' class='cardConnexion'>
              <v-btn  depressed color="white">Types de plaquettes</v-btn>
            </v-card>
          </router-link>
          <router-link to="/materiaux" justify-content-center>
            <v-card style="margin-top: 10%;" elevation='4' class='cardConnexion'>
              <v-btn  depressed color="white">Plaquettes matières</v-btn>
            </v-card>
          </router-link>
          <router-link to="/vis" justify-content-center>
            <v-card style="margin-top: 20%;margin-bottom: 10%;" elevation='4' class='cardConnexion'>
              <v-btn  depressed color="white">Vis</v-btn>
            </v-card>
          </router-link>
          <router-link to="/gravures" justify-content-center>
            <v-card style="margin-top: 10%;margin-bottom: 10%;" elevation='4' class='cardConnexion'>
              <v-btn  depressed color="white">Gravures</v-btn>
            </v-card>
          </router-link>
        </v-card>
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