<template>
    <!-- Modal Eliminar-->
    <Dialog :visible="mostrarModal" header="Eliminar" modal @update:visible="cerrarModalEliminar">
        <p>¿Desea eliminar el elemento seleccionado?</p>
        <template #footer>
            <Button label="Cerrar" severity="secondary" @click="cerrarModalEliminar" />
            <Button label="Eliminar" severity="danger" outlined @click="notificarEliminarOpcion" />
        </template>
    </Dialog>
</template>

<script>
    export default {
        props:['posicion', 'mostrarModal'],
        methods:{
            notificarEliminarOpcion(){
                this.$emit('notificarEliminarOpcion');
            },
            cerrarModalEliminar() {
                this.$emit('cerrarModalEliminar');
            }
        }
    }
</script>