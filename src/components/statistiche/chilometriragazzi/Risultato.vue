<template>
    <ion-item>
        <ion-grid>
            <ion-row>
                <ion-col size="3">{{dati.giorno}}</ion-col>
                <ion-col size="9">Km effettuati: {{dati.kmPercorsi}} - Operatore: {{dati.operatore}}</ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>

<!--    <ion-item>
        <ion-avatar slot="start">
            {{dati.giorno}}
        </ion-avatar>
        <ion-label>
            <h2>Km effettuati: {{dati.kmPercorsi}} - Operatore: {{dati.operatore}}</h2>
        </ion-label>
    </ion-item>-->
</template>

<script>
    export default {
        name: "Risultato",

        props: ['dati'],
    }
</script>

<style scoped>
    ion-avatar {
        width: 100px;
    }
</style>
