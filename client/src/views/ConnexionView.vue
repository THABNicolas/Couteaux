<template>

  <div id='connexion'>
    <br><br><br><br><br>
    <div style="width:40%">
      <v-alert type="error" dense v-if="messageCo">{{messageCo}}</v-alert>
      <v-card elevation='4' class='cardConnexion'>
        <div id='formConnexion' >
          <label for='identifiant'>Identifiant</label>
          <v-text-field type='text' id='identifiant' v-model="form.identifiant"></v-text-field>
          <label for='mdp'>Mot de passe</label>
          <v-text-field type='password' id='mdp' v-model="form.mdp" @keydown="onKeyDown"></v-text-field>
          <v-btn color='green' @click="submitForm" @keyup.enter.native="submitForm">Connexion</v-btn>
        </div>
      </v-card>
    </div>
  </div>

</template>



<script>

import axios from "axios";
import {mapMutations,mapState} from "vuex";

export default {
  name: 'ConnexionView',
  metaInfo: {
    title: 'Connexion'
  },
  data(){
    return {
      form: {
        identifiant: '',
        mdp: ''
      },
      error:""
    }
  },
  methods: {
    ...mapMutations(['setUserConnected']),
    ...mapMutations(['setMessageCo']),
    ...mapMutations(['setNav']),
    onKeyDown(event) {
      if (event.keyCode === 13) {
        this.submitForm();
      }
    },
    submitForm() {
      axios.post(this.url+"connexion", this.form)
          .then((rep) => {
            this.setMessageCo(rep.data.message);
            if (rep.data.utilisateur){
              this.setUserConnected(rep.data.utilisateur);
              this.$cookie.set('userAuthentificated', JSON.stringify(rep.data.utilisateur), {expires:'10000s'});
              this.setNav(false);
              this.$router.push('/');
            }
          })
    }
  },
  computed: {
    ...mapState(['messageCo']),
    ...mapState(['url']),
    ...mapState(['userConnected'])
  }
};

</script>



<style>

#connexion,
#formConnexion {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cardConnexion {
  border-radius: 40px;
  padding: 10px 0 20px 0;
}

</style>