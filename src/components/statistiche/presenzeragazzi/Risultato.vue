<template>
    <ion-item color="success">
        <ion-grid>
            <ion-row>
                <ion-col size="5">Attivita'</ion-col>
                <ion-col size="3">Giorno</ion-col>
                <ion-col size="4">Quantita'</ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>

        <ion-list>
            <Presenza
                v-for="item in valori"
                :passa=item
                :key="item.id"
            />
        </ion-list>


</template>

<script>
    import Presenza from "./Presenza";
    export default {
        name: "Risultato",

        data(){
            return{
                valori: []
            }
        },

        components: {Presenza},

        props: ['dati'],

        mounted(){
            this.valori = this.dati
            //console.log(this.valori)
        }
    }
</script>

<style scoped>

</style>
