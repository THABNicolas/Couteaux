<template>
  
    <div id='inscription'>
      <br><br>
      <div style="width:55%">
        <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
        <v-card elevation='4' class='cardInscription'>
          <div id='formInscription' >
            <label><b>Ref</b></label>
            <v-text-field type="text" id="ref" v-model="form.ref" required class="wider-text-field"></v-text-field>
            <label><b>Nom</b></label>
            <v-text-field type="text" id="nom" v-model="form.nom" required class="wider-text-field"></v-text-field>
            <label><b>Catégorie</b></label>
            <v-text-field type='text' id='categorie' v-model="form.categorie" required class="wider-text-field"></v-text-field>
            <label><b>Image Avant</b></label>
            <v-text-field type='text' id='imageavant' v-model="form.imageavant" required class="wider-text-field"></v-text-field>
            <v-img v-bind:src=form.imageavant></v-img>
            <label><b>Image Arrière</b></label>
            <v-text-field type='text' id='imagearriere' v-model="form.imagearriere" required class="wider-text-field"></v-text-field>
            <v-img v-bind:src=form.imagearriere></v-img>
            <v-btn color='green' @click="submitForm">Création</v-btn>
          </div>
        </v-card>
      </div>
    </div>

</template>



<script>

import router from "@/router";
import {mapState} from "vuex";

export default {
name: 'CreationView',
metaInfo: {
  title: 'Creation'
},
data(){
  return {
    form: {
      ref: '',
      nom: '',
      categorie: '',
      imageavant: '',
      imagearriere: ''
    },
    errorForm:""
  }
},
computed: {
  ...mapState(['vis'])
},
methods: {
  validateForm() {
    if (!this.form.ref || !this.form.nom || !this.form.categorie || !this.form.imageavant  || !this.form.imagearriere) {
      this.errorForm = "Veuillez remplir tous les champs obligatoires";
      return false;
    }
    if (this.vis.some(obj => obj.ref === this.form.ref)) {
      this.errorForm = "Valeur de référence déja présente";
      return false;
    }
    this.errorForm="";
    return true;
  },
  submitForm() {
    if (this.validateForm()) {
        let highestId = 0;
        for (const obj of this.vis) {
            const id = parseInt(obj.id);
            if (id > highestId) {
                highestId = id;
            }
        }
        this.form.id = highestId+1
        this.vis.push(this.form)
        router.push('vis')
    }
  },
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
.wider-text-field {
  width: 55%;
}

</style>