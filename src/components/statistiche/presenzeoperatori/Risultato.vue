<template>
    <ion-item>
        <ion-grid>
            <ion-row class="ion-justify-content-between ion-align-items-center">
                <ion-col size="4">
                    <ion-label>{{dati.giorno}}</ion-label>
                </ion-col>
                <ion-col size="8">
                    <ion-label>{{dati.ore}}</ion-label>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>
</template>

<script>
    export default {
        name: "Risultato",

        props:['dati']
    }
</script>

<style scoped>

</style>
