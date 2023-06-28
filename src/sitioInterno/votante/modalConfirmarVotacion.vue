<template>
    <!-- Confirmation Modal -->
    <Dialog :visible="mostrarModal" header="Confirmación de Votación" modal @update:visible="OcultarModalDialog">
        <div class="text-center">
            <Image :src="opcionSeleccionada.rutaImagen" :pt="{
                    image: { class: 'w-6' }
                }" />
        </div>
        <div class="text-center">
            <h2 class="text-primary">{{opcionSeleccionada.nombre}}</h2>
            <p class="text-white">{{opcionSeleccionada.descripcion}}</p>
        </div>
        <template #footer>
            <Button label="Cerrar" severity="secondary" @click="OcultarModalDialog" />
            <Button label="Realizar Votación" severity="success" outlined @click="NotificarVotacionConfirmada" />
        </template>
    </Dialog>
</template>

<script>
    export default {
        props: ['opcionSeleccionada', 'mostrarModal'],
        methods: {
            OcultarModalDialog() {
                this.$emit('OcultarModalDialog');
            },
            NotificarVotacionConfirmada() {
                this.$emit('realizarVotacion');
            }
        }
    }
</script>