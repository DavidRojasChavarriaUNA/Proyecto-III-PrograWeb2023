<template>
    <div class="col-12 md:col-3 p-1">
        <Card>
            <template #header>
                <div class="flex align-items-center justify-content-center">
                <i class="pi pi-plus-circle text-green-600 mt-5" style="font-size: 2.5rem !important;"></i>
                </div>
            </template>
            <template #content>
                <div class="flex align-items-center justify-content-center">
                    <Button label="Nuevo" severity="success" v-on:click="agregarNuevaOpcion"></Button>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
    export default {
        methods: {
            agregarNuevaOpcion() {
                this.$emit('agregarNuevaOpcion', true);
            }
        }
    }
</script>