<template>
    <h2 class="text-center">Listado de resultados</h2>
    <div class="formgrid grid mb-3">
        <div class="field col-12">
            <label class="mt-2">Titulo votación:</label>
            <InputText type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                :value="votacion.descripcion" readonly></InputText>
        </div>
        <div class="field col-6">
            <label class="mt-2">Fecha y hora de apertura:</label>
            <InputText type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                :value="votacion.fechaHoraInicio" readonly></InputText>
        </div>
        <div class="field col-6">
            <label class="mt-2">Fecha y hora de cierre</label>
            <InputText type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                :value="votacion.fechaHoraFin" readonly></InputText>
        </div>
    </div>

    <h3 class="text-secondary mt-5 mb-3">Resultados detallados:</h3>
    <div class="grid">
        <div class="col-3" v-for="resultado in votacion.resultados" :key="resultado.opcion">
            <Card>
                <template #header>
                    <Image :src="resultado.rutaImagen" preview :pt="{
                    image: { class: 'w-full' }
                }" />
                </template>
                <template #content>
                    <h5 class="text-center"> {{resultado.opcion}}</h5>
                    <p class="text-center">Cantidad de votos obtenidos: {{resultado.cantidad}}</p>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
    import {
        Codigos
    } from '../../js/sitioInterno';

    const urlBase =
        import.meta.env.VITE_BASE_URL;

    export default {
        data() {
            return {
                idUsuario: 0,
                votacion: {
                    id: 0
                },
            }
        },
        created() {
            this.InicializarData();
            this.obtenerResultadoVotacion();
        },
        methods: {
            InicializarData() {
                this.idUsuario = this.$route.params.idUsuario;
                this.votacion.id = this.$route.params.idVotacion;
            },
            async obtenerResultadoVotacion() {
                try {
                    const respuestaHttp = await fetch(`${urlBase}/resultados/${this.votacion.id}`, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    const resultadosVotacion = await respuestaHttp.json();
                    if (resultadosVotacion && (resultadosVotacion.Code == Codigos.CodeSuccess)) {
                        this.votacion = resultadosVotacion.votacion;
                    } else {
                        this.$emit('mostrarMensaje', resultadosVotacion);
                    }
                } catch (error) {
                    console.log(error);
                    this.$emit('mostrarMensaje', {
                        Code: Codigos.CodeError,
                        message: "Ocurrió un error al obtener los resultados de la votación seleccionada"
                    });
                }
            }
        }
    }
</script>