<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-item>
                    <ion-grid>
                        <ion-row class="ion-justify-content-between ion-align-items-center">
                            <div>
                                <ion-title>Inserisci chilometri</ion-title>
                            </div>
                            <div>
                                <ion-button size="default" color="primary" @click="$router.go(-1)">Indietro</ion-button>
                            </div>
                        </ion-row>
                    </ion-grid>
                </ion-item>
            </ion-toolbar>
        </ion-header>

        <form-inserisci/>

        <ion-content>
            <div id="container" v-if="load">
                <ion-spinner id="spinner" name="bubbles"></ion-spinner>
            </div>
            <ion-list v-else>

                <viaggio
                        v-for="(item, index) in elementi"
                        :dati=item
                        :indice=index
                        :key="item.name"
                />

                <ion-item></ion-item>
                <ion-item></ion-item>
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
    import eventBus from "../../eventbus";
    import FormInserisci from './FormInserisci';
    import Viaggio from './Viaggio'
    import axios from 'axios';
    import {
        IonSpinner,
    } from '@ionic/vue';

    export default {
        name: "Index",

        components: {FormInserisci, Viaggio},

        data() {
            return {
                elementi: [],
                load: true
            }
        },

        mounted() {
            this.getTrip()
            this.addedTrip()
            this.deletedTrip()
        },

        methods:{
            getTrip(){
                axios.get(help().linkchilometri)
                    .then(response => {
                        this.load = false
                        this.elementi = response.data
                    })
            },

            addedTrip(){
                eventBus().emitter.on("nuovoviaggio", (payload) => {
                    this.elementi.unshift(payload)
                })
            },

            deletedTrip(){
                eventBus().emitter.on("eliminaviaggio", (indice) => {
                    this.elementi.splice(indice, 1)
                })
            }
        }

    }
</script>

<style scoped>

</style>
