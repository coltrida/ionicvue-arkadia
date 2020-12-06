<template>
    <ion-item>
        <ion-grid>
            <ion-row class="ion-justify-content-between ion-align-items-center">
                <ion-col size="4">
                    <ion-label>{{dati.name}}</ion-label>
                </ion-col>
                <ion-col size="3">
                    <ion-label>{{dati.tipo}}</ion-label>
                </ion-col>
                <ion-col size="2">
                    <ion-label>{{dati.costo}}</ion-label>
                </ion-col>
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
        name: "Attivita",

        props: ['dati', 'indice'],

        methods: {
            elimina(id) {
                axios.delete(`${help().linkattivita}/${id}`)
                    .then(response => {
                        eventBus().emitter.emit('eliminaattivita', this.indice)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
