<template>
        <ion-item>
            <ion-grid>
                <ion-row class="ion-justify-content-between ion-align-items-center">
                    <ion-col size="5">{{dati.activity.name}}</ion-col>
                    <ion-col size="4">{{dati.client.name}}</ion-col>
                    <ion-col size="3">
                        <ion-button color="danger" @click="elimina(dati.id)">
                            Elimina
                            <ion-icon slot="end" name="trash"></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-item>
</template>

<script>
    import axios from 'axios';
    import eventBus from "../../eventbus";
    import help from "../../help"
    export default {
        name: "Associazione",

        props:['dati', 'indice'],

        methods:{
            elimina(id){
                axios.delete(`${help().linkassociazioni}/${id}`)
                    .then(response => {
                        eventBus().emitter.emit('eliminaassociazione', this.indice)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
