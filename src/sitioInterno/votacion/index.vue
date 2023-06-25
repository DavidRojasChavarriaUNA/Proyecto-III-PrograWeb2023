<template>
    <h2 class="text-center text-black-alpha-90	">Listado de votaciones</h2>
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
                    <router-link :id="`btn${slotProps.data.idEstado}`"
                        :to="`/votacion/${idUsuario}/${slotProps.data.id}/edit`" class="text-primary accion"
                        title="Modificar"><i class="pi pi-pencil"></i></router-link>
                    <router-link :id="`btnResultados${slotProps.data.idEstado}`"
                        :to="`/resultados/${idUsuario}/${slotProps.data.id}`" class="text-success accion"
                        title="Ver resultados"><i class="pi pi-eye"></i></router-link>

                    <a :id="`btn${slotProps.data.idEstado}`" class="text-danger accion" title="Eliminar"
                        data-bs-toggle="modal" :data-bs-target="`#modalEliminar${slotProps.data.id}`"><i
                            class="pi pi-trash"></i></a>
                    <a :id="`btnDesactivar${slotProps.data.idEstado}`" class="text-danger accion" title="Desactivar"
                        data-bs-toggle="modal" :data-bs-target="`#modalDesactivar${slotProps.data.id}`"><i
                            class="pi pi-times"></i></a>
                    <modal-eliminar-vue v-bind:id="slotProps.data.id"
                        v-on:notificarEliminar="notificarEliminar(slotProps.data.id)"></modal-eliminar-vue>
                    <modal-desactivar-vue v-bind:id="slotProps.data.id"
                        v-on:notificarDesactivar="notificarDesactivar(slotProps.data.id)"></modal-desactivar-vue>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
    import {
        Codigos
    } from '../../js/sitioInterno'

    import modalEliminarVue from './modalEliminarVotacion.vue';
    import modalDesactivarVue from './modalDesactivar.vue';

    import * as bootstrap from 'bootstrap';

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
                        this.$emit('mostrarMensaje', {
                            Code: Codigos.CodeSuccess,
                            message: "Se ha obtenido los datos más recientes"
                        });
                    } else {
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
            cerrarModalEliminar(id) {
                const modalEliminarElem = document.querySelector(`#modalEliminar${id}`);
                const modalEliminar = bootstrap.Modal.getInstance(modalEliminarElem);
                modalEliminar.hide();
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
            cerrarModalDesactivar(id) {
                const modalDesactivarElem = document.querySelector(`#modalDesactivar${id}`);
                const modalDesactivar = bootstrap.Modal.getInstance(modalDesactivarElem);
                modalDesactivar.hide();
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