<template>
    <ion-item>
        <ion-label>Attivita'</ion-label>
        <ion-select placeholder="Seleziona" :value="attivi" @ionChange="attivi= $event.target.value">
            <ion-select-option
                    v-for="item in attivita"
                    :key="item.id"
                    :value="item.id"
            >{{item.name}}</ion-select-option>
        </ion-select>
    </ion-item>
    <ion-item>
        <ion-label>Ragazzi</ion-label>
        <ion-select multiple="true" cancel-text="Annulla" ok-text="Seleziona" :value="raga" @ionChange="raga= $event.target.value">
            <ion-select-option
                    v-for="ragazzo in ragazzi"
                    :value="ragazzo.id"
                    :key="ragazzo.id"
            >{{ragazzo.name}}</ion-select-option>
        </ion-select>
    </ion-item>
    <ion-button
            class="ion-margin-bottom"
            color="primary"
            expand="full"
            @click="associa"
            :disabled="possoInviare"
    >Associa</ion-button>
</template>

<script>
    import help from "../../help"
    import axios from 'axios';
    import eventBus from "../../eventbus";
    export default {
        name: "FormAssocia",

        data() {
            return {
                posso: true,
                raga:[],
                attivi: '',
                attivita: [],
                ragazzi: [],
                load: true
            }
        },

        computed:{
            possoInviare(){
                if(this.attivi && this.raga && this.posso){
                    return  false
                } else {
                    return  true
                }
            }
        },

        mounted() {
            this.getAttivita()
            this.getRagazzi()
        },

        methods:{
            getAttivita(){
                axios.get(help().linkattivita)
                    .then(response => {
                        this.load = false
                        this.attivita = response.data
                    })
            },

            getRagazzi(){
                axios.get(help().linkragazzi)
                    .then(response => {
                        this.load = false
                        this.ragazzi = response.data
                    })
            },

            associa(){
                this.posso = false
                axios.post(help().linkassociaattivitacliente, {
                    raga: this.raga,
                    attivita: this.attivi,
                })
                    .then(() => {
                        location.reload()
                    })
            }
        }
    }
</script>

<style scoped>

</style>
