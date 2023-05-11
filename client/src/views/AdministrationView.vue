<template>
  

      <div id='administration'>
        <br><br>
        <div style="width:80%">

          <v-alert v-if="messageIn==='Création réussie'" type="success" dismissible>{{messageIn}}</v-alert>
          <v-alert v-if="messageIn==='Erreur de création'" type="error" dismissible>{{messageIn}}</v-alert>
          <v-alert v-if="messageMod==='Modification réussie'" type="success" dismissible>{{messageMod}}</v-alert>
          <v-alert v-if="messageMod==='Erreur de modification'" type="error" dismissible>{{messageMod}}</v-alert>

          <v-container grid-list-lg>

            <v-flex>
              <v-layout row wrap>
                <v-flex xs2>
                  <v-select
                      :items="filterFields"
                      v-model="filterField"
                      label="Filtrer par">
                  </v-select>
                </v-flex>
                <v-flex xs2>
                  <v-text-field
                    label="..."
                    v-model="search">
                  </v-text-field>
                </v-flex>
                <v-flex></v-flex>
                <v-flex xs2>
                  <router-link to="/creation">
                    <v-btn  depressed color="green">Ajouter</v-btn>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-data-table :headers="headers" :items="filterSearch" :footer-props="{
                  'items-per-page-text': 'nombre de lignes par pages',
                  'items-per-page-options': [5, 10, 15],
                  'show-current-page': true,
                }">
                  <template slot="item" slot-scope="row">
                    <tr>
                      <td>{{ row.item.id }}</td>
                      <td>{{ row.item.nom }}</td>
                      <td>{{ row.item.prenom }}</td>
                      <td>{{ row.item.identifiant }}</td>
                      <td>{{ row.item.actif }}</td>
                      <td>{{ row.item.role }}</td>
                      <td>
                        <router-link to="/modification">
                          <v-btn  depressed color="blue" @click="setUserModif(row.item)">Modifier</v-btn>
                        </router-link>
                      </td>
                    </tr>
                  </template>
                  <template slot="pageText" slot-scope="row">
                    Total rows: {{ row.itemsLength }}
                  </template>
              </v-data-table>
            </v-flex>

          </v-container>

        </div>
      </div>


</template>
  
  
<script>
  
import axios from "axios";
import {mapMutations,mapState} from "vuex";
  
export default {
  name: 'AdministrationView',
  metaInfo: {
    title: 'Administration'
  },
  data () {
    return {
      headers: [
        { text: 'ID', align: 'left', sortable: false, value: 'id' },
        { text: 'Nom', value: 'nom' },
        { text: 'Prenom', value: 'prenom' },
        { text: 'Identifiant', value: 'identifiant'},
        { text: 'Actif', value: 'actif' },
        { text: 'Rôle', value: 'role' },
        { text: 'Modif'}
      ],
      filterFields: [
        {text: 'Nom', value: 'nom', type: 'text'},
        {text: 'Prénom', value: 'prenom', type: 'text'},
        {text: 'Identifiant', value: 'identifiant', type: 'text'},
        {text: 'Rôle', value: 'role', type: 'text'},
      ],
      filterField: 'nom',
      search: ''
    }
  },
  methods: {
    ...mapMutations(['setComptes']),
    ...mapMutations(['setUserModif']),
    ...mapMutations(['setMessageMod']),
    ...mapMutations(['setMessageIn'])
  },
  computed: {
    ...mapState(['url']),
    ...mapState(['comptes']),
    ...mapState(['messageIn']),
    ...mapState(['messageMod']),
    filterSearch() {
      let filter = [];
      switch (this.filterField) {
        case 'nom':
          filter = this.comptes.filter(c => c.nom.includes(this.search));
          break;
        case 'prenom':
          filter = this.comptes.filter(c => c.prenom.includes(this.search));
          break;
        case 'identifiant':
          filter = this.comptes.filter(c => c.identifiant.includes(this.search));
          break;
        case 'role':
          filter = this.comptes.filter(c => c.role.includes(this.search));
          break;
      }
      if (filter.length !== 0)
        return filter;
      else return [];
    },
  },
  created() {
    axios.get(this.url+"comptes")
        .then((rep) => {
          this.setComptes(rep.data.tab);
        })
  },
  mounted() {
    setTimeout(() => {
      this.setMessageIn("");
      this.setMessageMod("");
    }, 6000);
  },
  beforeDestroy() {
    this.setComptes([]);
    this.setMessageIn("");
    this.setMessageMod("");
  }
}

</script>



<style scoped>
#administration {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>