<template>
    <section>
        <form v-if="votacion !== null">
            <h1 class="text-center">Editar votación</h1>
            <input type="hidden" v-model="votacion.id" name="id" required>
            <input type="hidden" v-model="votacion.idEstado" name="idEstado" required>
            <div class="formgrid grid mb-3">
                <div class="field col-12">
                    <label class="mt-2">Titulo votación:</label>
                    <InputText type="text" v-model="votacion.descripcion"
                        class="w-full"
                        placeholder="Ingrese el titulo de la votación" />
                </div>
            </div>
            <div class="formgrid grid mb-3">
                <div class="field col-12">
                    <label class="mt-2">Fecha y hora de apertura:</label>
                    <Calendar v-model="votacion.fechaHoraInicio" :manualInput="true" dateFormat="dd/mm/yy"
                        class="w-full"
                        placeholder="dd/mm/yyyy hh:mm am|pm" showIcon showTime hourFormat="12" />
                </div>
            </div>
            <div class="formgrid grid mb-3">
                <div class="field col-12">
                    <label class="mt-2">Fecha y hora de cierre</label>
                    <Calendar v-model="votacion.fechaHoraFin" :manualInput="true" dateFormat="dd/mm/yy" showIcon
                        class="w-full"
                        showTime hourFormat="12" placeholder="dd/mm/yyyy hh:mm am|pm" />
                </div>
            </div>
            <h3 class="text-secondary mt-3 mb-3">Listado de opciones</h3>
            <div class="">
                <div class="grid grid-nogutter" id="ListaOpcionesAgregar">
                    <!-- Listado de opciones -->
                    <option-vue v-for="(opcion, index) in votacion.opciones" v-bind:key="opcion.id"
                        v-bind:opcion="opcion" v-on:eliminarOpcion="eliminarOpcion" v-model="opcion[index]">
                    </option-vue>
                    <!-- Nueva opción -->
                    <new-option-vue v-on:agregarNuevaOpcion="agregarNuevaOpcion"></new-option-vue>
                </div>
                <div class="text-center mt-5">
                    <Button label="Guardar" severity="success" outlined v-on:click="modificarVotacion"></Button>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
    import {Codigos, obtenerFechaConFormato, obtenerFechaDesdeFormato} from '../../js/sitioInterno';
    import {v4 as uuidv4} from 'uuid';
    import newOptionVue from './newOption.vue';
    import optionVue from '../votacion/option.vue';

    const urlBase = import.meta.env.VITE_BASE_URL;
    const RutaImagenDefault = import.meta.env.VITE_BASE_RUTA_IMAGEN_DEFAULT;

    export default {
        data() {
            return {
                idUsuario: 0,
                votacion: null,
                idVotacion: 0,
                opciones: [],
                opc: [],
            }
        },
        components: {
            optionVue,
            newOptionVue
        },
        created() {
            this.InicializarData();
        },
        methods: {
            InicializarData() {
                this.idUsuario = this.$route.params.idUsuario;
                this.idVotacion = this.$route.params.idVotacion;
                this.editarVotacion(this.idVotacion);
            },
            redireccionarLista() {
                this.$router.push(`/votaciones/${this.idUsuario}`); //

            },
            async editarVotacion(idV) {
                try {
                    const respuestaHttp = await fetch(`${urlBase}/votacion/${idV}/edit`, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    console.log(respuestaHttp);
                    const datosVotacion = await respuestaHttp.json();
                    console.log(datosVotacion);
                    if (datosVotacion && (datosVotacion.Code == Codigos.CodeSuccess)) {
                        this.votacion = datosVotacion.votacion;
                        this.opciones = this.votacion['opciones'];

                        this.votacion = null;
                        for (var i = 0; i < this.opciones.length; i++) {

                            this.opc[i] = {
                                id: this.opciones[i]['id'],
                                nombre: this.opciones[i]['nombre'],
                                descripcion: this.opciones[i]['descripcion'],
                                rutaImagen: this.opciones[i]['rutaImagen'],
                                idVotacion: this.opciones[i]['idVotacion'],
                                opcionNueva: 'No',
                                posicion: this.opciones[i]['posicion']
                            }
                        }
                        this.votacion = {
                            id: datosVotacion.votacion['id'],
                            idEstado: datosVotacion.votacion['idEstado'],
                            descripcion: datosVotacion.votacion['descripcion'],
                            fechaHoraInicio: obtenerFechaDesdeFormato(datosVotacion.votacion['fechaHoraInicio']),
                            fechaHoraFin: obtenerFechaDesdeFormato(datosVotacion.votacion['fechaHoraFin']),
                            opciones: this.opc,
                            idsOpcionesEliminar: []
                        }

                    } else {
                        this.$emit('mostrarMensaje', datosVotacion);
                    }
                } catch (error) {
                    console.log(error);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al obtener la votación",
                        error
                    });
                }
            },
            obtenerSiguientePosicion() {
                if (!this.votacion.opciones || this.votacion.opciones.length === 0)
                    return 1;
                const posiciones = this.votacion.opciones.map(o => o.posicion);
                return Math.max(...posiciones) + 1;
            },
            crearNuevaOpcion() {
                const opcion = {
                    id: uuidv4(),
                    nombre: '',
                    descripcion: '',
                    rutaImagen: RutaImagenDefault,
                    idVotacion: this.votacion.id,
                    posicion: this.obtenerSiguientePosicion(),
                    opcionNueva: 'Si'
                }
                return opcion;
            },
            agregarNuevaOpcion(mostrarMensaje = false) {
                this.votacion.opciones.push(this.crearNuevaOpcion());
                if (mostrarMensaje) {
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeSuccess,
                        message: "Opción agregada"
                    });
                }
            },
            eliminarOpcion(idOpcion) {
                const opcion = this.votacion.opciones.find(o => o.id === idOpcion);
                if (!opcion)
                    return;
                this.votacion.opciones = this.votacion.opciones.filter(o => o.id !== idOpcion);
                this.votacion.opciones.sort((a, b) => a.posicion - b.posicion);
                if (opcion.opcionNueva === 'No')
                    this.votacion.idsOpcionesEliminar.push(idOpcion);
            },
            async modificarVotacion() {
                try {
                    const url = `${urlBase}/votacion/${this.idVotacion}`;

                    this.votacion.fechaHoraInicio = obtenerFechaConFormato(this.votacion.fechaHoraInicio);
                    this.votacion.fechaHoraFin = obtenerFechaConFormato(this.votacion.fechaHoraFin);

                    const respuestaHttp = await fetch(url, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(this.votacion)
                    });
                    const datosVoto = await respuestaHttp.json();
                    this.$emit('mostrarMensaje', datosVoto);
                    if (datosVoto && (datosVoto.Code == Codigos.CodeSuccess)) {
                        this.redireccionarLista();
                    }
                } catch (error) {
                    console.log(error);
                    this.votacion.fechaHoraInicio = obtenerFechaDesdeFormato(this.votacion.fechaHoraInicio);
                    this.votacion.fechaHoraFin = obtenerFechaDesdeFormato(this.votacion.fechaHoraFin);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al modificar la votación"
                    });
                }
            }
        }
    }
</script>