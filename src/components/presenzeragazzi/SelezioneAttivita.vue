<template>
    <ion-item>
        <ion-label>Attivita'</ion-label>
        <ion-select placeholder="Seleziona"
                    :value="idAttivitaSelelezionata"
                    @ionChange="selezionaAttivita($event.target.value)">
            <ion-select-option
                    v-for="attivi in attivita"
                    :key="attivi.id"
                    :value="attivi"
            >{{attivi.name}}</ion-select-option>
        </ion-select>
    </ion-item>
</template>

<script>
    import eventBus from "../../eventbus";
    export default {
        name: "SelezioneAttivita",

        props:['attivita'],

        methods:{
            selezionaAttivita(event){
                eventBus().emitter.emit('elementoselezionato', event)
            }
        }
    }
</script>

<style scoped>

</style>
