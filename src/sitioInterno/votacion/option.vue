<template>
    <div class="col-12 md:col-3 p-1">
        <input type="hidden" :value="opcion.id" />
        <Card>
            <template #content>
                <div class="text-center">
                    <label class="mt-2">Seleccionar imagen:</label>
                    <Image v-if="opcion.rutaImagen" :src="opcion.rutaImagen" :pt="{
                        image: { 
                            class: 'imgChooser w-full',
                            id: `img${opcion.posicion}`
                        }
                    }" />
                    <Image v-else src="/assets/imagenes/SeleccionarImagen.png" :pt="{
                        image: { 
                            class: 'imgChooser w-full',
                            id: `img${opcion.posicion}`
                        }
                    }" />
                    <input type="hidden" v-model="opcion.rutaImagen" :id="`rutaImagen${opcion.posicion}`" />
                    <input class="form-control form-control-sm" type="file" accept="image/png, image/jpeg"
                        AutofileChooser :ImgTagIdToDisplay="`img${opcion.posicion}`"
                        :InputTagIdToStoreBase64Img="`rutaImagen${opcion.posicion}`" style="display:none;"
                        :id="`imgChooser${opcion.posicion}`">
                </div>
                <div class="field">
                    <label class="mt-2">Nombre:</label>
                    <InputText type="text" v-model="opcion.nombre" placeholder="Ingrese el nombre" class="w-full" />
                </div>
                <div class="field">
                    <label class="mt-2">Descripción:</label>
                    <Textarea v-model="opcion.descripcion" rows="10" placeholder="Ingrese la descripción" class="w-full" />
                </div>
            </template>
            <template #footer>
                <div class="flex align-items-center justify-content-center">
                    <Button label="Eliminar" severity="danger" v-on:click="abrirModalEliminar"></Button>
                </div>
            </template>
        </Card>
        <modal-eliminar-vue v-bind:posicion="opcion.posicion" v-bind:mostrarModal="mostrarModal" 
            v-on:notificarEliminarOpcion="notificarEliminarOpcion" v-on:cerrarModalEliminar="cerrarModalEliminar">
        </modal-eliminar-vue>
    </div>
</template>

<script>
    import AutoFileToBase64 from '../../js/AutoFileToBase64.js';
    import modalEliminarVue from './modalEliminar.vue';

    export default {
        props: ['opcion'],
        components: {
            modalEliminarVue
        },
        data() {
            return {
                autoFileChooseAsignado: false,
                mostrarModal: false,
            };
        },
        mounted() {
            AutoFileToBase64.InitElementById(`imgChooser${this.opcion.posicion}`);
        },
        methods: {
            abrirModalEliminar() {
                this.mostrarModal = true;
            },
            cerrarModalEliminar() {
                this.mostrarModal = false;
            },
            notificarEliminarOpcion() {
                this.cerrarModalEliminar();
                this.$emit('eliminarOpcion', this.opcion.id);
            }
        }
    }
</script>