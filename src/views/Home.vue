<template>
    <logged v-if="logged" />
    <not-logged v-else />
</template>

<script>
    /*import {
        IonPage, IonTitle, IonToolbar, IonHeader, IonContent, IonLabel, IonItem, IonInput, IonButton
    } from '@ionic/vue';*/

    /*import axios from 'axios';*/
    import NotLogged from '../components/NotLogged'
    import Logged from '../components/Logged'

    export default {
        name: "Home",

        data(){
            return{
                logged: false
                /*form: {
                    user: '',
                    password: ''
                }*/
            }
        },

        components:
            {
                Logged, NotLogged
            },

        mounted(){
            localStorage.getItem('user') ? this.logged = true : this.logged = false
        },

        methods:{
            /*login(){
                axios.post('https://www.andirivieni.eu/api/login', {
                    email: this.form.user,
                    password: this.form.password
                })
                    .then(response => {
                        console.log(response)
                        localStorage.setItem('user', response.data.name)
                        localStorage.setItem('role', response.data.role)
                    })

            }*/
        }
    }
</script>

<style scoped>

</style>
