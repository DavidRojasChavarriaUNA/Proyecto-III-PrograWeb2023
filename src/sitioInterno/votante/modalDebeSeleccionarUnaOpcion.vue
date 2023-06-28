<template>
    <Dialog :visible="mostrarModal" header="No ha seleccionado una opción" modal @update:visible="OcultarModalDialog">
        <p>Debe seleccionar una opción para realizar la votación.</p>
        <template #footer>
            <Button label="Cerrar" severity="secondary" @click="OcultarModalDialog"/>
        </template>
    </Dialog>
</template>
<script>
    export default {
        props: ['mostrarModal'],
        methods: {
            OcultarModalDialog(){
                this.$emit('OcultarModalDialog');
            },
        }
    }
</script>