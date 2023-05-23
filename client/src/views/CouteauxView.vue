<template>
    <div class='accueil'>
      <br><br><br>
  
        <v-layout v-if="userConnected.role==null" justify-center>
          <div style="width:40%">
            <v-card elevation='4' class='cardConnexion'>
              <v-layout column>
                <div>Vous n' êtes pas connecté</div>
                <br>
                <router-link to="/connexion" justify-content-center>
                  <v-btn  depressed color="green">Connexion</v-btn>
                </router-link>
              </v-layout> 
            </v-card>
          </div>
        </v-layout>
  
        <v-container v-if="userConnected.role!==null" grid-list-lg>
  
          <v-flex>
            <v-layout row>
              <v-flex xs4>
                <v-select
                  :items="filterFields"
                  v-model="filterField"
                  label="Filtrer par">
                </v-select>
              </v-flex>
              <v-flex>
                <v-text-field
                  label="..."
                  v-model="search">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
  
          <v-flex>
            <v-data-table id="tab" :headers="headers" :items="filterSearch" 
              :footer-props="{
                'items-per-page-text': 'nombre de lignes par pages',
                'items-per-page-options': [5, 10, 15],
                'show-current-page': true,
              }">
              <template slot="item" slot-scope="row">
                <tr>
                  <td>{{ row.item.ARTCODE }}</td>
                  <td>{{ row.item.ARTDESIGNATION }}</td>
                  <td>
                    <router-link to="/modificationC">
                      <v-btn depressed color="blue" @click="setCouteauModif(row.item,row.index)">Modifier</v-btn>
                    </router-link>  
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-flex>
  
        </v-container>
  
    </div>
  </template>
  
  
  <script>
  
  import {mapMutations, mapState} from 'vuex';
  import axios from 'axios';
  
  export default{
    name: 'AccueilView',
    metaInfo: {
      title: 'Accueil'
    },
    data () {
      return {
        headers: [
          { text: 'ARTCODE', value: 'artcode', sortable: false },
          { text: 'ARTDESIGNATION', value: 'artdesignation', sortable: false },
          { text: 'Modification', value: 'modification', sortable: false }
        ],
        filterFields: [
          { text: 'ARTCODE', value: 'artcode' },
          { text: 'ARTDESIGNATION', value: 'artdesignation' }
        ],
        filterField:'artcode',
        couteaux: [],
        search: ''
      }
    },
    methods: {
      ...mapMutations(['setMessageCo','setCouteauModif']),
    },
    computed: {
      ...mapState(['messageCo','userConnected','url']),
      filterSearch() {
        let filter = [];
        switch (this.filterField) {
          case 'artcode':
            filter = this.couteaux.filter(c => c.ARTCODE.includes(this.search));
            break;
          case 'artdesignation':
            filter = this.couteaux.filter(c => c.ARTDESIGNATION.includes(this.search));
            break;
        }
        if (filter.length !== 0)
          return filter;
        else return [];
      },
    },
    created(){
      axios.get(this.url+"couteaux")
          .then((rep) => {
            this.couteaux = rep.data;
          })
    },
    beforeMount() {
      setTimeout(() => {
        this.setMessageCo("");
      }, 3000);
    },
    beforeDestroy() {
      this.setMessageCo("");
    }
  }
  
  </script>
  
  <style scoped>
  .cardConnexion {
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    margin: 0;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  </style>