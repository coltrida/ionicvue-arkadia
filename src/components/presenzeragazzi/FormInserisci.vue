<template>

    <selezione-attivita :attivita="attivita"></selezione-attivita>

    <ion-item>
        <ion-label>Partecipanti</ion-label>
        <ion-select multiple="true" cancel-text="Annulla" ok-text="Seleziona" :value="raga" @ionChange="raga= $event.target.value">
            <ion-select-option
                    v-for="ragazzo in ragazzi"
                    :value="ragazzo.id"
                    :key="ragazzo.id"
            >{{ragazzo.name}}</ion-select-option>
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
        <ion-input
                placeholder="Quantita'"
                type="number"
                :disabled=disattivaQuantita
                :value="quantita"
                @input="quantita = $event.target.value"
        ></ion-input>
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
    import eventBus from "../../eventbus";
    import help from "../../help"
    import axios from 'axios';
    import SelezioneAttivita from "./SelezioneAttivita";
    export default {
        name: "FormInserisci",
        components: {SelezioneAttivita},
        data(){
            return {
                costoselezionato: '',
                attivita: {},
                ragazzi: {},
                number: '',
                date: '',
                quantita: '',
                note: '',
                idAttivitaSelelezionata: '',
                raga:[],
                posso: true,
                disattivaQuantita: true
            }
        },

        mounted(){
            this.getAttivita()
            this.getRagazzi()
            this.selezionato()
        },

        computed:{
            possoInviare(){
                if(this.idAttivitaSelelezionata && this.date && this.posso){
                    return  false
                } else {
                    return  true
                }
            },

        },


        methods:{
            getAttivita(){
                axios.get(help().linkattivita)
                    .then(response => {
                        this.attivita = response.data
                    })
            },

            getRagazzi(){
                axios.get(help().linkragazzi)
                    .then(response => {
                        this.ragazzi = response.data
                    })
            },

            selezionato(){
                eventBus().emitter.on("elementoselezionato", (elemento) => {
                    this.raga = []
                    this.idAttivitaSelelezionata = elemento.id
                    this.costoselezionato = elemento.costo
                    if(elemento.tipo == 'orario'){
                        this.disattivaQuantita = false
                    } else {
                        this.disattivaQuantita = true
                        this.quantita = 1
                    }
                    axios.get(`${help().linkattivitacliente}/${elemento.id}`)
                        .then((response) => {
                            response.data.forEach(element => {
                                this.raga.push(element.client_id)
                            })
                        })

                })
            },

            invia(){
                //console.log(this.selezionato.costo)
                this.posso = false
                axios.post(help().linkattivitacliente, {
                    attivita: this.idAttivitaSelelezionata,
                    quantita: this.quantita,
                    costo: (this.costoselezionato * this.quantita),
                    giorno: this.date.split('T')[0],
                    raga: this.raga
                })
                    .then(() => {
                        location.reload()
                        /*eventBus().emitter.emit('nuovoviaggio', response.data)
                        this.kmInit = '',
                            this.kmFinit = '',
                            this.ope = '',
                            this.car = '',
                            this.date = '',
                            this.raga = [],
                            this.posso = true*/
                    })
            },
        }
    }
</script>

<style scoped>

</style>
