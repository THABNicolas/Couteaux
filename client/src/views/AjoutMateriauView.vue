<template>
  
    <div id='inscription'>
      <br><br>
      <div style="width:70%">
        <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
        <v-card elevation='4' class='cardInscription'>
          <div id='formInscription' >
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
      categorie: '',
      matiere: '',
      type: '',
      ref: '',
      nom: '',
      prix: '',
      rang: '',
      image: '',
      imageArriere: ''
    },
    errorForm:""
  }
},
computed: {
  ...mapState(['url']),
  ...mapState(['materiaux'])
},
methods: {
  validateForm() {
    if (!this.form.categorie || !this.form.matiere || !this.form.type || !this.form.ref || !this.form.nom || !this.form.prix || !this.form.rang || !this.form.image || !this.form.imageArriere) {
      this.errorForm = "Veuillez remplir tous les champs obligatoires";
      return false;
    }
    this.errorForm="";
    return true;
  },
  submitForm() {
    if (this.validateForm()) {
        let highestId = 0;
        for (const obj of this.materiaux) {
            const id = parseInt(obj.id);
            if (id > highestId) {
                highestId = id;
            }
        }
        this.form.id = highestId+1
        this.materiaux.push(this.form)
        router.push('materiaux')
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
  width: 625px; /* Adjust the width as per your requirement */
}
input {
  width: 25px;
  height: 25px;
}

</style>