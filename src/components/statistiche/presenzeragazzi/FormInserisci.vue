<template>
    <ion-item>
        <ion-label>Ragazzo</ion-label>
        <ion-select placeholder="Seleziona" :value="raga" @ionChange="raga= $event.target.value">
            <ion-select-option
                    v-for="ragazzo in ragazzi"
                    :value="ragazzo.id"
                    :key="ragazzo.id"
            >{{ragazzo.name}}</ion-select-option>
        </ion-select>
    </ion-item>

    <ion-item>
        <ion-grid>
            <ion-row>
                <ion-col size="6">
                    <ion-label>Mese</ion-label>
                    <ion-select placeholder="Seleziona" :value="mese" @ionChange="mese= $event.target.value">
                        <ion-select-option
                                v-for="i in 12"
                                :value="i"
                                :key="i"
                        >{{i}}</ion-select-option>
                    </ion-select>
                </ion-col>
                <ion-col size="6">
                    <ion-label>Anno</ion-label>
                    <ion-select placeholder="Seleziona" :value="anno" @ionChange="anno= $event.target.value">
                        <ion-select-option
                                v-for="i in annofine"
                                :value="i+2019"
                                :key="i"
                        >{{i+2019}}</ion-select-option>
                    </ion-select>
                </ion-col>
            </ion-row>
        </ion-grid>
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
                mese: '',
                anno: '',
                raga: '',
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

            getMeseAttuale(){
                axios.get(help().linkmeseattuale)
                    .then(response => {
                        this.mese = response.data
                    })
            },

            getAnnoAttuale(){
                axios.get(help().linkannoattuale)
                    .then(response => {
                        this.anno = response.data
                    })
            },

            cerca(){
                axios.post(help().linkstatistichepresenzeragazzi, {
                    ragazzo: this.raga,
                    mese: this.mese,
                    anno: this.anno
                })
                    .then(response => {
                        //console.log(response.data)
                        eventBus().emitter.emit('caricastatisticheragazzi', response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
