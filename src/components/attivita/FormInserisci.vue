<template>

    <ion-item>
        <ion-label position="floating">Nome Attivita'</ion-label>
        <ion-input
                :value="nomeAttivita"
                @input="nomeAttivita = $event.target.value"
        ></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Costo</ion-label>
        <ion-input
                type="number"
                :value="costo"
                @input="costo = $event.target.value"
        ></ion-input>
    </ion-item>
    <ion-item>
        <ion-label>Tipo</ion-label>
        <ion-select placeholder="Seleziona" :value="tipo" @ionChange="tipo= $event.target.value">
            <ion-select-option value="mensile">Mensile</ion-select-option>
            <ion-select-option value="orario">Orario</ion-select-option>
        </ion-select>
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
                nomeAttivita: '',
                costo: '',
                tipo: ''
            }
        },

        computed:{
            possoInviare(){
                if(this.nomeAttivita && this.costo && this.posso){
                    return  false
                } else {
                    return  true
                }
            }
        },

        methods:{
            inserisci(){
                this.posso = false
                axios.post(help().linkinserisciattivita, {
                    nomeAttivita: this.nomeAttivita,
                    costo: this.costo,
                    tipo: this.tipo
                })
                    .then(response => {
                        this.nomeAttivita = '',
                        this.costo = '',
                        this.tipo = '',
                        this.posso = true,
                        eventBus().emitter.emit('nuovaattivita', response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>

