<template>
  
    <div id='modification'>
      <br><br><br>
      <div style="width:70%">
        <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
        <v-card elevation='4' class='cardModification'>
          <div id='formModification' >
            <label>Ref</label>
            <v-text-field type='text' id='ref' v-model="form.ref" required class="wider-text-field"></v-text-field>
            <label>Nom</label>
            <v-text-field type='text' id='nom' v-model="form.nom" required class="wider-text-field"></v-text-field>
            <label>Catégorie</label>
            <v-text-field type='text' id='categorie' v-model="form.categorie" required class="wider-text-field"></v-text-field>
            <label>Description</label>
            <v-text-field type='text' id='description' v-model="form.description" required class="wider-text-field"></v-text-field>
            <label>Disponibilité</label>
            <br>
            <input type='checkbox' id='disponibilite' v-model="form.disponibilite">
            <br>
            <label>Rang</label>
            <v-text-field type='text' id='rang' v-model="form.rang" required class="wider-text-field"></v-text-field>
            <label>Image</label>
            <v-text-field type='text' id='image' v-model="form.image" required class="wider-text-field"></v-text-field>
            <v-btn color='green' @click="submitForm">Modifier</v-btn>
          </div>
        </v-card>
      </div>
    </div>

</template>



<script>

import router from "@/router";
import {mapMutations,mapState} from "vuex";

export default {
name: 'ModificationPlaquetteView',
metaInfo: {
  title: 'Modification'
},
data() {
  return {
    form: {
      ref: '',
      nom: '',
      categorie: '',
      description: '',
      disponibilite: '',
      rang: '',
      id: '',
      image: ''
    },
    errorForm: ""
  }
},
methods: {
  ...mapMutations(['setPlaquetteModif']),
  validateForm() {
    if (!this.form.ref || !this.form.nom || !this.form.categorie || !this.form.description || !this.form.rang || !this.form.image) {
      this.errorForm = "Veuillez remplir tous les champs obligatoires";
      return false;
    }
    this.errorForm = "";
    return true;
  },
  submitForm() {
    if (this.validateForm()) {
      const targetid = this.form.id;
      const index = this.plaquettes.findIndex(p => p.id === targetid);
      if (index !== -1) {
        this.plaquettes[index] = this.form;
      }
      router.push('plaquettes');
    }
  }
},
computed: {
  ...mapState(['url']),
  ...mapState(['plaquetteModif']),
  ...mapState(['plaquettes'])
},
created() {
  this.form.ref = this.plaquetteModif.ref
  this.form.nom = this.plaquetteModif.nom
  this.form.categorie = this.plaquetteModif.categorie
  this.form.description = this.plaquetteModif.description
  this.form.disponibilite = this.plaquetteModif.disponibilite
  this.form.rang = this.plaquetteModif.rang
  this.form.id = this.plaquetteModif.id
  this.form.image = this.plaquetteModif.image
},
beforeDestroy() {
  this.setPlaquetteModif({});
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
.wider-text-field {
  width: 625px; /* Adjust the width as per your requirement */
}
input {
  width: 25px;
  height: 25px;
}

</style>