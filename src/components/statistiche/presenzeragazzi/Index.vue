<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-item>
                    <ion-grid>
                        <ion-row class="ion-justify-content-between ion-align-items-center">
                            <div>
                                <ion-title>Presenze Ragazzi</ion-title>
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
            <ion-list>
                <risultato
                    v-for="item in risultati"
                    :dati=item
                    :key="item.name"
                />
            </ion-list>
            <ion-item/>
            <ion-item color="warning" v-if="totale">
                <ion-grid>
                    <ion-row>
                        <ion-col size="12">Costo Totale: {{totale}}</ion-col>
                    </ion-row>
                </ion-grid>
            </ion-item>
            <ion-item/>
            <ion-item/>
            <ion-item/>
            <ion-item/>
            <ion-item/>
            <ion-item/>
            <ion-item/>

        </ion-content>
    </ion-page>
</template>


<script>
    import help from "../../../help"
    import eventBus from "../../../eventbus";
    import axios from 'axios';
    import FormInserisci from "./FormInserisci";
    import Risultato from "./Risultato";
    export default {
        name: "Index",

        components: {Risultato, FormInserisci},

        data(){
            return{
                risultati: {},
                totale: ''
            }
        },

        mounted(){
            this.caricaRisultati()
        },

        methods:{
            caricaRisultati(){
                eventBus().emitter.on("caricastatisticheragazzi", (dati) => {
                    this.risultati = dati[0]
                    this.totale = dati[1]
                    //console.log(dati[0])
                })
            }
        }
    }
</script>

<style scoped>

</style>
