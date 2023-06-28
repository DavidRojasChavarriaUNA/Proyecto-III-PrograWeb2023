<template>
    <!-- Modal Eliminar-->
    <Dialog :visible="mostrarModalEliminarVotacion" header="Eliminar" modal @update:visible="cerrarModalEliminar">
        <p>¿Desea eliminar la votación seleccionada y sus opciones?</p>
        <template #footer>
            <Button label="Cerrar" severity="secondary" @click="cerrarModalEliminar" />
            <Button label="Eliminar" severity="danger" outlined @click="notificarEliminar" />
        </template>
    </Dialog>
</template>

<script>
    export default {
        props: ['id', 'mostrarModalEliminarVotacion'],
        methods: {
            notificarEliminar() {
                this.$emit('notificarEliminar');
            },
            cerrarModalEliminar() {
                this.$emit('cerrarModalEliminar', this.id);
            }
        }
    }
</script>