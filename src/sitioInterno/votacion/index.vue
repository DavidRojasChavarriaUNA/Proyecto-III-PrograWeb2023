<template>
    <h2 class="text-center">Listado de votaciones</h2>
    <div class="pt-3 pb-3 text-right">
        <Button label="Consultar" icon="pi pi-search" severity="Primary" v-on:click="obtenerVotaciones" style="margin-right: 10px;"></Button>
        <router-link :to="`/votacion/create/${idUsuario}`" title="Nuevo">
            <Button label="Nuevo" icon="pi pi-plus"></Button>
        </router-link>
    </div>
    <div class="table-responsive">
        <DataTable :value="votaciones">
            <Column field="descripcion" header="Descripción"></Column>
            <Column field="estado" header="Estado"></Column>
            <Column field="fechaHoraInicio" header="Apertura"></Column>
            <Column field="fechaHoraFin" header="Cierre"></Column>
            <Column header="Acción">
                <template #body="slotProps">
                    <router-link v-show="mostrarBoton('Editar',slotProps.data.idEstado)"
                        :to="`/votacion/${idUsuario}/${slotProps.data.id}/edit`" class="accion"
                        title="Modificar">
                        <Button icon="pi pi-pencil" severity="primary" text rounded aria-label="Ver resultados" />
                    </router-link>
                    <router-link v-show="mostrarBoton('VerResultado',slotProps.data.idEstado)"
                        :to="`/resultados/${idUsuario}/${slotProps.data.id}`" class="accion"
                        title="Ver resultados">
                        <Button icon="pi pi-eye" severity="success" text rounded aria-label="Ver resultados" />
                    </router-link>
                    <Button v-show="mostrarBoton('Eliminar',slotProps.data.idEstado)" title="Eliminar" icon="pi pi-trash" severity="danger" text rounded aria-label="Eliminar" @click="abrirModalEliminar(slotProps.data.id)"/>
                    <Button v-show="mostrarBoton('Desactivar',slotProps.data.idEstado)" title="Desactivar" icon="pi pi-times" severity="warning" text rounded aria-label="Desactivar" @click="abrirModalDesactivar(slotProps.data.id)"/>
                    <modal-eliminar-vue v-bind:id="slotProps.data.id"
                        v-on:notificarEliminar="notificarEliminar(slotProps.data.id)" 
                        v-on:cerrarModalEliminar="cerrarModalEliminar"
                        v-bind:mostrarModalEliminarVotacion="slotProps.data.mostrarModalEliminarVotacion"></modal-eliminar-vue>
                    <modal-desactivar-vue v-bind:id="slotProps.data.id"
                        v-on:notificarDesactivar="notificarDesactivar(slotProps.data.id)" 
                        v-on:cerrarModalDesactivar="cerrarModalDesactivar"
                        v-bind:mostrarModalDesactivarVotacion="slotProps.data.mostrarModalDesactivarVotacion"></modal-desactivar-vue>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
    import {Codigos} from '../../js/sitioInterno'

    import modalEliminarVue from './modalEliminarVotacion.vue';
    import modalDesactivarVue from './modalDesactivar.vue';

    const urlBase =
        import.meta.env.VITE_BASE_URL;

    export default {
        components: {
            modalEliminarVue,
            modalDesactivarVue
        },
        data() {
            return {
                idUsuario: 0,
                votaciones: []
            }
        },
        created() {
            this.InicializarData();
            this.obtenerVotaciones();
        },
        methods: {
            mostrarBoton(accion, idEstado){
                if(accion === "Eliminar" || accion === "Editar"){
                    if(idEstado == Codigos.EstadoActivo || idEstado == Codigos.EstadoInactivo){
                        return false;
                    }
                    return true;
                }
                if(accion === "Desactivar"){
                    if(idEstado == Codigos.EstadoEnProceso || idEstado == Codigos.EstadoInactivo){
                        return false;
                    }
                    return true;
                }
                if(accion === "VerResultado"){
                    if(idEstado == Codigos.EstadoEnProceso){
                        return false;
                    }
                    return true;
                }
            },
            InicializarData() {
                this.idUsuario = this.$route.params.idUsuario;
            },
            async obtenerVotaciones() {
                try {
                    const respuestaHttp = await fetch(`${urlBase}/votacion`, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    console.log(respuestaHttp);
                    const datosVotaciones = await respuestaHttp.json();
                    console.log(datosVotaciones);
                    if (datosVotaciones && (datosVotaciones.Code == Codigos.CodeSuccess)) {
                        this.votaciones = datosVotaciones.votacion;
                        this.votaciones.forEach(votacion => {
                            votacion.mostrarModalEliminarVotacion = false;
                            votacion.mostrarModalDesactivarVotacion = false;
                        });
                        this.$emit('mostrarMensaje', {
                            Code: Codigos.CodeSuccess,
                            message: "Se ha obtenido los datos más recientes"
                        });
                    } else {
                        this.votaciones = [];
                        this.$emit('mostrarMensaje', datosVotaciones);
                    }
                } catch (error) {
                    console.log(error);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al obtener las votaciones"
                    });
                }
            },
            abrirModalEliminar(id) {
                const votacion = this.votaciones.find(v => v.id === id);
                if(votacion){
                    votacion.mostrarModalEliminarVotacion = true;
                }
            },
            cerrarModalEliminar(id) {
                const votacion = this.votaciones.find(v => v.id === id);
                if(votacion){
                    votacion.mostrarModalEliminarVotacion = false;
                }
            },
            async notificarEliminar(votacionID) {
                this.cerrarModalEliminar(votacionID);
                try {
                    const respuestaHttp = await fetch(`${urlBase}/votacion/${votacionID}/delete`, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    const datosVotaciones = await respuestaHttp.json();
                    this.$emit('mostrarMensaje', datosVotaciones);
                    this.obtenerVotaciones();
                } catch (error) {
                    console.log(error);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al eliminar la votación"
                    });
                }
            },
            abrirModalDesactivar(id) {
                const votacion = this.votaciones.find(v => v.id === id);
                if(votacion){
                    votacion.mostrarModalDesactivarVotacion = true;
                }
            },
            cerrarModalDesactivar(id) {
                const votacion = this.votaciones.find(v => v.id === id);
                if(votacion){
                    votacion.mostrarModalDesactivarVotacion = false;
                }
            },
            async notificarDesactivar(votacionID) {
                this.cerrarModalDesactivar(votacionID);

                try {
                    const respuestaHttp = await fetch(`${urlBase}/votacion/${votacionID}/desactivar`, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    const res = await respuestaHttp.json();
                    this.$emit('mostrarMensaje', res);
                    this.obtenerVotaciones();
                } catch (error) {
                    console.log(error);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al eliminar la votación"
                    });
                }
            }


        }
    }
</script>