<template>
  
    <div id='modification'>
      <br><br><br>
      <div style="width:70%">
        <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
        <v-card elevation='4' class='cardModification'>
          <div id='formModification' >
            <label>Catégorie</label>
            <v-text-field type='text' id='categorie' v-model="form.categorie" required class="wider-text-field"></v-text-field>
            <label>Matière</label>
            <v-text-field type='text' id='matiere' v-model="form.matiere" required class="wider-text-field"></v-text-field>
            <label>Type</label>
            <v-text-field type='text' id='type' v-model="form.type" required class="wider-text-field"></v-text-field>
            <label>Ref</label>
            <v-text-field type='text' id='ref' v-model="form.ref" required class="wider-text-field"></v-text-field>
            <label>Nom</label>
            <v-text-field type='text' id='nom' v-model="form.nom" required class="wider-text-field"></v-text-field>
            <label>Prix</label>
            <v-text-field type='text' id='prix' v-model="form.prix" required class="wider-text-field"></v-text-field>
            <label>Rang</label>
            <v-text-field type='text' id='rang' v-model="form.rang" required class="wider-text-field"></v-text-field>
            <label>Image</label>
            <v-text-field type='text' id='image' v-model="form.image" required class="wider-text-field"></v-text-field>
            <label>Image Arrière</label>
            <v-text-field type='text' id='imageArriere' v-model="form.imageArriere" required class="wider-text-field"></v-text-field>
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
name: 'ModificationMateriauView',
metaInfo: {
  title: 'Modification'
},
data() {
  return {
    form: {
      categorie: '',
      matiere: '',
      type: '',
      ref: '',
      nom: '',
      prix: '',
      rang: '',
      id: '',
      image: '',
      imageArriere: ''
    },
    errorForm: ""
  }
},
methods: {
  ...mapMutations(['setMateriauModif']),
  validateForm() {
    if (!this.form.categorie || !this.form.matiere || !this.form.type || !this.form.ref || !this.form.nom || !this.form.prix || !this.form.rang || !this.form.image || !this.form.imageArriere ) {
      this.errorForm = "Veuillez remplir tous les champs obligatoires";
      return false;
    }
    this.errorForm = "";
    return true;
  },
  submitForm() {
    if (this.validateForm()) {
      const targetid = this.form.id;
      const index = this.materiaux.findIndex(p => p.id === targetid);
      if (index !== -1) {
        this.materiaux[index] = this.form;
      }
      router.push('materiaux');
    }
  }
},
computed: {
  ...mapState(['url']),
  ...mapState(['materiauModif']),
  ...mapState(['materiaux'])
},
created() {
    this.form.categorie = this.materiauModif.categorie
    this.form.matiere = this.materiauModif.matiere
    this.form.type = this.materiauModif.type
    this.form.ref = this.materiauModif.ref
    this.form.nom = this.materiauModif.nom
    this.form.prix = this.materiauModif.prix
    this.form.rang = this.materiauModif.rang
    this.form.id = this.materiauModif.id
    this.form.image = this.materiauModif.image
    this.form.imageArriere = this.materiauModif.imageArriere
},
beforeDestroy() {
  this.setMateriauModif({});
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