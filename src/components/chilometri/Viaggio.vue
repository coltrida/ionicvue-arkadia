<template>
    <ion-item-sliding>
        <ion-item>
            <ion-avatar slot="start" style="">
                {{dati.giorno}}
            </ion-avatar>
            <ion-label>
                <h2>Vettura: {{dati.vettura}}</h2>
                <h3>Km effettuati: {{dati.kmPercorsi}} - Operatore: {{dati.operatore}}</h3>
                <ion-button @click="openPopover">Passeggeri {{totPasseggeri}}</ion-button>
            </ion-label>
        </ion-item>
        <ion-item-options side="end">
            <ion-item-option color="danger" expandable @click="elimina(dati.id)">
                Delete
            </ion-item-option>
        </ion-item-options>
    </ion-item-sliding>
</template>

<script>
    import {
        IonIcon,
        IonItem,
        IonItemOption,
        IonItemOptions,
        IonItemSliding,
        IonLabel,
        IonList
    } from '@ionic/vue';
    import axios from 'axios';

    import help from "../../help"
    import {popoverController} from '@ionic/vue';
    import Passeggeri from "./Passeggeri"

    export default {
        name: "Viaggio",

        props: ['dati', 'indice'],

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

            elimina(id) {
                axios.delete(`${help().linkchilometri}/${id}`)
                    .then(() => {
                        /*eventBus().emitter.emit('eliminaviaggio', this.indice)*/
                        location.reload()
                    })
            }
        }
    }
</script>

<style scoped>

</style>
