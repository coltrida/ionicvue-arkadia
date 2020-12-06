<template>

    <ion-item>
        <ion-label position="floating">Nome Ragazzo</ion-label>
        <ion-input
                :value="nomeRagazzo"
                @input="digita"
        ></ion-input>
    </ion-item>

    <ion-button
            class="ion-margin-bottom"
            color="primary"
            expand="full"
            @click="inserisci"
            :disabled="vuoto"
    >Inserisci</ion-button>

</template>

<script>
    import help from "../../help"
    import axios from 'axios';
    import eventBus from "../../eventbus";
    export default {
        name: "FormInserisci",

        data(){
            return {
                vuoto: true,
                nomeRagazzo: ''
            }
        },

        methods:{
            digita(event){
                this.nomeRagazzo = event.target.value
                if(this.nomeRagazzo != ''){
                    this.vuoto = false
                } else {
                    this.vuoto = true
                }
            },

            inserisci(){
                axios.post(help().linkinserisciragazzo, {
                    nomeRagazzo: this.nomeRagazzo
                })
                    .then(response => {
                        this.nomeRagazzo = ''
                        eventBus().emitter.emit('nuovoragazzo', response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
