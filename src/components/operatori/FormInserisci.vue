<template>
    <ion-item class="ion-margin-top ion-margin-bottom">
        <ion-label position="floating">GIORNO</ion-label>
        <!--<ion-datetime
                display-format="DD/MM/YYYY"
                :value=giorno
                @ionChange="valore = $event.target.value"
        ></ion-datetime>-->

        <ion-datetime display-format="DD/MM/YYYY"
                      format="YYYY-MM-DD"
                      v-model="form.number"
                      v-bind:value="form.date" name="date"
                      v-on:ionChange="form.date=$event.target.value"
                      required></ion-datetime>

        <!--<ion-datetime v-bind:value="model" v-bind:ionChange="model = $event.target.value"> </ion-datetime>-->

    </ion-item>
    <ion-item class="ion-margin-top ion-margin-bottom">
        <ion-label position="floating">Numero di Ore</ion-label>
        <ion-input
                type="number"
                :value="form.ore"
                @input="form.ore = $event.target.value"
        ></ion-input>
    </ion-item>
    <row class="ion-margin-top ion-margin-bottom">
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
    import axios from 'axios';
    import eventBus from "../../eventbus";
    import help from "../../help";
    export default {
        name: "FormInserisci",

        data(){
            return{
                oggi: new Date(),
                posso: true,
                valore: '',
                form:{
                    id: localStorage.getItem('id'),
                    gior: '',
                    number: '',
                    date: '',
                    ore: ''
                }
            }
        },

        computed:{
            giorno(){
                return this.oggi.getFullYear() + "/" + (this.oggi.getMonth()+1) + "/" + this.oggi.getDay()
            },

            possoInviare(){
                if(this.form.ore && this.form.date && this.posso){
                    return  false
                } else {
                    return  true
                }
            }
        },

        methods:{
            invia(){
                this.posso = false;
                axios.post(help().linkpresenzeoperatore, {
                    id: this.form.id,
                    ore: this.form.ore,
                    giorno: this.form.date.split('T')[0],
                })
                    .then(response => {
                        this.form.date = ''
                        this.form.ore = ''
                        this.posso = true
                        eventBus().emitter.emit('nuovapresenza', response.data)
                    })
                //alert(this.valore)
            }
        }
    }
</script>

<style scoped>

</style>
