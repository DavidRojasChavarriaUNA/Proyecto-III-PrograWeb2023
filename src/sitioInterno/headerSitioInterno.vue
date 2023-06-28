<template>
  <header>
    <Menubar :model="itemsMenu" class="bg-gray-900">
      <template #start>
        <router-link class="navbar-brand" :to="`/sitioInterno/${usuario.id}`">
          <img id="logoMenu" src="/assets/imagenes/logo.png">
        </router-link>
      </template>
      <template #end>              
        <InputText placeholder="Search" type="text" />
        <Button class="btn" label="Search">Search</Button>
      </template>
    </Menubar>
  </header>
</template>

<script>
  export default {
    props: ['usuario'],
    data() {
      return {
        itemsMenu: []
      }
    },
    updated() {
      this.crearOpcionesMenu();
    },
    methods:{
      crearOpcionesMenu(){
        this.itemsMenu= [{
            label: 'Votante',
            items: [{
              label: 'Votaciones pendientes',
              to: `/votante/${this.usuario.id}`
            }, ]
          },
          {
            label: 'Administración',
            items: [{
              label: 'Crear votación',
              to: `/votacion/create/${this.usuario.id}`
            }, {
              label: 'Modificar votación',
              to: `/votaciones/${this.usuario.id}`
            }, ]
          },
          {
            label: 'Resultados',
            to: `/resultados/${this.usuario.id}`
          },
          {
            label: `${this.usuario.user}`
          },
          {
            label: 'Salir',
            to: `/`
          }
        ];
      }
    }
  }
</script>