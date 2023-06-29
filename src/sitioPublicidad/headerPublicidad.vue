<template>
    <header>
        <Menubar :model="itemsMenu" class="bg-gray-900 border-transparent" id="menu">
            <template #start>
                <router-link class="navbar-brand" to="/home">
                    <img alt="logo" src="/assets/imagenes/logo.png" class="max-w-8rem w-full" />
                </router-link>
            </template>
        </Menubar>
    </header>
</template>
   
<script>
export default {
    data() {
        return {
            itemsMenu: [{
                label: 'Clientes',
                to: '/home#lstClientes'
            },
            {
                label: 'Caracteristicas',
                items: [{
                    label: 'Usuario',
                    to: `/home#lstCaractFuncUsuario`
                }, {
                    label: 'Técnicas',
                    to: `/home#lstCaractTenicas`
                },]
            },
            {
                label: 'Funcionalidades Administradores',
                to: `/home#lstFuncAdministradores`
            },
            {
                label: 'Servicio al cliente',
                to: `/home#srvCliente`
            },
            {
                label: 'Planes y precios',
                to: `/home#planesPrecios`
            },
            {
                label: 'Registrarse',
                to: `/register`
            },
            {
                label: 'Ingresar',
                to: `/login`
            }]
        }
    }
}
</script>