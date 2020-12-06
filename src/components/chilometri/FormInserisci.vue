<template>
    <ion-item>
        <ion-label>Vettura</ion-label>
        <ion-select placeholder="Seleziona" :value="car" @ionChange="car= $event.target.value">
            <ion-select-option
                    v-for="macchina in vetture"
                    :key="macchina.id"
                    :value="macchina.id"
            >{{macchina.name}}</ion-select-option>
        </ion-select>
    </ion-item>
    <ion-item>
        <ion-row class="ion-justify-content-between ion-align-items-center">
            <ion-col size="6">
                <ion-input
                        placeholder="Km Iniziali"
                        type="number"
                        :value="kmInit"
                        @input="kmInit = $event.target.value"
                ></ion-input>
            </ion-col>
            <ion-col size="6">
                <ion-input
                        placeholder="Km Finali"
                        type="number"
                        :value="kmFinit"
                        @input="kmFinit = $event.target.value"
                ></ion-input>
            </ion-col>
        </ion-row>
    </ion-item>
    <ion-item>
        <ion-label>Operatore</ion-label>
        <ion-select placeholder="Seleziona" :value="ope" @ionChange="ope= $event.target.value">
            <ion-select-option
                    v-for="operatore in operatori"
                    :key="operatore.id"
                    :value="operatore.id"
            >{{operatore.name}}</ion-select-option>
        </ion-select>
    </ion-item>
    <ion-item>
        <ion-label position="floating">GIORNO</ion-label>
        <ion-datetime display-format="DD/MM/YYYY"
                      format="YYYY-MM-DD"
                      v-model="number"
                      v-bind:value="date" name="date"
                      v-on:ionChange="date=$event.target.value"
                      required>

        </ion-datetime>
    </ion-item>
    <ion-item>
        <ion-label>Passeggeri</ion-label>
        <ion-select multiple="true" cancel-text="Annulla" ok-text="Seleziona" :value="raga" @ionChange="raga= $event.target.value">
            <ion-select-option
                    v-for="ragazzo in ragazzi"
                    :value="ragazzo.id"
                    :key="ragazzo.id"
            >{{ragazzo.name}}</ion-select-option>
        </ion-select>
    </ion-item>
    <row class="ion-margin-bottom">
        <ion-button
                expand="full"
                :disabled=possoInviare
                size="large"
                color="primary"
                class="ion-margin-bottom"
                @click="invia"
        >Inserisci</ion-button>
    </row>
</template>

<script>
    import help from "../../help"
    import eventBus from "../../eventbus";
    import axios from 'axios';
    export default {
        name: "FormInserisci",

        data(){
            return {
                vetture: {},
                operatori: {},
                ragazzi: {},
                number: '',
                date: '',
                kmInit: '',
                kmFinit: '',
                ope: '',
                car: '',
                raga: [],
                posso: true
            }
        },

        computed:{
            possoInviare(){
                if(this.kmInit && this.kmFinit && this.date && this.ope && this.car && this.raga && this.posso){
                    return  false
                } else {
                    return  true
                }
            }
        },

        mounted() {
            this.getVetture()
            this.getOperatori()
            this.getRagazzi()
        },

        methods:{
            getVetture(){
                axios.get(help().linkvetture)
                    .then(response => {
                        this.vetture = response.data
                    })
            },

            getOperatori(){
                axios.get(help().linkoperatori)
                    .then(response => {
                        this.operatori = response.data
                    })
            },


            getRagazzi(){
                axios.get(help().linkragazzi)
                    .then(response => {
                        this.ragazzi = response.data
                    })
            },

            invia(){
                this.posso = false
                axios.post(help().linkinseriscichilometri, {
                    kminiziali: this.kmInit,
                    kmfinali: this.kmFinit,
                    utente: this.ope,
                    car: this.car,
                    giorno: this.date.split('T')[0],
                    raga: this.raga
                })
                    .then(response => {
                        eventBus().emitter.emit('nuovoviaggio', response.data)
                        this.kmInit = '',
                        this.kmFinit = '',
                        this.ope = '',
                        this.car = '',
                        this.date = '',
                        this.raga = [],
                        this.posso = true
                    })
            }
        }

    }
</script>

<style scoped>

</style>
