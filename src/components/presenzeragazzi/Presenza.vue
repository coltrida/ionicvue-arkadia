<template>
    <ion-item-sliding>
    <ion-item>
        <ion-grid>
            <ion-row>
                <ion-col size="4">{{dati.ragazzo}}</ion-col>
                <ion-col size="3">{{dati.giorno}}</ion-col>
                <ion-col size="4">{{dati.attivita}}</ion-col>
                <ion-col size="1">{{dati.quantita}}</ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>
        <ion-item-options side="end">
            <ion-item-option color="danger" expandable @click="elimina(dati.id)">
                Delete
            </ion-item-option>
        </ion-item-options>
    </ion-item-sliding>
</template>

<script>
    import axios from 'axios';
    import eventBus from "../../eventbus";
    import help from "../../help"
    export default {
        name: "Presenze",

        props:['dati', 'indice'],

        methods:{
            elimina(id){
                axios.delete(`${help().linkattivitacliente}/${id}`)
                    .then(response => {
                        eventBus().emitter.emit('eliminaattivitacliente', this.indice)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
