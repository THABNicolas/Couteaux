<template>
  
    <div id='modification'>
      <br><br><br><br>
      <div style="width:70%">
        <v-alert v-if="errorForm" type="error">{{errorForm}}</v-alert>
        <v-card elevation='4' class='cardModification'>
          <div id='formModification' >
            <label>ARTCODE</label>
            <div>{{ couteauModif.ARTCODE }}</div>
            <br>
            <label>ARTDESIGNATION</label>
            <v-text-field type='text' id='artdesignation' v-model="form.artdesignation" required class="wider-text-field"></v-text-field>
            
            <v-btn color='green' @click="submitForm">Modifier</v-btn>
          </div>
        </v-card>
      </div>
    </div>

</template>



<script>

import axios from "axios";
import {mapMutations,mapState} from "vuex";

export default {
name: 'ModificationView',
metaInfo: {
  title: 'Modification'
},
data() {
  return {
    form: {
      artcode: '',
      artdesignation: ''
    },
    errorForm: ""
  }
},
methods: {
  ...mapMutations(['setCouteauModif']),
  validateForm() {
    if (!this.form.artcode || !this.form.artdesignation) {
      this.errorForm = "Veuillez remplir tous les champs obligatoires";
      return false;
    }
    this.errorForm = "";
    return true;
  },
  submitForm() {
    if (this.validateForm()) {
      axios.post("couteauM", this.form)
        .then(() => {
            this.$router.push('/');
        })
    }
  },
},
computed: {
  ...mapState(['url']),
  ...mapState(['couteauModif'])
},
created() {
  this.form.artcode = this.couteauModif.ARTCODE;
  this.form.artdesignation = this.couteauModif.ARTDESIGNATION;
},
beforeDestroy() {
  this.setCouteauModif({});
}
}

</script>



<style scoped>

#modification,
#formModification {
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.cardModification {
border-radius: 40px;
padding: 10px 0 20px 0;
}
.wider-text-field {
  width: 625px;
}

</style>