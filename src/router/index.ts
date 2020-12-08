import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/tab1'
    },
    {
        path: '/tabs/',
        component: Tabs,
        children: [
            {
                path: '',
                redirect: 'tab1'
            },
            {
                path: 'tab1',
                name: 'attivita',
                component: () => import('@/views/Home.vue')
            },
            {
                path: 'inserisciRagazzo',
                component: () => import('@/components/ragazzi/Inserisci.vue')
            },
            {
                path: 'inserisciAttivita',
                component: () => import('@/components/attivita/Inserisci.vue')
            },
            {
                path: 'inserisciVettura',
                component: () => import('@/components/vetture/Inserisci.vue')
            },
            {
                path: 'presenzeOperatore',
                component: () => import('@/components/operatori/Index.vue')
            },
            {
                path: 'inserisciChilometri',
                component: () => import('@/components/chilometri/Index.vue')
            },
            {
                path: 'presenzeRagazzi',
                component: () => import('@/components/presenzeragazzi/Index.vue')
            },
            {
                path: 'associaAttivitaRagazzo',
                component: () => import('@/components/attivita/AssociaRagazzi.vue')
            },
            {
                path: 'statistiche',
                component: () => import('@/components/statistiche/Index.vue')
            },
            {
                path: 'statistichePresenzeRagazzi',
                component: () => import('@/components/statistiche/presenzeragazzi/Index.vue')
            },
            {
                path: 'statistichePresenzeOperatori',
                component: () => import('@/components/statistiche/presenzeoperatori/Index.vue')
            },
            {
                path: 'statisticheChilometriVetture',
                component: () => import('@/components/statistiche/chilometrivetture/Index.vue')
            },
            {
                path: 'statisticheChilometriRagazzi',
                component: () => import('@/components/statistiche/chilometriragazzi/Index.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
