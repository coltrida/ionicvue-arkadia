<template>
    <row>
        <ion-item>
            <ion-grid>
                <ion-row class="ion-align-items-center">
                    <ion-col size="6">
                        {{dati.giorno}}
                    </ion-col>
                    <ion-col>
                        {{dati.ore}}
                    </ion-col>
                    <ion-col>
                        <ion-button color="danger" @click="elimina(dati.id)">Elimina</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-item>
    </row>

</template>

<script>
    import axios from 'axios';
    import eventBus from "../../eventbus";
    import help from "../../help";
    export default {
        name: "ListaPresenze",

        props: ['dati', 'indice'],

        data(){
            return{

            }
        },

        methods:{
            elimina(id){
                axios.delete(`${help().linkpresenzeoperatore}/${id}`)
                    .then(response => {
                        //console.log('indice '+this.indice)
                        eventBus().emitter.emit('eliminapresenza', this.indice)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
