<template>
    <div>
      <v-navigation-drawer :value="this.nav" app @input="OnNavInput">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action @click="expand(false)">
            <v-icon>mdi-close</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
          <v-list-item to="/" @click="expand(false)">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Accueil</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="userConnected.role === null" to="/connexion" @click="expand(false)">
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Connexion</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="userConnected.role === 'admin'" to="/administration" @click="expand(false)">
            <v-list-item-icon>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Comptes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="userConnected.role !== null" to="/connexion" @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Déconnexion</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app color=primary>
        <v-app-bar-nav-icon @click.stop="expand(true)"></v-app-bar-nav-icon>
        <v-toolbar-title>Couteaux</v-toolbar-title>
      </v-app-bar>
    </div>
  </template>
  
  <script>
  import { mapMutations, mapState } from "vuex";
  
  export default {
    name: "NavBar",
    computed: {
      ...mapState(["userConnected","nav"])
    },
    methods: {
      ...mapMutations(["setUserConnected"]),
      ...mapMutations(["setNav"]),
      logout() {
        this.$cookie.delete('userAuthentificated');
        this.setUserConnected({ role: null });
        this.setNav(false);
      },
      expand(etat) {
        this.setNav(etat);
      },
      OnNavInput(value) {
        if(value==true) {
          this.setNav(true);
        }
        else if(value==false) {
          this.setNav(false);
        }
      }
    },
  };
  </script>