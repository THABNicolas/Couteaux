<template>
  
      <div id='inscription'>
        <br><br><br><br>
        <div style="width:50%">
          <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
          <v-card elevation='4' class='cardInscription'>
            <div id='formInscription' >
              <label>Nom</label>
              <v-text-field type='text' id='nom' v-model="form.nom" required></v-text-field>
              <label>Prénom</label>
              <v-text-field type='text' id='prenom' v-model="form.prenom" required></v-text-field>
              <label>Identifiant</label>
              <v-text-field type='text' id='identifiant' v-model="form.identifiant" required></v-text-field>
              <label>Mot de passe</label>
              <v-text-field type='text' id='mdp' v-model="form.mdp" required></v-text-field>
              <label>Rôle</label>
              <v-select :items="roles" v-model="form.role" required></v-select>
              <v-btn color='green' @click="submitForm">Création</v-btn>
            </div>
          </v-card>
        </div>
      </div>

</template>
  
  
<script>
  
import axios from "axios";
import {mapMutations,mapState} from "vuex";
  
export default {
  name: 'CreationView',
  metaInfo: {
    title: 'Creation'
  },
  data(){
    return {
      roles: [
        "utilisateur","admin"
      ],
      form: {
        nom: '',
        prenom: '',
        identifiant: '',
        mdp: '',
        actif: true,
        role: ''
      },
      errorForm:""
    }
  },
  methods: {
    ...mapMutations(['setMessageIn']),
    ...mapMutations(['setMessageMod']),
    validateForm() {
      if (!this.form.nom || !this.form.prenom || !this.form.identifiant || !this.form.mdp || !this.form.role) {
        this.errorForm = "Veuillez remplir tous les champs obligatoires";
        return false;
      }
      this.errorForm="";
      return true;
    },
    submitForm() {
      if (this.validateForm()) {
        axios.post(this.url+"inscription", this.form)
            .then((rep) => {
              if (rep.data.message=="Erreur de création"){
                this.setMessageIn(rep.data.message);
              }
              else {
                this.setMessageIn(rep.data.message);
                this.$router.push('/administration');
              }
            })
      }
    },
  },
  computed: {
    ...mapState(['url']),
  }
}

</script>



<style scoped>

#inscription,
#formInscription {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cardInscription {
  border-radius: 40px;
  padding: 10px 0 20px 0;
}

</style>