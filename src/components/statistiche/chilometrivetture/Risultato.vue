<template>
    <ion-item>
        <ion-avatar slot="start">
            {{dati.giorno}}
        </ion-avatar>
        <ion-label>
            <h3>Km effettuati: {{dati.kmPercorsi}} - Operatore: {{dati.operatore}}</h3>
            <ion-button @click="openPopover">Passeggeri {{totPasseggeri}}</ion-button>
        </ion-label>
    </ion-item>
</template>

<script>
    import {popoverController} from '@ionic/vue';
    import Passeggeri from "./Passeggeri"

    export default {
        name: "Risultato",

        props: ['dati'],

        computed: {
            totPasseggeri() {
                return this.dati.passeggeri.length
            }
        },

        methods: {
            async openPopover(ev) {
                const popover = await popoverController.create({
                    component: Passeggeri,
                    traslucent: true,
                    componentProps: {pass: this.dati.passeggeri},
                    event: ev
                })
                return popover.present()
            },
        }
    }
</script>

<style scoped>
    ion-avatar {
        width: 100px;
    }
</style>
