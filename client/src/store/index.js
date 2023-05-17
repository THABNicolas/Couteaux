import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    url:"http://localhost:3000/",
    userConnected:{role:null},
    messageCo:"",
    comptes:[],
    userModif:null,
    messageIn:"",
    messageMod:"",
    nav:false,
    couteauModif:{},
    squeletteModif: {},
    plaquetteModif: {},
    materiauModif: {},
    squelettes: [
        {
              "id": "01",
              "ref": "KB",
              "nom": "Finition brillante",
              "prix": 60,
              "categorie": "Squelettes",
              "imageavant": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/KB.webp",
              "imagearriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/KBA.webp",
              "vis": "VC",
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
              "vis": "VC",
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
              "vis": "VF",
              "description": "19 cm",
              "gravure": "LF",
              "disponibilite": "true"
        }
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
    ],
    materiaux: [
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
    ],
    vis: [
        {
              "id": "01",
              "ref": "VC",
              "nom": "Vis clair",
              "categorie": "vis",
              "imageavant": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/VC.webp",
              "imagearriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/VCA.webp"
         },
        {
              "id": "02",
              "ref": "VF",
              "nom": "Vis foncé",
              "categorie": "vis",
              "imageavant": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/VF.webp",
              "imagearriere": "https://cdn.shopify.com/s/files/1/0685/6458/2668/files/VFA.webp"
        }
    ]
  }),
  mutations: {
    setUserConnected(state, user){
      state.userConnected = user;
    },
    setMessageCo(state, messageCo){
      state.messageCo = messageCo;
    },
    setComptes(state, comptes){
      state.comptes = comptes;
    },
    setUserModif(state, compte){
      state.userModif = compte;
    },
    setMessageIn(state, messageIn){
      state.messageIn = messageIn;
    },
    setMessageMod(state, messageMod){
      state.messageMod = messageMod;
    },
    setNav(state, nav){
      state.nav = nav;
    },
    setCouteauModif(state, couteau){
      state.couteauModif = couteau;
    },
    setVis(state, vis){
        state.vis = vis;
    },
    setSquelettes(state, squelettes){
        state.squelettes = squelettes;
    }
  }
})
