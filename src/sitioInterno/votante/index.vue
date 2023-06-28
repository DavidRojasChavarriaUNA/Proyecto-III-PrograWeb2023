<template>
    <h2 class="text-center">Listado de votaciones pendientes</h2>
    <div class="pt-3 pb-3 text-right">
        <Button label="Consultar" severity="Primary" icon="pi pi-search" v-on:click="obtenerVotacionesPendientes"></Button>
    </div>
    <div class="table-responsive">
        <DataTable :value="votacionesPendientes">
            <Column field="descripcion" header="Descripción"></Column>
            <Column field="estado" header="Estado"></Column>
            <Column field="fechaHoraInicio" header="Apertura"></Column>
            <Column field="fechaHoraFin" header="Cierre"></Column>
            <Column header="Acción">
                <template #body="slotProps">     
                    <router-link :to="`/votante/${idUsuario}/${slotProps.data.id}/votar`" class="accion"
                        title="Votar">
                        <Button icon="pi pi-times-circle" severity="primary" text rounded aria-label="Ver resultados" />
                    </router-link>              
                    <router-link :to="`/resultados/${idUsuario}/${slotProps.data.id}`" class="accion"
                        title="Ver resultados">
                        <Button icon="pi pi-eye" severity="success" text rounded aria-label="Ver resultados" />
                    </router-link>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
    import {
        Codigos
    } from '../../js/sitioInterno'

    const urlBase =
        import.meta.env.VITE_BASE_URL;

    export default {
        data() {
            return {
                idUsuario: 0,
                votacionesPendientes: [],
            }
        },
        created() {
            this.InicializarData();
            this.obtenerVotacionesPendientes();
        },
        methods: {
            InicializarData() {
                this.idUsuario = this.$route.params.idUsuario;
            },
            async obtenerVotacionesPendientes() {
                try {
                    const respuestaHttp = await fetch(`${urlBase}/votante/${this.idUsuario}`, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    const datosVotacionesUsuario = await respuestaHttp.json();
                    if (datosVotacionesUsuario && (datosVotacionesUsuario.Code == Codigos.CodeSuccess)) {
                        this.votacionesPendientes = datosVotacionesUsuario.votaciones;
                        this.$emit('mostrarMensaje', {
                            Code: Codigos.CodeSuccess,
                            message: "Se ha obtenido los datos más recientes."
                        });
                    } else {
                        this.$emit('mostrarMensaje', datosVotacionesUsuario);
                    }
                } catch (error) {
                    console.log(error);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al obtener las votaciones pendientes del usuario"
                    });
                }
            }
        }
    }
</script>