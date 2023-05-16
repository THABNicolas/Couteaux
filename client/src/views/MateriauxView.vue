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
                  <td>{{ row.item.categorie }}</td>
                  <td>{{ row.item.matiere }}</td>
                  <td>{{ row.item.type }}</td>
                  <td>{{ row.item.ref }}</td>
                  <td>{{ row.item.nom }}</td>
                  <td>{{ row.item.prix }}</td>
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
        { text: 'categorie', value: 'categorie', sortable: true },
        { text: 'matiere', value: 'matiere', sortable: true },
        { text: 'type', value: 'type', sortable: true },
        { text: 'ref', value: 'ref', sortable: true },
        { text: 'nom', value: 'nom', sortable: true },
        { text: 'prix', value: 'prix', sortable: true },
        { text: 'rang', value: 'rang', sortable: true },
        { text: 'Modification', value: 'modification', sortable: false }
      ],
      plaquettes: [
        {
            "categorie": "Métaux",
            "matiere": "Acier brillant",
            "id": "16",
            "type": "PC",
            "ref": "M01",
            "nom": "Plaquette centrale acier brillant",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCM01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCM01A.webp",
            "prix": 5,
            "rang": 1
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier brillant",
            "id": "17",
            "type": "PA",
            "ref": "M01",
            "nom": "Plaquette ajourée acier brillant",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAM01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAM01A.webp",
            "prix": 7,
            "rang": 1
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier brillant",
            "id": "18",
            "type": "PP",
            "ref": "M01",
            "nom": "Plaquette pleine acier brillant",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPM01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPM01A.webp",
            "prix": 9,
            "rang": 1
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier PVD doré jaune",
            "id": "19",
            "type": "PC",
            "ref": "M02",
            "nom": "Plaquette centrale acier PVD doré jaune",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCM02.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCM02A.webp",
            "prix": 5,
            "rang": 2
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier PVD doré jaune",
            "id": "20",
            "type": "PA",
            "ref": "M02",
            "nom": "Plaquette ajourée acier PVD doré jaune",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAM02.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAM02A.webp",
            "prix": 7,
            "rang": 2
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier PVD doré jaune",
            "id": "21",
            "type": "PP",
            "ref": "M02",
            "nom": "Plaquette pleine acier PVD doré jaune",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPM02.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPM02A.webp",
            "prix": 9,
            "rang": 2
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier PVD doré rose",
            "id": "22",
            "type": "PC",
            "ref": "M03",
            "nom": "Plaquette centrale acier PVD doré rose",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCM03.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCM03A.webp",
            "prix": 5,
            "rang": 3
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier PVD doré rose",
            "id": "23",
            "type": "PA",
            "ref": "M03",
            "nom": "Plaquette ajourée acier PVD doré rose",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAM03.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAM03A.webp",
            "prix": 7,
            "rang": 3
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier PVD doré rose",
            "id": "24",
            "type": "PP",
            "ref": "M03",
            "nom": "Plaquette pleine acier PVD doré rose",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPM03.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPM03A.webp",
            "prix": 9,
            "rang": 3
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier PVD anodisé bleu",
            "id": "25",
            "type": "PC",
            "ref": "M04",
            "nom": "Plaquette centrale acier PVD anodisé bleu",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCM04.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCM04A.webp",
            "prix": 5,
            "rang": 4
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier PVD anodisé bleu",
            "id": "26",
            "type": "PA",
            "ref": "M04",
            "nom": "Plaquette ajourée acier PVD anodisé bleu",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAM04.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAM04A.webp",
            "prix": 7,
            "rang": 4
        },
        {
            "categorie": "Métaux",
            "matiere": "Acier PVD anodisé bleu",
            "id": "27",
            "type": "PP",
            "ref": "M04",
            "nom": "Plaquette pleine acier PVD anodisé bleu",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPM04.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPM04A.webp",
            "prix": 9,
            "rang": 4
        },
        {
            "categorie": "Bois",
            "matiere": "Bois clair",
            "id": "01",
            "type": "PC",
            "ref": "B01",
            "nom": "Plaquette centrale bois clair",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCB01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCB01A.webp",
            "prix": 5,
            "rang": 1
        },
        {
            "categorie": "Bois",
            "matiere": "Bois clair",
            "id": "02",
            "type": "PA",
            "ref": "B01",
            "nom": "Plaquette ajourée bois clair",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAB01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAB01A.webp",
            "prix": 7,
            "rang": 1
        },
        {
            "categorie": "Bois",
            "matiere": "Bois clair",
            "id": "03",
            "type": "PP",
            "ref": "B01",
            "nom": "Plaquette pleine bois clair",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPB01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPB01A.webp",
            "prix": 9,
            "rang": 1
        },
        {
            "categorie": "Bois",
            "matiere": "Bois foncé",
            "id": "04",
            "type": "PC",
            "ref": "B02",
            "nom": "Plaquette centrale bois foncé",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCB02.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCB02A.webp",
            "prix": 5,
            "rang": 2
        },
        {
            "categorie": "Bois",
            "matiere": "Bois foncé",
            "id": "05",
            "type": "PA",
            "ref": "B02",
            "nom": "Plaquette ajourée bois foncé",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAB02.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAB02A.webp",
            "prix": 7,
            "rang": 2
        },
        {
            "categorie": "Bois",
            "matiere": "Bois foncé",
            "id": "06",
            "type": "PP",
            "ref": "B02",
            "nom": "Plaquette pleine bois foncé",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPB02.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPB02A.webp",
            "prix": 9,
            "rang": 2
        },
        {
            "categorie": "Résine",
            "matiere": "G10 noir",
            "id": "10",
            "type": "PC",
            "ref": "R01",
            "nom": "Plaquette centrale G10 noir",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCR01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCR01A.webp",
            "prix": 5,
            "rang": 1
        },
        {
            "categorie": "Résine",
            "matiere": "G10 noir",
            "id": "11",
            "type": "PA",
            "ref": "R01",
            "nom": "Plaquette ajourée G10 noir",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAR01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAR01A.webp",
            "prix": 7,
            "rang": 1
        },
        {
            "categorie": "Résine",
            "matiere": "G10 noir",
            "id": "12",
            "type": "PP",
            "ref": "R01",
            "nom": "Plaquette pleine G10 noir",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPR01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPR01A.webp",
            "prix": 9,
            "rang": 1
        },
        {
            "categorie": "Résine",
            "matiere": "G10 kaki",
            "id": "13",
            "type": "PC",
            "ref": "R02",
            "nom": "Plaquette centrale G10 kaki",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCR02.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCR02A.webp",
            "prix": 5,
            "rang": 2
        },
        {
            "categorie": "Résine",
            "matiere": "G10 kaki",
            "id": "14",
            "type": "PA",
            "ref": "R02",
            "nom": "Plaquette ajourée G10 kaki",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAR02.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAR02A.webp",
            "prix": 7,
            "rang": 2
        },
        {
            "categorie": "Résine",
            "matiere": "G10 kaki",
            "id": "15",
            "type": "PP",
            "ref": "R02",
            "nom": "Plaquette pleine G10 kaki",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPR02.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPR02A.webp",
            "prix": 9,
            "rang": 2
        },
        {
            "categorie": "Carbone",
            "matiere": "Carbone",
            "id": "07",
            "type": "PC",
            "ref": "C01",
            "nom": "Plaquette centrale carbone",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCC01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PCC01A.webp",
            "prix": 5,
            "rang": 1
        },
        {
            "categorie": "Carbone",
            "matiere": "Carbone",
            "id": "08",
            "type": "PA",
            "ref": "C01",
            "nom": "Plaquette ajourée carbone",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAC01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PAC01A.webp",
            "prix": 7,
            "rang": 1
        },
        {
            "categorie": "Carbone",
            "matiere": "Carbone",
            "id": "09",
            "type": "PP",
            "ref": "C01",
            "nom": "Plaquette pleine carbone",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPC01.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/PPC01A.webp",
            "prix": 9,
            "rang": 1
        },
        {
            "categorie": "",
            "matiere": "SP",
            "id": "16",
            "type": "SP",
            "ref": "SP",
            "nom": "Sans plaquette",
            "image": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/BLANK.webp",
            "imageArriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/BLANK.webp",
            "prix": 5,
            "rang": 1
        }
      ]
    }
  }
}

</script>