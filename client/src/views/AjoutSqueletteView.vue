<template>
  
    <div id='inscription'>
      <br><br>
      <div style="width:35%">
        <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
        <v-card elevation='4' class='cardModification'>
            <div id='formModification' >

              <v-container grid-list-lg>
                <v-layout column>

                    <label><b>Nom</b></label>
                    <v-text-field type="text" id="nom" v-model="form.nom" required class="wider-text-field"></v-text-field>

                    <v-layout row>
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Ref</b></label></v-flex>
                          <v-flex><v-text-field type="text" id="ref" v-model="form.ref" required class="wider-text-field"></v-text-field></v-flex>  
                        </v-layout>
                      </v-flex>
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Prix</b></label></v-flex>
                          <v-flex><v-text-field type='number' id='prix' v-model="form.prix" required class="wider-text-field"></v-text-field></v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Catégorie</b></label></v-flex>
                          <v-flex><v-text-field type='text' id='categorie' v-model="form.categorie" required class="wider-text-field"></v-text-field></v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Vis</b></label></v-flex>
                          <v-flex><v-select id="vis" :items="vis" v-model="form.vis" item-value="ref" item-text="nom" required></v-select></v-flex>
                        </v-layout>  
                      </v-flex>
                    </v-layout>

                    <label><b>Description</b></label>
                    <v-text-field type='text' id='description' v-model="form.description" required class="wider-text-field"></v-text-field>

                    <v-layout row>
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Rang</b></label></v-flex>
                          <v-flex><v-text-field id="rang" required></v-text-field></v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Gravure</b></label></v-flex>
                          <v-flex><v-select id="gravure" :items="gravures" v-model="form.gravure" required></v-select></v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>

                    <label><b>Image Avant</b></label>
                    <v-text-field type='text' id='imageavant' v-model="form.imageavant" required class="wider-text-field"></v-text-field>
                    <v-img v-bind:src=form.imageavant></v-img>
                    <br>

                    <label><b>Image Arrière</b></label>
                    <v-text-field type='text' id='imagearriere' v-model="form.imagearriere" required class="wider-text-field"></v-text-field>
                    <v-img v-bind:src=form.imagearriere></v-img>

                    <br>
                    <label style="align-self: center;"><b>Disponibilité</b></label>
                    <br>
                    <input type='checkbox' id='disponibilite' v-model="form.disponibilite" style="align-self: center;">
                    <br>

                    <v-btn color='green' @click="submitForm">Ajouter</v-btn>
                    
                </v-layout>
              </v-container>

            </div>
          </v-card>
      </div>
    </div>

</template>


<script>

import router from "@/router";
import {mapState,mapMutations} from "vuex";

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
  ...mapMutations(['setSquelettes']),
  validateForm() {
    if (!this.form.ref) {
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
        this.setSquelettes(this.squelettes)
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
#formModification {
margin-top: 15px;
margin-left: 9%;
margin-right: 9%;
}
.cardModification {
padding: 10px 0 20px 0;
}
input {
  width: 25px;
  height: 25px;
}
.wider-text-field{
  width:100%;
}
label{
  margin-bottom: -13px;
}
.highlight {
  background-color: rgb(236, 236, 236);
}

</style>