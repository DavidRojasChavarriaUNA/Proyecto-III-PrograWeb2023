<template>
    <div class="fixed bottom-0 right-0 z-5">
        <Message v-for="mensaje in mensajes" :key="mensaje.id" :severity="mensaje.severity"
            :pt="{
                button: { onclick: function(){ocultar(mensaje.id)} }
            }" >
            {{mensaje.Code}} - {{mensaje.message}}
        </Message>
    </div>
</template>

<script>

    import {v4 as uuidv4} from 'uuid';
import { Codigos } from '../js/sitioInterno';

    export default {
        props: ['respuestaServicio'],
        data() {
            return {
                mensajes: []
            }
        },
        updated() {
            if(!this.respuestaServicio.NoMostrarMas && !this.mensajes.includes(this.respuestaServicio)){
                this.respuestaServicio.id = uuidv4();
                this.respuestaServicio.NoMostrarMas = true;
                switch(this.respuestaServicio.Code){
                    case Codigos.CodeSuccess: this.respuestaServicio.severity="success"; break;
                    case Codigos.CodeError: this.respuestaServicio.severity="error"; break;
                    default: this.respuestaServicio.severity="info"; break;
                }
                this.mensajes.push(this.respuestaServicio);
            }
        },
        methods: {
            ocultar(id) {
                this.mensajes = this.mensajes.filter(m => m.id !== id);
            }
        }
    }
</script>