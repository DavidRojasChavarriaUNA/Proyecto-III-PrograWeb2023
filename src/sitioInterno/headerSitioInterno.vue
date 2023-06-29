<template>
  <header>
    <Menubar :model="itemsMenuInterno" class="bg-gray-900">
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
<script setup>
  import {
    Codigos,
    _obtenerUsuarioAutenticado
  } from '../js/sitioInterno';
  import {
    ref
  } from "vue";
  import {
    useRoute
  } from 'vue-router';

  const route = useRoute();

  const usuarioId = route.params.idUsuario;
  let usuario = ref({
    id:0,
    user:''
  });

  const itemsMenuInterno = ref([
  ]);
  
  _obtenerUsuarioAutenticado(usuarioId).then((datosUsuario) => {
    if (datosUsuario && (datosUsuario.Code == Codigos.CodeSuccess)) {
      usuario.value = datosUsuario.User;
    } else {
      alert(datosUsuario.message);
      route.push('/');
    }
    itemsMenuInterno.value = [{
        label: 'Votante',
        items: [{
          label: 'Votaciones pendientes',
          to: `/votante/${usuario.value.id}`
        }, ]
      },
      {
        label: 'Administración',
        items: [{
          label: 'Crear votación',
          to: `/votacion/create/${usuario.value.id}`
        }, {
          label: 'Modificar votación',
          to: `/votaciones/${usuario.value.id}`
        }, ]
      },
      {
        label: 'Resultados',
        to: `/resultados/${usuario.value.id}`
      },
      {
        label: `${usuario.value.user}`
      },
      {
        label: 'Salir',
        to: `/`
      }
    ];
  })
</script>
<!--<script>
  import {Codigos,_obtenerUsuarioAutenticado} from '../js/sitioInterno';

  export default {
    data() {
      return {
        usuario: null,
        itemsMenuInterno: []
      }
    },
    async created() {
      await this.obtenerUsuarioAutenticado();
      this.crearOpcionesMenu();
    },
    methods: {
      async obtenerUsuarioAutenticado() {
        try {
          const idUsuario = this.$route.params.idUsuario;

          const datosUsuario = await _obtenerUsuarioAutenticado(idUsuario);
          if (datosUsuario && (datosUsuario.Code == Codigos.CodeSuccess)) {
            this.usuario = datosUsuario.User;
          } else {
            alert(datosUsuario.message);
            this.$router.push('/');
          }
        } catch (error) {
          console.log(error);
          alert("Ocurrió un error al obtener el usuario");
          this.$router.push('/');
        }
      },
      crearOpcionesMenu() {
        this.itemsMenuInterno = [{
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
</script>-->