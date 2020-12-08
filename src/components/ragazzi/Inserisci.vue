<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-item>
                <ion-grid>
                    <ion-row class="ion-justify-content-between ion-align-items-center">
                    <div>
                        <ion-title>Inserisci Ragazzi</ion-title>
                    </div>
                    <div>
                        <ion-button size="default" color="primary" @click="$router.go(-1)">Indietro</ion-button>
                    </div>
                </ion-row>
                </ion-grid>
                </ion-item>
            </ion-toolbar>
        </ion-header>

        <form-inserisci></form-inserisci>

        <ion-item color="success">
            <ion-grid>
                <ion-row>
                    <ion-col size="4">Nome</ion-col>
                    <ion-col size="2">Vouc.</ion-col>
                    <ion-col size="3">Scadenza</ion-col>
                    <ion-col size="3"></ion-col>
                </ion-row>
            </ion-grid>
        </ion-item>

        <ion-content>
            <div id="container" v-if="load">
                <ion-spinner id="spinner" name="bubbles"></ion-spinner>
            </div>
            <ion-list v-else>
                <ragazzo
                        v-for="(item, index) in elementi"
                        :dati=item
                        :indice=index
                        :key="item.name
                "/>
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
    import Ragazzo from "./Ragazzo";
    import FormInserisci from "./FormInserisci"

    export default {
        name: "Inserisci",

        components:
            {
                Ragazzo,
                FormInserisci,
                IonSpinner,
            },

        data() {
            return {
                elementi: [],
                load: true,
            }
        },

        mounted() {
            this.getRagazzi()
            this.addedRagazzo()
            this.deletedRagazzo()
        },

        methods: {
            getRagazzi(){
                axios.get(help().linkragazzi)
                    .then(response => {
                        this.load = false
                        this.elementi = response.data
                    })
            },

            addedRagazzo(){
                eventBus().emitter.on("nuovoragazzo", (payload) => {
                    this.elementi.unshift(payload)
                })
            },

            deletedRagazzo(){
                eventBus().emitter.on("eliminaragazzo", (indice) => {
                    this.elementi.splice(indice, 1)
                })
            }
        }
    }
</script>

<style scoped>

</style>
