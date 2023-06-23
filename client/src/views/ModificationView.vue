<template>
  
      <div id='modification'>
        <br><br><br><br>
        <div style="width:50%">
          <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
          <v-card elevation='4' class='cardModification'>
            <div id='formModification' >
              <label>Nom</label>
              <v-text-field type='text' id='nom' v-model="form.nom" required value="userModif.nom"></v-text-field>
              <label>Prénom</label>
              <v-text-field type='text' id='prenom' v-model="form.prenom" required></v-text-field>
              <label>Identifiant</label>
              <v-text-field type='text' id='identifiant' v-model="form.identifiant" required></v-text-field>
              <label>Rôle</label>
              <v-select :items="roles" v-model="form.role" required></v-select>
              <label>Actif</label>
              <input type='checkbox' id='actif' v-model="form.actif">
              <br>
              <v-btn color='green' @click="submitForm">Modifier</v-btn>
            </div>
          </v-card>
        </div>
      </div>

</template>
  
  

<script>

import axios from "axios";
import {mapMutations,mapState} from "vuex";

export default {
  name: 'ModificationView',
  metaInfo: {
    title: 'Modification'
  },
  data() {
    return {
      roles: [
        "utilisateur", "admin"
      ],
      form: {
        id: 0,
        nom: '',
        prenom: '',
        identifiant: '',
        actif: true,
        role: ''
      },
      errorForm: ""
    }
  },
  methods: {
    ...mapMutations(['setMessageMod']),
    ...mapMutations(['setMessageIn']),
    ...mapMutations(['setUserModif']),
    validateForm() {
      if (!this.form.nom || !this.form.prenom || !this.form.identifiant) {
        this.errorForm = "Veuillez remplir tous les champs obligatoires";
        return false;
      }
      this.errorForm = "";
      return true;
    },
    submitForm() {
      if (this.validateForm()) {
        axios.post("modification", this.form)
          .then((rep) => {
            if (rep.data.message == "Erreur de modification") {
              this.setMessageMod(rep.data.message);
            } else {
              this.setMessageMod(rep.data.message);
              this.$router.push('/administration');
            }
          })
      }
    },

  },
  computed: {
    ...mapState(['url']),
    ...mapState(['userModif'])
  },
  created() {
    this.form.id = this.userModif.id;
    this.form.nom = this.userModif.nom;
    this.form.prenom = this.userModif.prenom;
    this.form.identifiant = this.userModif.identifiant;
    this.form.actif = this.userModif.actif;
    this.form.role = this.userModif.role;
  },
  beforeDestroy() {
    this.setUserModif({});
  }
}

</script>



<style scoped>

#modification,
#formModification {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cardModification {
  border-radius: 40px;
  padding: 10px 0 20px 0;
}
input {
  width: 25px;
  height: 25px;
}

</style>