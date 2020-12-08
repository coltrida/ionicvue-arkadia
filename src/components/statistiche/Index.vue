<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-item>
                    <ion-grid>
                        <ion-row class="ion-justify-content-between ion-align-items-center">
                            <div>
                                <ion-title>Statistiche</ion-title>
                            </div>
                            <div>
                                <ion-button size="default" color="primary" @click="$router.go(-1)">Indietro</ion-button>
                            </div>
                        </ion-row>
                    </ion-grid>
                </ion-item>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    href="tabs/statistichePresenzeRagazzi"
            >Presenze Ragazzi
            </ion-button>

            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    href="tabs/statistichePresenzeOperatori"
            >Presenze Operatore
            </ion-button>

            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    href="tabs/statisticheChilometriVetture"
            >Km Vetture
            </ion-button>

            <ion-button
                    class="ion-margin-top ion-margin-horizontal"
                    color="primary"
                    expand="full"
                    size="large"
                    href="tabs/statisticheChilometriRagazzi"
            >Km Ragazzi
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
