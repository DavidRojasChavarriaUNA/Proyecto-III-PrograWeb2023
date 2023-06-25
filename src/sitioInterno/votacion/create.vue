<template>
    <section id="NuevoVotacion" class="m-5">
        <article>
            <section>
                <form>
                    <h2 class="text-center text-black-alpha-90">Crear votación</h2>
                    <input type="hidden" v-model="votacion.id" name="id" required>
                    <input type="hidden" v-model="votacion.idEstado" name="idEstado" required>
                    <div class="row mb-3">
                        <div class="col-12">
                            <label class="form-label fs-3 mt-2">Titulo votación:</label>
                            <InputText type="text" v-model="votacion.descripcion" placeholder="Ingrese el titulo de la votación" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12">
                            <label class="form-label fs-3 mt-2">Fecha y hora de apertura:</label>
                            <Calendar v-model="votacion.fechaHoraInicio" :manualInput="true" dateFormat="dd/mm/yy" placeholder="dd/mm/yyyy hh:mm am|pm" showIcon showTime hourFormat="12" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12">
                            <label class="form-label fs-3 mt-2">Fecha y hora de cierre</label>
                            <Calendar v-model="votacion.fechaHoraFin" :manualInput="true" dateFormat="dd/mm/yy" showIcon showTime hourFormat="12" placeholder="dd/mm/yyyy hh:mm am|pm" />
                        </div>
                    </div>
                    <h3 class="text-secondary mt-3 mb-3">Listado de opciones</h3>
                    <div class="container">
                        <div class="row bg-white" id="ListaOpcionesAgregar">
                            <!-- Listado de opciones -->
                            <option-vue v-for="(opcion, index) in votacion.opciones" 
                                        v-bind:key="opcion.id" 
                                        v-bind:opcion="opcion"
                                        v-on:eliminarOpcion="eliminarOpcion"
                                        v-model="opcion[index]">
                            </option-vue>
                            <!-- Nueva opción -->
                            <new-option-vue v-on:agregarNuevaOpcion="agregarNuevaOpcion"></new-option-vue>
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto mt-5">
                            <Button label="Guardar" severity="success" outlined v-on:click="registrarNuevaVotacion"></Button>
                        </div>
                    </div>
                </form>
            </section>
        </article>
    </section>
</template>

<script>
    import {Codigos} from '../../js/sitioInterno';
    import {v4 as uuidv4} from 'uuid';
    import newOptionVue from './newOption.vue';
    import optionVue from '../votacion/option.vue';

    const urlBase = import.meta.env.VITE_BASE_URL;
    const RutaImagenDefault = import.meta.env.VITE_BASE_RUTA_IMAGEN_DEFAULT;

    export default {
        data() {
            return {
                idUsuario: 0,
                votacion: null
            }
        },
        components: {
            optionVue,
            newOptionVue
        },
        created() {
            this.InicializarData();
            this.crearNuevaVotacion();
        },
        methods: {
            InicializarData() {
                this.idUsuario = this.$route.params.idUsuario;
            },
            redireccionarEditar() {
                this.$router.push(`/votacion/${this.idUsuario}/${this.votacion.id}/edit`);
                //this.crearNuevaVotacion();
            },
            crearNuevaVotacion(){
                this.votacion = {
                    id: uuidv4(),
                    idEstado: Codigos.EstadoEnProceso,
                    descripcion: '',
                    fechaHoraInicio: '',
                    fechaHoraFin: '',
                    opciones: []
                }
                this.agregarNuevaOpcion();
                this.agregarNuevaOpcion();
            },
            obtenerSiguientePosicion(){
                if(!this.votacion.opciones || this.votacion.opciones.length === 0)
                    return 1;
                const posiciones = this.votacion.opciones.map(o => o.posicion);
                return Math.max(...posiciones) + 1;
            },
            crearNuevaOpcion(){
                const opcion = {
                    id: uuidv4(),
                    nombre: '',
                    descripcion: '',
                    rutaImagen: RutaImagenDefault,
                    idVotacion: this.votacion.id,
                    posicion: this.obtenerSiguientePosicion(),
                }
                return opcion;
            },
            agregarNuevaOpcion(mostrarMensaje = false){
                this.votacion.opciones.push(this.crearNuevaOpcion());
                if(mostrarMensaje){
                    this.$emit('mostrarMensaje', {Code: Codigos.CodeSuccess, message: "Opción agregada"});
                }
            },
            eliminarOpcion(idOpcion){
                this.votacion.opciones = this.votacion.opciones.filter(o => o.id !== idOpcion);
                this.votacion.opciones.sort((a, b) => a.posicion - b.posicion);
            },
            async registrarNuevaVotacion() {
                try {
                    const url = `${urlBase}/votacion`;

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
                        this.votacion.id = datosVoto.id;
                        this.redireccionarEditar();
                    }
                } catch (error) {
                    console.log(error);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al crear la votación"
                    });
                }
            }
        }
    }
</script>