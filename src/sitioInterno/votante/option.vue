<template>
    <section class="col-12 md:col-3 border p-1">
        <Card>
            <template #header>
                <Image :src="opcion.rutaImagen" preview :pt="{
                    image: { class: 'w-full' }
                }" />
            </template>
            <template #title>{{opcion.nombre}}</template>
            <template #content>
                <p class="">{{opcion.descripcion}}</p>
            </template>
            <template #footer>
                <RadioButton :inputId="`radio${opcion.id}`" name="opcionSeleccionada" 
                    v-on:change="NotificarOpcionSeleccionada(opcion.id, `lblOpcion${opcion.id}`)" />
                <label :id="`lblOpcion${opcion.id}`" class="btn btn-outline-primary width-100 opcionVoto"
                    :for="`radio${opcion.id}`">Seleccionar</label>
            </template>
        </Card>
    </section>
</template>

<script>
    export default {
        props: ['opcion'],
        methods: {
            NotificarOpcionSeleccionada(idOpcionSeleccionada, idEtiqueta) {
                const etiquetasOpcionesVoto = document.querySelectorAll('.opcionVoto');
                etiquetasOpcionesVoto.forEach(e => e.innerHTML = "Seleccionar");
                const lblEtiquetaSeleccionada = document.querySelector(`#${idEtiqueta}`);
                lblEtiquetaSeleccionada.innerHTML = "Seleccionado";
                this.$emit('seleccionarOpcion', idOpcionSeleccionada);
            }
        }
    }
</script>