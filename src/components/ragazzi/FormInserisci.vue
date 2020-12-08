<template>

    <ion-item>
        <ion-label position="floating">Nome Ragazzo</ion-label>
        <ion-input
                :value="nomeRagazzo"
                @input="nomeRagazzo = $event.target.value"
        ></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Voucher</ion-label>
        <ion-input
                type="number"
                :value="voucher"
                @input="voucher = $event.target.value"
        ></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Scadenza</ion-label>
        <ion-datetime display-format="DD/MM/YYYY"
                      format="YYYY-MM-DD"
                      v-model="number"
                      v-bind:value="scadenza" name="date"
                      v-on:ionChange="scadenza=$event.target.value"
                      >

        </ion-datetime>
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
                number: '',
                voucher: '',
                scadenza: '',
                nomeRagazzo: ''
            }
        },

        methods:{

            inserisci(){
                axios.post(help().linkinserisciragazzo, {
                    nomeRagazzo: this.nomeRagazzo,
                    voucher: this.voucher,
                    scadenza: this.scadenza.split('T')[0],
                })
                    .then(response => {
                        this.nomeRagazzo = '',
                        this.voucher = '',
                        this.scadenza = '',
                        eventBus().emitter.emit('nuovoragazzo', response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
