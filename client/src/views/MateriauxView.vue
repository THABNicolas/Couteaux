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
              <router-link to="ajoutMateriau">
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
              <tr :class="{ 'highlight': materiauModif && row.item.id === materiauModif.id }">
                <td class="text-left">{{ row.item.type }}</td>
                <td class="text-left">{{ row.item.categorie }}</td>
                <td class="text-left">{{ row.item.ref }}</td>
                <td class="text-left">{{ row.item.nom }}</td>
                <td>
                  <v-btn icon outlined @click="setMateriauModif(row.item)">
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
          <v-btn style="margin-top: 14px;margin-left:24px;"  @click="generateJSONFile">Télécharger</v-btn>
        </v-flex>

        <v-flex sm5>
          <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
          <v-card elevation='4' class='cardModification'>
            <div id='formModification'>

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
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Catégorie</b></label></v-flex>
                          <v-flex><v-text-field type='text' id='categorie' v-model="form.categorie" required class="wider-text-field"></v-text-field></v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex>
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Prix</b></label></v-flex>
                          <v-flex><v-text-field type="number" id="prix" v-model="form.prix" required class="wider-text-field"></v-text-field></v-flex>  
                        </v-layout>
                      </v-flex>
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Rang</b></label></v-flex>
                          <v-flex><v-text-field type='number' id='rang' v-model="form.rang" required class="wider-text-field"></v-text-field></v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Type</b></label></v-flex>
                          <v-flex><v-select id="type" :items="plaquettes" v-model="form.type" item-value="ref" item-text="ref" required></v-select></v-flex>  
                        </v-layout>
                      </v-flex>
                      <v-flex style="width:50%">
                        <v-layout column>
                          <v-flex style="margin-bottom: -25px;"><label><b>Matière</b></label></v-flex>
                          <v-flex><v-text-field type='text' id='matiere' v-model="form.matiere" required class="wider-text-field"></v-text-field></v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>

                    <v-flex style="margin-bottom: -25px;align-self: center;"><label><b>Disponibilité</b></label></v-flex>
                    <v-flex style="align-self: center;"><br><input type='checkbox' id='disponibilite' v-model="form.disponibilite"></v-flex>
                    <br>

                    <label><b>Image</b></label>
                    <v-text-field type='text' id='image' v-model="form.image" required class="wider-text-field"></v-text-field>
                    <v-img v-bind:src=form.image></v-img>
                    <br>

                    <label><b>Image Arrière</b></label>
                    <v-text-field type='text' id='imageArriere' v-model="form.imageArriere" required class="wider-text-field"></v-text-field>
                    <v-img v-bind:src=form.imageArriere></v-img>
           
                    
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
      { text: 'type', value: 'type', sortable: true, align: 'center' },
      { text: 'catégorie', value: 'categorie', sortable: true, align: 'center' },
      { text: 'ref', value: 'ref', sortable: true, align: 'center' },
      { text: 'nom', value: 'nom', sortable: true, align: 'center' },
      { text: 'Modification', value: 'modification', sortable: false, align: 'center' },
      { text: 'Supression', value: 'supression', sortable: false, align: 'center' }
    ],
    materiauModif: null,
    form: {
      nom: '',
      ref: '',
      categorie: '',
      prix: '',
      rang: '',
      type: '',
      matiere: '',
      disponibilite: '',
      image: '',
      imageArriere: '',
      id: ''
    },
    errorForm: '',
    formRef: '',
    formNom: '',
    search: ''
  }
},
computed: {
  ...mapState(['materiaux','plaquettes']),
  filterSearch(){
    let filter = []
    filter = this.materiaux.filter(m => m.nom.includes(this.search));
    return filter;
  }
},
methods: {
  ...mapMutations(['setMateriaux']),
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
    const jsonString = JSON.stringify(this.materiaux);
    this.downloadFile(jsonString,'plaquettesmatieres.json');
  },
  handleClear() {
    if (this.search === null) {
      this.search = '';
    }
  },
  drop(item){
    var idtodrop = item.id
    const index = this.materiaux.findIndex(obj => obj.id === idtodrop);
    if (index !== -1) {
      this.materiaux.splice(index, 1);
    }
  },
  setMateriauModif(item) {
    if (item) {
      this.materiauModif = item;
      this.formRef = item.ref;
      this.formNom = item.nom;
      this.form = {
        nom: item.nom,
        ref: item.ref,
        categorie: item.categorie,
        prix: item.prix,
        rang: item.rang,
        type: item.type,
        matiere: item.matiere,
        disponibilite: item.disponibilite,
        image: item.image,
        imageArriere: item.imageArriere,
        id: item.id
      };
    }
  },
  validateForm() {
    if (!this.formRef || !this.formNom || !this.form.categorie || !this.form.prix || !this.form.rang || !this.form.type || !this.form.matiere) {
      this.errorForm = "Veuillez remplir tous les champs obligatoires";
      return false;
    }
    if (this.materiaux.some(obj => obj.ref === this.formRef) && this.formRef !== this.materiauModif.ref) {
      this.errorForm = "Valeur de référence déja présente";
      return false;
    }
    this.errorForm = '';
    return true;
  },
  submitForm() {
    if (this.validateForm()) {
      const targetid = this.form.id;
      const indexRangChange = this.materiaux.findIndex(v => v.rang === parseInt(this.form.rang) && v.categorie === this.form.categorie && v.type === this.form.type);
      const index = this.materiaux.findIndex(v => v.id === targetid);
      if (index !== -1) {
        const updatedMateriaux = [...this.materiaux];
        if (indexRangChange !== -1){
          updatedMateriaux[indexRangChange].rang = this.materiaux[index].rang;
        }
        updatedMateriaux[index] = {
          nom: this.formNom,
          ref: this.formRef,
          categorie: this.form.categorie,
          prix: this.form.prix,
          rang: parseInt(this.form.rang),
          type: this.form.type,
          matiere: this.form.matiere,
          disponibilite: this.form.disponibilite,
          image: this.form.image,
          imageArriere: this.form.imageArriere,
          id: this.form.id
        };
        this.setMateriauModif(updatedMateriaux[index]);
        this.setMateriaux(updatedMateriaux);
      }
    }
  }
},
  beforeMount(){
    this.setMateriauModif(this.materiaux[0])
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