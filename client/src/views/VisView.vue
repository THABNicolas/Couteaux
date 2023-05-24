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
                <router-link to="ajoutVis">
                  <v-btn style="margin-top: 14px;margin-left:24px;">Ajouter</v-btn>
                </router-link>
              </v-flex>
            </v-layout>
            <v-card>
            <v-data-table id="tab" :headers="headers" :items="filterSearch" class="text-center"
              :footer-props="{
                'items-per-page-text': 'nombre de lignes par pages',
                'items-per-page-options': [5, 10, 15],
                'show-current-page': true,
              }">
              <template slot="item" slot-scope="row">
                <tr :class="{ 'highlight': row.item === visModif }">
                  <td class="text-left">{{ row.item.ref }}</td>
                  <td class="text-left">{{ row.item.nom }}</td>
                  <td>
                    <v-btn icon outlined @click="setVisModif(row.item)">
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
          </v-flex>

          <v-flex sm5>
            <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
            <v-card elevation='4' class='cardModification'>
              <div id='formModification' >
                <v-btn color='green' @click="submitForm">Modifier</v-btn>
                <br>
                <br>
                <label><b>Ref</b></label>
                <v-text-field type="text" id="ref" v-model="formRef" required class="wider-text-field"></v-text-field>
                <label><b>Nom</b></label>
                <v-text-field type="text" id="nom" v-model="formNom" required class="wider-text-field"></v-text-field>
                <label><b>Catégorie</b></label>
                <v-text-field type='text' id='categorie' v-model="form.categorie" required class="wider-text-field"></v-text-field>
                <label><b>Image Avant</b></label>
                <v-text-field type='text' id='imageavant' v-model="form.imageavant" required class="wider-text-field"></v-text-field>
                <v-img v-bind:src=form.imageavant></v-img>
                <label><b>Image Arrière</b></label>
                <v-text-field type='text' id='imagearriere' v-model="form.imagearriere" required class="wider-text-field"></v-text-field>
                <v-img v-bind:src=form.imagearriere></v-img>
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
      visModif: null,
      form: {
        ref: '',
        nom: '',
        categorie: '',
        imageavant: '',
        imagearriere: '',
        id: ''
      },
      errorForm: '',
      formRef: '',
      formNom: '',
      search: ''
    }
  },
  computed: {
    ...mapState(['vis']),
    filterSearch(){
      let filter = []
      filter = this.vis.filter(m => m.nom.includes(this.search));
      return filter;
    }
  },
  methods: {
    ...mapMutations(['setVis']),
    handleClear() {
      if (this.search === null) {
        this.search = '';
      }
    },
    drop(item){
      var idtodrop = item.id
      const index = this.vis.findIndex(obj => obj.id === idtodrop);
      if (index !== -1) {
        this.vis.splice(index, 1);
      }
    },
    setVisModif(item) {
      if (item) {
        this.visModif = item;
        this.formRef = item.ref;
        this.formNom = item.nom;
        this.form = {
          ref: item.ref,
          nom: item.nom,
          categorie: item.categorie,
          imageavant: item.imageavant,
          imagearriere: item.imagearriere,
          id: item.id
        };
      }
    },
    validateForm() {
      if (!this.formRef || !this.formNom || !this.form.categorie || !this.form.imageavant || !this.form.imagearriere) {
        this.errorForm = "Veuillez remplir tous les champs obligatoires";
        return false;
      }
      this.errorForm = '';
      return true;
    },
    submitForm() {
      if (this.validateForm()) {
        const targetid = this.form.id;
        const index = this.vis.findIndex(v => v.id === targetid);
        if (index !== -1) {
          const updatedVis = [...this.vis];
          updatedVis[index] = {
            ref: this.formRef,
            nom: this.formNom,
            categorie: this.form.categorie,
            imageavant: this.form.imageavant,
            imagearriere: this.form.imagearriere,
            id: this.form.id
          };
          this.setVis(updatedVis);
        }
      }
    }
  },
  beforeMount(){
    this.setVisModif(this.vis[0])
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
.highlight {
  background-color: rgb(236, 236, 236);
}

</style>