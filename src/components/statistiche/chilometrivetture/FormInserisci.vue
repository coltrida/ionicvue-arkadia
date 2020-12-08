<template>
    <ion-item>
        <ion-label>Vetture</ion-label>
        <ion-select placeholder="Seleziona" :value="car" @ionChange="car= $event.target.value">
            <ion-select-option
                    v-for="ope in vetture"
                    :value="ope.id"
                    :key="ope.id"
            >{{ope.name}}</ion-select-option>
        </ion-select>
    </ion-item>

    <ion-item>
        <ion-label>Mese</ion-label>
        <ion-select multiple="true" cancel-text="Annulla" ok-text="Seleziona" :value="mesi" @ionChange="mesi= $event.target.value">
            <ion-select-option
                    v-for="j in 12"
                    :value="j"
                    :key="j"
            >{{j}}</ion-select-option>
        </ion-select>
    </ion-item>


    <ion-item>
        <ion-label>Anno</ion-label>
        <ion-select placeholder="Seleziona" :value="anno" @ionChange="anno= $event.target.value">
            <ion-select-option
                    v-for="i in annofine"
                    :value="i+2019"
                    :key="i"
            >{{i+2019}}</ion-select-option>
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
                vetture: {},
                car: '',
                anno: '',
                mesi: [],
                posso: true
            }
        },

        mounted() {
            this.getVetture()
            this.getAnnoAttuale()
            this.getMeseAttuale()
        },

        computed:{
            annofine(){
                return this.annoattuale - 2019
            }
        },

        methods:{
            getVetture(){
                axios.get(help().linkvetture)
                    .then(response => {
                        this.vetture = response.data
                    })
            },

            getAnnoAttuale(){
                axios.get(help().linkannoattuale)
                    .then(response => {
                        this.anno = response.data
                    })
            },

            getMeseAttuale(){
                axios.get(help().linkmeseattuale)
                    .then(response => {
                        this.mesi.push(response.data)
                        //this.anno = response.data
                    })
            },

            cerca(){
                //console.log(this.mesi)
                axios.post(help().linkchilometrivetture, {
                    vettura: this.car,
                    anno: this.anno,
                    mesi: this.mesi
                })
                    .then(response => {
                        //console.log(response.data)
                        eventBus().emitter.emit('caricastatistichechilometrivetture', response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
