<template>

  <div class='accueil'>
      <br><br><br>

      <v-container grid-list-lg>
        <v-layout row>

        <v-flex sm7>
          <v-layout row>
            <v-flex sm5>
              <v-text-field style="margin-left: 14px;"
                label="nom" v-model="search" clearable @input="handleClear">
              </v-text-field>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex sm3>
              <router-link to="ajoutSquelette">
                <v-btn style="margin-top: 14px;margin-left:24px;">Ajouter</v-btn>
              </router-link>
            </v-flex>
          </v-layout>
          <v-card elevation='4'>
          <v-data-table id="tab" :headers="headers" :items="filterSearch" class="text-center"
            :footer-props="{
              'items-per-page-text': 'nombre de lignes par pages',
              'items-per-page-options': [5, 10, 15],
              'show-current-page': true,
            }">
            <template slot="item" slot-scope="row">
              <tr :class="{ 'highlight': row.item.id === (squeletteModif && squeletteModif.id) }">
                <td class="text-left">{{ row.item.ref }}</td>
                <td class="text-left">{{ row.item.nom }}</td>
                <td>
                  <v-btn icon outlined @click="setSqueletteModif(row.item)">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn icon outlined @click="drop(row.item)">X</v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
          </v-card>
          <v-btn style="margin-top: 14px;margin-left:24px;"  @click="generateJSONFile">JSON</v-btn>
        </v-flex>

        <v-flex sm5>
          <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
          <v-card elevation='4' class='cardModification'>
            <div id='formModification' >

              <v-container grid-list-lg>
                <v-layout column>

            
                    <v-btn color='green' @click="submitForm">Modifier</v-btn>
                    <br>

                    <label><b>Nom</b></label>
                    <v-text-field type="text" id="nom" v-model="formNom" required class="wider-text-field"></v-text-field>

                    <v-layout row>
                      <v-flex>
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Ref</b></label></v-flex>
                          <v-flex><v-text-field type="text" id="ref" v-model="formRef" required class="wider-text-field"></v-text-field></v-flex>  
                        </v-layout>
                      </v-flex>
                      <v-flex>
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

                    <label><b>Rang</b></label>
                    <v-text-field type='number' id='rang' v-model="form.rang" required class="wider-text-field"></v-text-field>

                    <v-layout row>
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Gravure</b></label></v-flex>
                          <v-flex><v-select id="gravure" :items="gravures" v-model="form.gravure" required></v-select></v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex>
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Disponibilité</b></label></v-flex>
                          <v-flex><br><input type='checkbox' id='disponibilite' v-model="form.disponibilite"></v-flex>
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
           
                    
                </v-layout>
              </v-container>

            </div>
          </v-card>
        </v-flex>

        </v-layout>
      </v-container>

  </div>

</template>



<script>

import { mapMutations, mapState } from 'vuex';

export default{
name: 'AccueilView',
metaInfo: {
  title: 'Accueil'
},
data () {
  return {
    headers: [
      { text: 'ref', value: 'ref', sortable: true, align: 'center' },
      { text: 'nom', value: 'nom', sortable: true, align: 'center' },
      { text: 'Modification', value: 'modification', sortable: false, align: 'center' },
      { text: 'Supression', value: 'supression', sortable: false, align: 'center' }
    ],
    squeletteModif: null,
    form: {
      ref: '',
      nom: '',
      prix: '',
      categorie: '',
      vis: '',
      description: '',
      gravure: '',
      disponibilite: false,
      rang: '',
      imageavant: '',
      imagearriere: '',
      id: ''
    },
    errorForm: '',
    formRef: '',
    formNom: '',
    gravures: [
      'LF',
      'LC'
    ],
    search: ''
  }
},
computed: {
  ...mapState(['squelettes']),
  ...mapState(['vis']),
  filterSearch(){
    let filter = []
    filter = this.squelettes.filter(m => m.nom.includes(this.search));
    return filter;
  }
},
methods: {
  ...mapMutations(['setSquelettes']),
  downloadFile(content, fileName) {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  },
  generateJSONFile() {
    const jsonString = JSON.stringify(this.squelettes);
    this.downloadFile(jsonString,'squelettes.json');
  },
  handleClear() {
    if (this.search === null) {
      this.search = '';
    }
  },
  drop(item){
    var idtodrop = item.id
    const index = this.squelettes.findIndex(obj => obj.id === idtodrop);
    if (index !== -1) {
      this.squelettes.splice(index, 1);
    }
  },
  setSqueletteModif(item) {
    if (item) {
      this.squeletteModif = item;
      this.formRef = item.ref;
      this.formNom = item.nom;
      this.form = {
        ref: item.ref,
        nom: item.nom,
        prix: item.prix,
        categorie: item.categorie,
        vis: item.vis,
        description: item.description,
        gravure: item.gravure,
        disponibilite: item.disponibilite,
        rang: item.rang,
        imageavant: item.imageavant,
        imagearriere: item.imagearriere,
        id: item.id
      };
    }
  },
  validateForm() {
    if (!this.formRef || !this.formNom || !this.form.prix || !this.form.categorie || !this.form.vis || !this.form.description || !this.form.gravure || !this.form.imageavant || !this.form.imagearriere) {
      this.errorForm = "Veuillez remplir tous les champs obligatoires";
      return false;
    }
    if (this.squelettes.some(obj => obj.ref === this.formRef) && this.formRef !== this.squeletteModif.ref) {
      this.errorForm = "Valeur de référence déja présente";
      return false;
    }
    this.errorForm = '';
    return true;
  },
  submitForm() {
    if (this.validateForm()) {
      const targetid = this.form.id;
      const indexRangChange = this.squelettes.findIndex(v => v.rang === parseInt(this.form.rang));
      const index = this.squelettes.findIndex(v => v.id === targetid);
      if (index !== -1) {
        const updatedSquelettes = [...this.squelettes];
        if (indexRangChange !== -1){
          updatedSquelettes[indexRangChange].rang = this.squelettes[index].rang;
        }
        updatedSquelettes[index] = {
          ref: this.formRef,
          nom: this.formNom,
          prix: this.form.prix,
          categorie: this.form.categorie,
          vis: this.form.vis,
          description: this.form.description,
          gravure: this.form.gravure,
          disponibilite: this.form.disponibilite,
          rang: parseInt(this.form.rang),
          imageavant: this.form.imageavant,
          imagearriere: this.form.imagearriere,
          id: this.form.id
        };
        this.setSquelettes(updatedSquelettes);
        this.setSqueletteModif(updatedSquelettes[index]);
      }
    }
  }
},
  beforeMount(){
    this.setSqueletteModif(this.squelettes[0])
  }
}

</script>



<style scoped>

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