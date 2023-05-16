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
                        <v-btn  depressed color="blue" @click="setSqueletteModif(row.item)">Modifier</v-btn>
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
import { mapMutations } from 'vuex';

export default{
  name: 'AccueilView',
  metaInfo: {
    title: 'Accueil'
  },
  methods: {
    ...mapMutations(['setSqueletteModif'])
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
        { text: 'Modification', value: 'modification', sortable: false }
      ],
      squelettes: [
        {
            "id": "01",
            "ref": "KB",
            "nom": "Finition brillante",
            "prix": 60,
            "categorie": "Squelettes",
            "imageavant": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/KB.webp",
            "imagearriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/KBA.webp",
            "description": "19 cm",
            "gravure": "LF",
            "disponibilite": "true"
        },
        {
            "id": "02",
            "ref": "KG",
            "nom": "Finition titane gris",
            "prix": 60,
            "categorie": "Squelettes",
            "imageavant": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/KG.webp",
            "imagearriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/KGA.webp",
            "description": "19 cm",
            "gravure": "LF",
            "disponibilite": "true"
        },
        {
            "id": "03",
            "ref": "KN",
            "nom": "Finition titane noir",
            "prix": 60,
            "categorie": "Squelettes",
            "imageavant": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/KN.webp",
            "imagearriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/KNA.webp",
            "description": "19 cm",
            "gravure": "LF",
            "disponibilite": "true"
        }
      ]
    }
  }
}

</script>