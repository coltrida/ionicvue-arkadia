<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-item>
                    <ion-grid>
                        <ion-row class="ion-justify-content-between ion-align-items-center">
                            <div>
                                <ion-title>Presenze Operatore</ion-title>
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

                <row>
                    <ion-item>
                        <ion-grid>
                            <ion-row>
                                <ion-col size="6">
                                    Giorno
                                </ion-col>
                                <ion-col>
                                    Ore
                                </ion-col>
                                <ion-col>
                                    Azioni
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-item>
                </row>


                <lista-presenze
                        v-for="(item, index) in elementi"
                        :dati=item
                        :indice=index
                        :key="item.id"
                />
            </ion-list>

        </ion-content>
    </ion-page>

</template>

<script>
    import axios from 'axios';
    import eventBus from "../../eventbus";
    import ListaPresenze from './ListaPresenze'
    import {
        IonSpinner,
    } from '@ionic/vue';
    import FormInserisci from "./FormInserisci";
    import help from "../../help";
    export default {
        name: "Index",

        components:
            {
                ListaPresenze,
                IonSpinner,
                FormInserisci
            },

        data() {
            return {
                elementi: [],
                load: true,
                id: localStorage.getItem('id')
            }
        },

        mounted() {
            this.getPresenze()
            this.addedPresenze()
            this.deletedPresenze()
        },

        methods: {
            getPresenze(){
                axios.get(`${help().linkpresenzeoperatore}/${this.id}`)
                    .then(response => {
                        this.load = false
                        this.elementi = response.data
                    })
            },

            addedPresenze(){
                eventBus().emitter.on("nuovapresenza", (payload) => {
                    this.elementi.unshift(payload)
                })
            },

            deletedPresenze(){
                eventBus().emitter.on("eliminapresenza", (indice) => {
                    this.elementi.splice(indice, 1)
                })
            }
        }
    }
</script>

<style scoped>

</style>
