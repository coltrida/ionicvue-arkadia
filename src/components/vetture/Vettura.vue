<template>
    <ion-item>
        <ion-grid>
            <ion-row class="ion-justify-content-between ion-align-items-center">
                <div>
                    <ion-label>{{dati.name}}</ion-label>
                </div>
                <div>
                    <ion-button color="danger" @click="elimina(dati.id)">
                        Elimina
                        <ion-icon slot="end" name="trash"></ion-icon>
                    </ion-button>
                </div>
            </ion-row>

        </ion-grid>
    </ion-item>
</template>

<script>
    import eventBus from "../../eventbus";
    import axios from 'axios';
    import help from "../../help";
    export default {
        name: "Vettura",

        props: ['dati', 'indice'],

        methods: {
            elimina(id) {
                //console.log(id)
                axios.delete(`${help().linkvetture}/${id}`)
                    .then(response => {
                        //console.log('indice '+this.indice)
                        eventBus().emitter.emit('eliminavettura', this.indice)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
