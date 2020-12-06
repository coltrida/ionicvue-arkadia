<template>
    <ion-item>
        <ion-label @click="visualizza(dati.name)">{{dati.name}}</ion-label>
    </ion-item>
</template>

<script>
    import {
        IonItem,
        IonLabel,
    } from '@ionic/vue';

    export default {
        name: "Attivita",

        props:['dati'],

        components:
            {
                IonItem,
                IonLabel,
            },

        methods:{
            visualizza(nome){
                this.$router.push({name: 'info', params: {nome} })
            }
        }
    }
</script>

<style scoped>

</style>
