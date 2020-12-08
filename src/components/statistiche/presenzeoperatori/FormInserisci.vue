<template>
    <ion-item>
        <ion-label>Operatore</ion-label>
        <ion-select placeholder="Seleziona" :value="operatore" @ionChange="operatore= $event.target.value">
            <ion-select-option
                    v-for="ope in operatori"
                    :value="ope.id"
                    :key="ope.id"
            >{{ope.name}}</ion-select-option>
        </ion-select>
    </ion-item>

    <ion-item>
        <ion-label>Settimana</ion-label>
        <ion-select placeholder="Seleziona" :value="settimana" @ionChange="settimana= $event.target.value">
            <ion-select-option
                    v-for="i in 53"
                    :value="i"
                    :key="i"
            >{{i}}</ion-select-option>
        </ion-select>
    </ion-item>

    <ion-button
            class="ion-margin-bottom"
            color="primary"
            expand="full"
            @click="cerca"
    >Cerca</ion-button>
</template>

<script>
    import help from "../../../help"
    import eventBus from "../../../eventbus";
    import axios from 'axios';
    export default {
        name: "FormInserisci",

        data(){
            return {
                annoattuale: new Date().getFullYear(),
                operatori: {},
                operatore: '',
                settimana: '',
                posso: true
            }
        },

        mounted() {
            this.getOperatori()
            this.getSettimanaAttuale()
        },

        computed:{
            annofine(){
                return this.annoattuale - 2019
            }
        },

        methods:{
            getOperatori(){
                axios.get(help().linkoperatori)
                    .then(response => {
                        this.operatori = response.data
                    })
            },

            getSettimanaAttuale(){
                axios.get(help().linksettimanaattuale)
                    .then(response => {
                        this.settimana = response.data
                    })
            },

            cerca(){
                axios.post(help().linkstatistichepresenzeoperatori, {
                    user: this.operatore,
                    settimana: this.settimana,
                })
                    .then(response => {
                        //console.log(response.data)
                        eventBus().emitter.emit('caricastatisticheoperatore', response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
