<template>
    <div class='accueil'>
        <br><br><br>
  
        <v-container grid-list-lg>
  
          <v-flex>
            <v-data-table id="tab" :headers="headers" :items="squelettes" 
              :footer-props="{
                'items-per-page-text': 'nombre de lignes par pages',
                'items-per-page-options': [5, 10, 15],
                'show-current-page': true,
              }">
              <template slot="item" slot-scope="row">
                <tr>
                  <td>{{ row.item.ref }}</td>
                  <td>{{ row.item.nom }}</td>
                  <td>{{ row.item.prix }}</td>
                  <td>{{ row.item.categorie }}</td>
                  <td>{{ row.item.description }}</td>
                  <td>{{ row.item.gravure }}</td>
                  <td>{{ row.item.disponibilite }}</td>
                  <td>
                    <router-link to="modificationSquelette">
                        <v-btn @click="setSqueletteModif(row.item)">Modifier</v-btn>
                    </router-link>
                  </td>
                  <td>
                    <v-btn @click="drop(row.item)">Supprimer</v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
            <router-link to="ajoutSquelette">
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
    ...mapMutations(['setSqueletteModif']),
    drop(item){
      var idtodrop = item.id
      const index = this.squelettes.findIndex(obj => obj.id === idtodrop);
      if (index !== -1) {
        this.squelettes.splice(index, 1);
      }
    }
  },
  data () {
    return {
      headers: [
        { text: 'ref', value: 'ref', sortable: true },
        { text: 'nom', value: 'nom', sortable: true },
        { text: 'prix', value: 'prix', sortable: true },
        { text: 'categorie', value: 'categorie', sortable: true },
        { text: 'description', value: 'description', sortable: true },
        { text: 'gravure', value: 'gravure', sortable: true },
        { text: 'disponibilite', value: 'disponibilite', sortable: true },
        { text: 'Modification', value: 'modification', sortable: false },
        { text: 'Supression', value: 'supression', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState(['squelettes'])
  }
}

</script>