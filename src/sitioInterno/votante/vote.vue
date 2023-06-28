<template>
    <article id="Votar" class="p-4 border bg-light">
        <h1 class="text-center mb-4">Realice su votación</h1>
        <section class="m-3 p-3">
            <h2 class="text-center">{{votacionSeleccionada.descripcion}}</h2>
        </section>
        <div>
            <div class="grid grid-nogutter">
                <option-vote v-for="opcion in votacionSeleccionada.opciones" v-bind:key="opcion.id"
                    v-bind:opcion="opcion" v-on:seleccionarOpcion="seleccionarOpcion">
                </option-vote>
            </div>
            <div class="text-center mt-5">
                <Button label="Confirmar Votación" severity="success" outlined v-on:click="mostrarModalDialog"></Button>
            </div>
        </div>
        <modal-confirmar-votacion v-if="opcionSeleccionada" v-bind:opcionSeleccionada="opcionSeleccionada"
            v-on:realizarVotacion="realizarVotacion" v-bind:mostrarModal="mostrarModal" v-on:OcultarModalDialog="OcultarModalDialog"></modal-confirmar-votacion>
        <modal-debe-seleccionar-una-opcion v-else v-bind:mostrarModal="mostrarModal" v-on:OcultarModalDialog="OcultarModalDialog"></modal-debe-seleccionar-una-opcion>
    </article>
</template>

<script>
    import {Codigos} from '../../js/sitioInterno';
    import optionVote from './option.vue';
    import modalConfirmarVotacion from './modalConfirmarVotacion.vue';
    import modalDebeSeleccionarUnaOpcion from './modalDebeSeleccionarUnaOpcion.vue';

    const urlBase = import.meta.env.VITE_BASE_URL;

    export default {
        data() {
            return {
                idUsuario: 0,
                votacionSeleccionada: {
                    id: 0
                },
                opcionSeleccionada: null,
                mostrarModal: false
            }
        },
        components: {
            optionVote,
            modalConfirmarVotacion,
            modalDebeSeleccionarUnaOpcion
        },
        created() {
            this.InicializarData();
            this.obtenerVotacionSeleccionada();
        },
        methods: {
            mostrarModalDialog(){
                this.mostrarModal = true;
            },
            OcultarModalDialog(){
                this.mostrarModal = false;
            },
            InicializarData() {
                this.idUsuario = this.$route.params.idUsuario;
                this.votacionSeleccionada.id = this.$route.params.idVotacion;
            },
            redireccionarIndex() {
                this.$router.push(`/votante/${this.idUsuario}`);
            },
            async obtenerVotacionSeleccionada() {
                try {
                    const url = `${urlBase}/votante/${this.votacionSeleccionada.id}/votar`;
                    const respuestaHttp = await fetch(url, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    const datosVotacionSeleccionada = await respuestaHttp.json();
                    if (datosVotacionSeleccionada && (datosVotacionSeleccionada.Code == Codigos.CodeSuccess)) {
                        this.votacionSeleccionada = datosVotacionSeleccionada.votacion;
                    } else {
                        this.$emit('mostrarMensaje', datosVotacionSeleccionada);
                    }
                } catch (error) {
                    console.log(error);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al obtener la votación seleccionada"
                    });
                    this.redireccionarIndex();
                }
            },
            async seleccionarOpcion(idOpcion) {
                try {
                    const url = `${urlBase}/votante/${idOpcion}/chooseOption`;
                    const respuestaHttp = await fetch(url, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    const datosOpcionSeleccionada = await respuestaHttp.json();
                    if (datosOpcionSeleccionada && (datosOpcionSeleccionada.Code == Codigos.CodeSuccess)) {
                        this.opcionSeleccionada = datosOpcionSeleccionada.opcion;
                    } else {
                        this.$emit('mostrarMensaje', datosOpcionSeleccionada);
                    }
                } catch (error) {
                    console.log(error);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al obtener la opción seleccionada"
                    });
                }
            },
            cerrarModalConfirmacionVoto() {
                this.mostrarModal = false;
            },
            async realizarVotacion() {
                try {

                    this.cerrarModalConfirmacionVoto();
                    const url = `${urlBase}/votante/confirmOptionVote`;

                    const respuestaHttp = await fetch(url, {
                        headers:{
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            "OpcionSeleccionada": {
                                "idVotacion": this.votacionSeleccionada.id,
                                "idOpcion": this.opcionSeleccionada.id
                            },
                            "votacionUsuario": {
                                "idVotacion": this.votacionSeleccionada.id,
                                "idUser": this.idUsuario
                            }
                        })
                    });
                    const datosVoto = await respuestaHttp.json();
                    this.$emit('mostrarMensaje', datosVoto);
                    if (datosVoto && (datosVoto.Code == Codigos.CodeSuccess)) {
                        this.redireccionarIndex();
                    }
                } catch (error) {
                    console.log(error);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al realizar la votación"
                    });
                    this.redireccionarIndex();
                }
            }
        }
    }
</script>