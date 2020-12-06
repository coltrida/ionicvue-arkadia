<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-item>
                    <ion-avatar slot="end">
                        <img :src=foto>
                    </ion-avatar>
                    <ion-label>{{user}}</ion-label>
                </ion-item>
                <!--<ion-title>{{user}}</ion-title>-->
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    href="tabs/presenzeRagazzi"
            >Presenze Ragazzi
            </ion-button>

            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    href="tabs/presenzeOperatore"
            >Presenze Operatore
            </ion-button>

            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    href="tabs/inserisciChilometri"
            >Inserisci Km
            </ion-button>

            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    v-show="role"
                    href="tabs/inserisciVettura"
            >Inserisci Vettura
            </ion-button>

            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    v-show="role"
                    href="tabs/inserisciAttivita"
            >Inserisci Attività
            </ion-button>

            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    v-show="role"
                    href="tabs/inserisciRagazzo"
            >Inserisci Ragazzo
            </ion-button>

            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    v-show="role"
                    href="tabs/associaAttivitaRagazzo"
            >Associa Attività - Ragazzo
            </ion-button>

            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    v-show="role"
                    @click="statistiche"
            >Statistiche
            </ion-button>

        </ion-content>
    </ion-page>
</template>

<script>
    import {
        IonButton, IonContent,
    } from '@ionic/vue';

    export default {
        name: "Logged",

        data() {
            return {
                user: localStorage.getItem('user'),
                role: localStorage.getItem('role'),
                id: localStorage.getItem('id')
            }
        },

        components:
            {
                IonButton, IonContent
            },

        computed:{
            foto(){
                return "https://www.andirivieni.eu/img/" + this.id + ".jpg"
            }
        },

        methods: {

            presenzeRagazzi() {
                console.log('presenze')
            },

            presenzeOperatore() {
                console.log('operatore')
            },

            inserisciKm() {
                console.log('km')
            },

            statistiche() {
                console.log('stat')
            }
        }
    }
</script>

<style scoped>

</style>
