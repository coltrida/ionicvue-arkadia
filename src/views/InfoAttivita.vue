<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Info Attività {{nome}}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-button color="primary" @click="$router.go(-1)">Indietro</ion-button>
            <!--<ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Info</ion-title>
                </ion-toolbar>
            </ion-header>-->

            <!--<ExploreContainer name="Tab 2 page" />-->
        </ion-content>
    </ion-page>
</template>

<script>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton  } from '@ionic/vue';
    /*import ExploreContainer from '@/components/ExploreContainer.vue';*/

    export default {
        name: "InfoAttivita",
        components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton  },
        props: ['nome'],
    }
</script>

<style scoped>

</style>
