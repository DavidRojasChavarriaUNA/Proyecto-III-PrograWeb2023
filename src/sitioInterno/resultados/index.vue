<template>
    <h2 class="text-center">Listado de votaciones activas y finalizadas</h2>
    <div class="pt-3 pb-3 text-right">
        <Button label="Consultar" icon="pi pi-search" severity="Primary" v-on:click="obtenerVotacionesActivasFinalizadas"></Button>
    </div>
    <div class="table-responsive">
        <DataTable :value="votacionesActivasFinalizadas">
            <Column field="descripcion" header="Descripción"></Column>
            <Column field="estado" header="Estado"></Column>
            <Column field="fechaHoraInicio" header="Apertura"></Column>
            <Column field="fechaHoraFin" header="Cierre"></Column>
            <Column header="Acción">
                <template #body="slotProps">               
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
                votacionesActivasFinalizadas: []
            }
        },
        created() {
            this.InicializarData();
            this.obtenerVotacionesActivasFinalizadas();
        },
        methods: {
            InicializarData() {
                this.idUsuario = this.$route.params.idUsuario;
            },
            async obtenerVotacionesActivasFinalizadas() {
                try {
                    const respuestaHttp = await fetch(`${urlBase}/resultados`, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    const datosVotaciones = await respuestaHttp.json();
                    if (datosVotaciones && (datosVotaciones.Code == Codigos.CodeSuccess)) {
                        this.votacionesActivasFinalizadas = datosVotaciones.votaciones;
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
                        message: "Ocurrió un error al obtener las votaciones pendientes del usuario"
                    });
                }
            }
        }
    }
</script>