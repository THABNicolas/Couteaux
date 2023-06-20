<template>
  
    <div id='inscription'>
      <br><br>
      <div style="width:55%">
        <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
        <v-card elevation='4' class='cardModification'>
              <div id='formModification' >
  
                <v-container grid-list-lg>
                  <v-layout column>

                      <label><b>Nom</b></label>
                      <v-text-field type="text" id="nom" v-model="form.nom" required class="wider-text-field"></v-text-field>
  
                      <v-layout row>
                        <v-flex style="width: 50%;">
                          <v-layout column>
                            <v-flex style="margin-bottom: -25px;"><label><b>Ref</b></label></v-flex>
                            <v-flex><v-text-field type="text" id="ref" v-model="form.ref" required class="wider-text-field"></v-text-field></v-flex>  
                          </v-layout>
                        </v-flex>
                        <v-flex style="width: 50%;">
                          <v-layout column>
                            <v-flex style="margin-bottom: -25px;"><label><b>Prix</b></label></v-flex>
                            <v-flex><v-text-field type='number' id='prix' v-model="form.prix" required class="wider-text-field"></v-text-field></v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>

                      <label><b>Desc</b></label>
                      <v-text-field type='text' id='desc' v-model="form.desc" required class="wider-text-field"></v-text-field>

                      <label><b>Description</b></label>
                      <v-text-field type='text' id='description' v-model="form.description" required class="wider-text-field"></v-text-field>
  
                      <v-layout row>
                        <v-flex style="width:50%">
                          <v-layout column>
                            <v-flex style="margin-bottom: -25px;"><label><b>Catégorie</b></label></v-flex>
                            <v-flex><v-text-field type='text' id='categorie' v-model="form.categorie" required class="wider-text-field"></v-text-field></v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex style="width:50%">
                          <v-layout column>
                            <v-flex style="margin-bottom: -25px;"><label><b>Rang</b></label></v-flex>
                            <v-flex><v-text-field type='text' id='rang' v-model="form.rang" required class="wider-text-field"></v-text-field></v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
  
                      <v-layout row>
                        <v-flex style="width:50%">
                          <v-layout column>
                            <v-flex style="margin-bottom: -25px;"><label><b>Gravure</b></label></v-flex>
                            <v-flex><v-text-field type='text' id='gravure' v-model="form.gravure" required class="wider-text-field"></v-text-field></v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex style="width: 50%;">
                          <v-layout column>
                            <v-flex style="margin-bottom: -25px;"><label><b>Disponibilité</b></label></v-flex>
                            <v-flex><br><input type='checkbox' id='disponibilite' v-model="form.disponibilite"></v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
  
                      <label><b>Image LF</b></label>
                      <v-text-field type='text' id='imageLF' v-model="form.imageLF" required class="wider-text-field"></v-text-field>
                      <v-img v-bind:src=form.imageLF></v-img>
                      <br>
  
                      <label><b>Image LC</b></label>
                      <v-text-field type='text' id='imageLC' v-model="form.imageLC" required class="wider-text-field"></v-text-field>
                      <v-img v-bind:src=form.imageLC></v-img>
             
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
      desc: '',
      description: '',
      gravure: '',
      disponibilite: true,
      imageLF: '',
      imageLC: ''
    },
    errorForm:""
  }
},
computed: {
  ...mapState(['url']),
  ...mapState(['gravures'])
},
methods: {
  validateForm() {
    if (!this.form.ref) {
      this.errorForm = "Veuillez remplir tous les champs obligatoires";
      return false;
    }
    if (this.gravures.some(obj => obj.ref === this.form.ref)) {
      this.errorForm = "Valeur de référence déja présente";
      return false;
    }
    this.errorForm="";
    return true;
  },
  submitForm() {
    if (this.validateForm()) {
        let highestId = 0;
        for (const obj of this.gravures) {
            const id = parseInt(obj.id);
            if (id > highestId) {
                highestId = id;
            }
        }
        this.form.id = highestId+1
        let plusHauteValeur = 0;
        for (const obj of this.gravures) {
            const r = parseInt(obj.rang);
            if (r > plusHauteValeur) {
                plusHauteValeur = r;
            }
        }
        this.form.rang = plusHauteValeur+1
        this.gravures.push(this.form)
        this.setGravures(this.gravures)
        router.push('gravures')
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