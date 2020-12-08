<template>
    <ion-item>
        <ion-label>Ragazzi</ion-label>
        <ion-select placeholder="Seleziona" :value="ragazzo" @ionChange="ragazzo= $event.target.value">
            <ion-select-option
                    v-for="ope in ragazzi"
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
                ragazzi: {},
                ragazzo: '',
                anno: '',
                mesi: [],
                posso: true
            }
        },

        mounted() {
            this.getRagazzi()
            this.getAnnoAttuale()
            this.getMeseAttuale()
        },

        computed:{
            annofine(){
                return this.annoattuale - 2019
            }
        },

        methods:{
            getRagazzi(){
                axios.get(help().linkragazzi)
                    .then(response => {
                        this.ragazzi = response.data
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
                axios.post(help().linkchilometriragazzi, {
                    ragazzo: this.ragazzo,
                    anno: this.anno,
                    mesi: this.mesi
                })
                    .then(response => {
                        console.log(response.data)
                        eventBus().emitter.emit('caricastatistichechilometriragazzi', response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
