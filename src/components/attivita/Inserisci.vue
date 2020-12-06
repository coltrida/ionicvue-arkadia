<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-item>
                    <ion-grid>
                        <ion-row class="ion-justify-content-between ion-align-items-center">
                            <div>
                                <ion-title>Inserisci Attività</ion-title>
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
                    <ion-col size="3">Tipo</ion-col>
                    <ion-col size="4">Costo</ion-col>
                    <ion-col size="1"></ion-col>
                </ion-row>
            </ion-grid>
        </ion-item>

        <ion-content>
            <div id="container" v-if="load">
                <ion-spinner id="spinner" name="bubbles"></ion-spinner>
            </div>
            <ion-list v-else>
                <attivita
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
    import Attivita from "./Attivita";
    import FormInserisci from "./FormInserisci"

    export default {
        name: "Inserisci",

        components:
            {
                Attivita,
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
            this.getAttivita()
            this.deletedAttivita()
            this.addedAttivita()
        },

        methods:{
            getAttivita(){
                axios.get(help().linkattivita)
                    .then(response => {
                        this.load = false
                        this.elementi = response.data
                    })
            },

            addedAttivita(){
                eventBus().emitter.on("nuovaattivita", (payload) => {
                    this.elementi.unshift(payload)
                })
            },

            deletedAttivita(){
                eventBus().emitter.on("eliminaattivita", (indice) => {
                    this.elementi.splice(indice, 1)
                })
            }
        }
    }
</script>

<style scoped>

</style>
