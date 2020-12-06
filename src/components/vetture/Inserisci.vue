<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-item>
                    <ion-grid>
                        <ion-row class="ion-justify-content-between ion-align-items-center">
                            <div>
                                <ion-title>Inserisci Vetture</ion-title>
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

        <ion-content>
            <div id="container" v-if="load">
                <ion-spinner id="spinner" name="bubbles"></ion-spinner>
            </div>
            <ion-list v-else>
                <vettura
                        v-for="(item, index) in elementi"
                        :key="item.name"
                        :dati=item
                        :indice=index
                />
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
    import Vettura from "./Vettura";
    import FormInserisci from "./FormInserisci"

    export default {
        name: "Inserisci",

        components:
            {
                Vettura,
                FormInserisci,
                IonSpinner,
            },

        data() {
            return {
                elementi: [],
                load: true
            }
        },

        mounted() {
            this.getVetture()
            this.addedVettura()
            this.deletedVettura()
        },

        methods:{
            getVetture(){
                axios.get(help().linkvetture)
                    .then(response => {
                        this.load = false
                        this.elementi = response.data
                    })
            },

            addedVettura(){
                eventBus().emitter.on("nuovavettura", (payload) => {
                    this.elementi.unshift(payload)
                })
            },

            deletedVettura(){
                eventBus().emitter.on("eliminavettura", (indice) => {
                    this.elementi.splice(indice, 1)
                })
            }
        }
    }
</script>

<style scoped>

</style>

