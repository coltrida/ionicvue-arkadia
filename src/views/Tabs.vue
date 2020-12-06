<template>
  <ion-page>
    <ion-tabs >
      <ion-tab-bar slot="bottom">

          <ion-tab-button
                  v-if="loggato"
                  class="ion-margin"
                  expand="full"
                  color="danger"
                  @click="logout"
          >
              <ion-icon color="danger" :icon="triangle" />
              <ion-label color="danger">Logout</ion-label>
          </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import router from '../router/index'
export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },

  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  },

    computed:{
      loggato(){
          return localStorage.getItem('user') ? true : false
      }
    },

    methods:{
        async logout() {
            localStorage.clear()
            router.push("/")
            setTimeout(() => {
                console.log('Async operation has ended');
                location.reload()
            }, 1000);

        },
    }
}
</script>
