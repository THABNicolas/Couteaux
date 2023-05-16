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
                    <v-router>
                        <v-btn>Modifier</v-btn>
                    </v-router>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-flex>
  
        </v-container>
  
    </div>
</template>



<script>

export default{
  name: 'AccueilView',
  metaInfo: {
    title: 'Accueil'
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
        { text: 'Modification', value: 'modification', sortable: false }
      ],
      plaquettes: [
        {
            "id": "01",
            "ref": "PC",
            "nom": "Plaquette Centrale",
            "categorie": "Plaquettes",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PC.webp",
            "description": "",
            "disponibilite": "true",
            "rang":1
        },
        {
            "id": "02",
            "ref": "PA",
            "nom": "Plaquette Ajourée",
            "categorie": "Plaquettes",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PA.webp",
            "description": "",
            "disponibilite": "true",
            "rang":2
        },
        {
            "id": "03",
            "ref": "PP",
            "nom": "Plaquette Pleine",
            "categorie": "Plaquettes",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PP.webp",
            "description": "",
            "disponibilite": "true",
            "rang":3
        },
        {
            "id": "99",
            "ref": "SP",
            "nom": "Sans Plaquette",
            "categorie": "Plaquettes",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/BLANK.webp",
            "description": "",
            "disponibilite": "true",
            "rang":4
        }
      ]
    }
  }
}

</script>