import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primevue/resources/primevue.min.css'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Password from 'primevue/password'
import Message from 'primevue/message'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import Textarea from 'primevue/textarea'
import Menubar from 'primevue/menubar'
import Image from 'primevue/image'
import RadioButton from 'primevue/radiobutton'
import Dialog from 'primevue/dialog'
import Carousel from 'primevue/carousel';
import Toolbar from 'primevue/toolbar';
import Divider from 'primevue/divider'

import SitioInterno from './sitioInterno/App.vue'

import CrearVotacion from './sitioInterno/votacion/create.vue'

import VotanteIndex from './sitioInterno/votante/index.vue'
import Votar from './sitioInterno/votante/vote.vue'

import ResultadosIndex from './sitioInterno/resultados/index.vue'
import resultDetalle from './sitioInterno/resultados/resultDetails.vue'
import Votaciones from './sitioInterno/votacion/index.vue'
import Votacion from './sitioInterno/votacion/edit.vue'

import SitioPublicidad from './sitioPublicidad/App.vue'
import Home from './sitioPublicidad/home.vue'
import Register from './sitioPublicidad/seguridad/register.vue'
import Login from './sitioPublicidad/seguridad/login.vue'

const routes = [
    { 
        path: '/', component: SitioPublicidad ,
        children: [
            { path: '/', component: Home },
            { path: '/home', component: Home },
            { path: '/register', component: Register },
            { path: '/login', component: Login }
        ]
    }, 
    { 
        path: '/sitioInterno/:idUsuario', component: SitioInterno,
        children:[
            { path: '/votante/:idUsuario', component: VotanteIndex },
            { path: '/votante/:idUsuario/:idVotacion/votar', component: Votar },
            { path: '/votacion/create/:idUsuario', component: CrearVotacion },
            //{ path: '/votacion/:idUsuario', component:  },--componente index de editar
            //{ path: '/votacion/:idUsuario/:idVotacion/', component:  }, --componente editar votacion
            { path: '/resultados/:idUsuario', component: ResultadosIndex },
            { path: '/resultados/:idUsuario/:idVotacion', component: resultDetalle },
            { path: '/votaciones/:idUsuario', component: Votaciones },
            { path: '/votacion/:idUsuario/:idVotacion/edit', component: Votacion },
        ]
    },
    /*{
        path: '/sitioPublicidad', component: SitioPublicidad,
        children: [
            { path: '/home', component: Home },
            { path: '/register', component: Register },,
            { path: '/login', component: Login }
        ]
    },*/
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

const app = createApp(App)

app.use(router)

app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Password', Password);
app.component('Message', Message);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Textarea', Textarea);
app.component('Menubar', Menubar);
app.component('Image', Image);
app.component('RadioButton', RadioButton);
app.component('Dialog', Dialog);
app.component('Carousel', Carousel);
app.component('Toolbar', Toolbar);
app.component('Divider', Divider);
app.mount('#app')