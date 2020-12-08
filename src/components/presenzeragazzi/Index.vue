<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-item>
                    <ion-grid>
                        <ion-row class="ion-justify-content-between ion-align-items-center">
                            <div>
                                <ion-title>Presenze ragazzi</ion-title>
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

        <ion-item color="success">
            <ion-grid>
                <ion-row>
                    <ion-col size="4">Nome</ion-col>
                    <ion-col size="3">Giorno</ion-col>
                    <ion-col size="4">Attivita'</ion-col>
                    <ion-col size="1">Qt</ion-col>
                </ion-row>
            </ion-grid>
        </ion-item>

        <ion-content>
            <div id="container" v-if="load">
                <ion-spinner id="spinner" name="bubbles"></ion-spinner>
            </div>
            <ion-list v-else>
                <presenza
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
                <ion-item></ion-item>
            </ion-list>

        </ion-content>
    </ion-page>
</template>

<script>
    import help from "../../help"
    import Presenza from './Presenza'
    import FormInserisci from './FormInserisci';
    import axios from 'axios';
    import eventBus from "../../eventbus";
    import {
        IonSpinner,
    } from '@ionic/vue';
    export default {
        name: "Index",

        components: {
            FormInserisci,
            IonSpinner,
            Presenza
        },

        data() {
            return {
                elementi: [],
                load: true
            }
        },

        mounted() {
            this.getItems()
            this.deletedAttivitaCliente()
        },

        methods:{
            getItems(){
                axios.get(help().linkattivitacliente)
                    .then(response => {
                        this.load = false
                        this.elementi = response.data
                    })
            },

            deletedAttivitaCliente(){
                eventBus().emitter.on("eliminaattivitacliente", (indice) => {
                    this.elementi.splice(indice, 1)
                })
            }
        }
    }
</script>

<style scoped>

</style>
