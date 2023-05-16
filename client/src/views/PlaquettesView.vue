<template>
    <div class='accueil'>
        <br><br><br>
  
        <v-container grid-list-lg>
  
          <v-flex>
            <v-data-table id="tab" :headers="headers" :items="plaquettes" 
              :footer-props="{
                'items-per-page-text': 'nombre de lignes par pages',
                'items-per-page-options': [5, 10, 15],
                'show-current-page': true,
              }">
              <template slot="item" slot-scope="row">
                <tr>
                  <td>{{ row.item.ref }}</td>
                  <td>{{ row.item.nom }}</td>
                  <td>{{ row.item.categorie }}</td>
                  <td>{{ row.item.description }}</td>
                  <td>{{ row.item.disponibilite }}</td>
                  <td>{{ row.item.rang }}</td>
                  <td>
                    <router-link to="modificationPlaquette">
                        <v-btn @click="setPlaquetteModif(row.item)">Modifier</v-btn>
                    </router-link>
                  </td>
                  <td>
                    <v-btn @click="drop(row.item)">Supprimer</v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
            <router-link to="ajoutPlaquette">
              <v-btn>Ajouter</v-btn>
            </router-link>
          </v-flex>
  
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
  methods: {
    ...mapMutations(['setPlaquetteModif']),
    drop(item){
      var idtodrop = item.id
      const index = this.plaquettes.findIndex(obj => obj.id === idtodrop);
      if (index !== -1) {
        this.plaquettes.splice(index, 1);
      }
    }
  },
  data () {
    return {
      headers: [
        { text: 'ref', value: 'ref', sortable: true },
        { text: 'nom', value: 'nom', sortable: true },
        { text: 'categorie', value: 'categorie', sortable: true },
        { text: 'description', value: 'description', sortable: true },
        { text: 'disponibilite', value: 'disponibilite', sortable: true },
        { text: 'rang', value: 'rang', sortable: true },
        { text: 'Modification', value: 'modification', sortable: false },
        { text: 'Supression', value: 'supression', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState(['plaquettes'])
  }
}

</script>