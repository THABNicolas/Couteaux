<template>
  
    <div id='inscription'>
      <br><br>
      <div style="width:55%">
        <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
        <v-card elevation='4' class='cardInscription'>
          <div id='formInscription' >
            <label><b>Ref</b></label>
            <v-text-field type='text' id='ref' v-model="form.ref" required class="wider-text-field"></v-text-field>
            <label><b>Nom</b></label>
            <v-text-field type='text' id='nom' v-model="form.nom" required class="wider-text-field"></v-text-field>
            <label><b>Prix</b></label>
            <v-text-field type='number' id='prix' v-model="form.prix" required class="wider-text-field"></v-text-field>
            <label><b>Catégorie</b></label>
            <v-text-field type='text' id='categorie' v-model="form.categorie" required class="wider-text-field"></v-text-field>
            <label><b>Vis</b></label>
            <v-select id="vis" v-model="form.vis" :items="vis" item-value="ref" item-text="nom" required></v-select>
            <label><b>Description</b></label>
            <v-text-field type='text' id='description' v-model="form.description" required class="wider-text-field"></v-text-field>
            <label><b>Gravure</b></label>
            <v-select id="gravure" :items="gravures" v-model="form.gravure" required></v-select>
            <label><b>Disponibilite</b></label>
            <br>
            <input type='checkbox' id='disponibilite' v-model="form.disponibilite">
            <br>
            <label><b>Image Avant</b></label>
            <v-text-field type='text' id='imageavant' v-model="form.imageavant" required class="wider-text-field"></v-text-field>
            <label><b>Image Arrière</b></label>
            <v-text-field type='text' id='imagearriere' v-model="form.imagearriere" required class="wider-text-field"></v-text-field>
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
      prix: '',
      categorie: '',
      vis: '',
      description: '',
      gravure: '',
      disponibilite: true,
      imageavant: '',
      imagearriere: ''
    },
    errorForm:"",
    gravures: [
      'LF',
      'LC'
    ]
  }
},
computed: {
  ...mapState(['url']),
  ...mapState(['squelettes']),
  ...mapState(['vis'])
},
methods: {
  validateForm() {
    if (!this.form.ref || !this.form.nom || !this.form.prix || !this.form.categorie || !this.form.description || !this.form.gravure  || !this.form.imageavant  || !this.form.imagearriere) {
      this.errorForm = "Veuillez remplir tous les champs obligatoires";
      return false;
    }
    if (this.squelettes.some(obj => obj.ref === this.form.ref)) {
      this.errorForm = "Valeur de référence déja présente";
      return false;
    }
    this.errorForm="";
    return true;
  },
  submitForm() {
    if (this.validateForm()) {
        let highestId = 0;
        for (const obj of this.squelettes) {
            const id = parseInt(obj.id);
            if (id > highestId) {
                highestId = id;
            }
        }
        this.form.id = highestId+1
        let plusHauteValeur = 0;
        for (const obj of this.squelettes) {
            const r = parseInt(obj.rang);
            if (r > plusHauteValeur) {
                plusHauteValeur = r;
            }
        }
        this.form.rang = plusHauteValeur+1
        this.squelettes.push(this.form)
        router.push('squelettes')
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
input {
  width: 25px;
  height: 25px;
}

</style>