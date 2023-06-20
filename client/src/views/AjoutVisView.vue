<template>
  
    <div id='inscription'>
      <br><br>
      <v-flex style="width:35%;align-items: center;">
        <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
        <v-card elevation='4' class='cardModification'>
              <div id='formModification' >
                <label><b>Ref</b></label>
                <v-text-field style="width: 100%;" type="text" id="ref" v-model="form.ref" required class="wider-text-field"></v-text-field>
                <label><b>Nom</b></label>
                <v-text-field style="width: 100%;" type="text" id="nom" v-model="form.nom" required class="wider-text-field"></v-text-field>
                <label><b>Catégorie</b></label>
                <v-text-field style="width: 100%;" type='text' id='categorie' v-model="form.categorie" required class="wider-text-field"></v-text-field>
                <label><b>Image Avant</b></label>
                <v-text-field style="width: 100%;" type='text' id='imageavant' v-model="form.imageavant" required class="wider-text-field"></v-text-field>
                <v-img v-bind:src=form.imageavant></v-img>
                <br>
                <label><b>Image Arrière</b></label>
                <v-text-field style="width: 100%;" type='text' id='imagearriere' v-model="form.imagearriere" required class="wider-text-field"></v-text-field>
                <v-img v-bind:src=form.imagearriere></v-img>
                <br>
                <v-btn style="width: 100%;" color='green' @click="submitForm">Ajouter</v-btn>
              </div>
            </v-card>
      </v-flex>
    </div>

</template>



<script>

import router from "@/router";
import {mapMutations, mapState} from "vuex";

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
  ...mapMutations(['setVis']),
  validateForm() {
    if (!this.form.ref) {
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
        this.setVis(this.vis)
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
#formModification {
margin-top: 15px;
margin-left: 9%;
margin-right: 9%;
}
.cardModification {
padding: 10px 0 20px 0;
}
.highlight {
  background-color: rgb(236, 236, 236);
}

</style>