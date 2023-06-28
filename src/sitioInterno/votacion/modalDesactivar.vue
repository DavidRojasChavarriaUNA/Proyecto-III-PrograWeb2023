<template>
    <!-- Modal Desactivar-->
    <Dialog :visible="mostrarModalDesactivarVotacion" header="Desactivar" modal
        @update:visible="cerrarModalDesactivar">
        <p>¿Desea desactivar la votación seleccionada?</p>
        <template #footer>
            <Button label="Cerrar" severity="secondary" @click="cerrarModalDesactivar" />
            <Button label="Desactivar" severity="warning" outlined @click="notificarDesactivar" />
        </template>
    </Dialog>
</template>

<script>
    export default {
        props: ['id', 'mostrarModalDesactivarVotacion'],
        methods: {
            notificarDesactivar() {
                this.$emit('notificarDesactivar');
            },
            cerrarModalDesactivar() {
                this.$emit('cerrarModalDesactivar', this.id);
            }
        }
    }
</script>