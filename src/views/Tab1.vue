<template>
  <ion-page>
      <ion-header>
          <ion-toolbar>
              <ion-title>Attività</ion-title>
          </ion-toolbar>
      </ion-header>

      <ion-content :fullscreen="true">
          <div id="container" v-if="load">
              <ion-spinner id="spinner" name="bubbles" ></ion-spinner>
          </div>
      <ion-list v-else>
          <attivita  v-for="item in elementi" :dati=item :key="item.name"/>
      </ion-list>
      </ion-content>
  </ion-page>
</template>

<script>

    import axios from 'axios';

    import {
        IonPage, IonTitle, IonToolbar, IonHeader, IonContent,
        IonList, IonSpinner
    } from '@ionic/vue';

    import Attivita from "@/components/Attivita.vue";

export default  {
  name: 'Tab1',
  components:
      {
          Attivita,
          IonTitle, IonToolbar, IonPage, IonHeader, IonContent,
          IonList, IonSpinner
      },

    data(){
        return {
            elementi: [],
            load: true
        }
    },

    mounted(){
        axios.get('https://www.andirivieni.eu/api/attivita')
            .then(response => {
                this.load = false
                this.elementi = response.data
            })
    },

    methods:{
      gestisci(){
          alert(this.prova)
      }
    }

}
</script>

<style scoped>
    #container {
        text-align: center;

        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
