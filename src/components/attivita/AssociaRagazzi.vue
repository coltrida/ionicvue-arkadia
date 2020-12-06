<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-item>
                    <ion-grid>
                        <ion-row class="ion-justify-content-between ion-align-items-center">
                            <div>
                                <ion-title>Associa ragazzi</ion-title>
                            </div>
                            <div>
                                <ion-button size="default" color="primary" @click="$router.go(-1)">Indietro</ion-button>
                            </div>
                        </ion-row>
                    </ion-grid>
                </ion-item>
            </ion-toolbar>
        </ion-header>

        <form-associa/>

        <ion-item color="success">
            <ion-grid>
                <ion-row>
                    <ion-col size="5">Attivita'</ion-col>
                    <ion-col size="4">Ragazzi</ion-col>
                    <ion-col size="3">Azione</ion-col>
                </ion-row>
            </ion-grid>
        </ion-item>

        <ion-content>
            <div id="container" v-if="load">
                <ion-spinner id="spinner" name="bubbles"></ion-spinner>
            </div>
            <ion-list v-else>
                <associazione
                        v-for="(item, index) in elementi"
                        :dati=item
                        :indice=index
                        :key="item.id"
                />

                <ion-item></ion-item>
                <ion-item></ion-item>
                <ion-item></ion-item>
                <ion-item></ion-item>
                <ion-item></ion-item>
                <ion-item></ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
    import help from "../../help"
    import axios from 'axios';
    import eventBus from "../../eventbus";
    import {
        IonSpinner,
    } from '@ionic/vue';
    import FormAssocia from "./FormAssocia";
    import Associazione from "./Associazione";

    export default {
        name: "AssociaRagazzi",

        components:
            {
                Associazione,
                FormAssocia,
                IonSpinner,
            },

        data() {
            return {
                elementi: [],
                load: true
            }
        },

        mounted() {
            this.getAssociazioni()
            this.deletedAssociazione()
        },

        methods: {
            getAssociazioni() {
                axios.get(help().linkassociazioni)
                    .then(response => {
                        this.load = false
                        this.elementi = response.data
                    })
            },

            deletedAssociazione(){
                eventBus().emitter.on("eliminaassociazione", (indice) => {
                    this.elementi.splice(indice, 1)
                })
            }
        }


    }
</script>

<style scoped>

</style>
