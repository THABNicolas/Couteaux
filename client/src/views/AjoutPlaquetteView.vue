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
            <label><b>Categorie</b></label>
            <v-text-field type='text' id='categorie' v-model="form.categorie" required class="wider-text-field"></v-text-field>
            <label><b>Description</b></label>
            <v-text-field type='text' id='description' v-model="form.description" required class="wider-text-field"></v-text-field>
            <label><b>Disponibilite</b></label>
            <br>
            <input type='checkbox' id='disponibilite' v-model="form.disponibilite">
            <br>
            <label><b>Rang</b></label>
            <v-text-field type='number' id='rang' v-model="form.rang" required class="wider-text-field"></v-text-field>
            <label><b>Image</b></label>
            <v-text-field type='text' id='image' v-model="form.image" required class="wider-text-field"></v-text-field>
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
      description: '',
      disponibilite: true,
      rang: '',
      image: ''
    },
    errorForm:""
  }
},
computed: {
  ...mapState(['url']),
  ...mapState(['plaquettes'])
},
methods: {
  validateForm() {
    if (!this.form.ref || !this.form.nom || !this.form.categorie || !this.form.description || !this.form.rang || !this.form.image) {
      this.errorForm = "Veuillez remplir tous les champs obligatoires";
      return false;
    }
    this.errorForm="";
    return true;
  },
  submitForm() {
    if (this.validateForm()) {
        let highestId = 0;
        for (const obj of this.plaquettes) {
            const id = parseInt(obj.id);
            if (id > highestId && id != 99) {
                highestId = id;
            }
        }
        this.form.id = highestId+1
        this.plaquettes.push(this.form)
        router.push('plaquettes')
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