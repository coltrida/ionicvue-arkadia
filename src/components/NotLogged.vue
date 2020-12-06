<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Arkadia</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-item class="ion-margin-top">
                <ion-label position="floating">Username</ion-label>
                <ion-input
                        :value="form.user"
                        @input="form.user = $event.target.value"
                ></ion-input>
            </ion-item>

            <ion-button
                    class="ion-margin-top"
                    color="primary"
                    expand="full"
                    size="large"
                    @click="login"
            >Login</ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
    import help from "../help"
    import {
        IonPage, IonTitle, IonToolbar, IonHeader, IonContent, IonLabel, IonItem, IonInput, IonButton, alertController
    } from '@ionic/vue';

    import axios from 'axios';

    export default {
        name: "Home",

        data(){
            return{
                form: {
                    user: '',
                    /*password: ''*/
                }
            }
        },

        components:
            {
                IonTitle, IonToolbar, IonPage, IonHeader, IonContent, IonLabel, IonItem, IonInput, IonButton
            },

        methods:{
            login(){
                axios.post(help().linklogin, {
                    email: this.form.user,
                    /*password: this.form.password*/
                })
                    .then(response => {
                        if(response.data){
                            localStorage.setItem('user', response.data.name)
                            localStorage.setItem('role', response.data.role)
                            localStorage.setItem('id', response.data.id)
                            this.$router.push('/')
                            location.reload()
                        }else {
                            this.presentAlert()
                        }

                    })

            },

            async presentAlert() {
                const alert = await alertController
                    .create({
                        cssClass: 'my-custom-class',
                        header: 'Errore',
                        message: 'Email non corretta!',
                        buttons: ['OK'],
                    });
                return alert.present();
            },
        }
    }
</script>

<style scoped>

</style>
