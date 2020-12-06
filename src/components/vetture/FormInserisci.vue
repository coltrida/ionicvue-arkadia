<template>

    <ion-item>
        <ion-label position="floating">Nome Vettura</ion-label>
        <ion-input
                :value="nomeVettura"
                @input="nomeVettura = $event.target.value"
        ></ion-input>
    </ion-item>

    <ion-button
            class="ion-margin-bottom"
            color="primary"
            expand="full"
            @click="inserisci"
            :disabled="possoInviare"
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
                posso: true,
                nomeVettura: ''
            }
        },

        computed:{
            possoInviare(){
                if(this.nomeVettura && this.posso){
                    return  false
                } else {
                    return  true
                }
            }
        },

        methods:{
            inserisci(){
                this.posso = false
                axios.post(help().linkinseriscivettura, {
                    nomevettura: this.nomeVettura
                })
                    .then(response => {
                        this.nomeVettura = ''
                        this.posso = true
                        eventBus().emitter.emit('nuovavettura', response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>


