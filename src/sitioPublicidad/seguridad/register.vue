<template>
  <main>
    <article id="registro" class="flex flex-wrap align-items-center justify-content-center">
      <div class="p-jc-center p-ai-center">
        <div class="p-card p-p-2 mb-7 w-28rem">
          <div class="p-card-title">
            <br />
            <h3 class="text-center text-black-alpha-80 font-normal">Bienvenido a bordo!</h3>
          </div>
          <div class="p-card-body">
            <form class="form-stacked m-3">
              <template v-if="message">
                <div>
                  <message severity="error">{{ message }}</message>
                </div>
              </template>
              <label for="name">Nombre</label>
              <div class="p-inputgroup flex-1 mb-3 mt-2">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-info"></i>
                </span>
                <InputText id="name" type="text" name="name" v-model="user.name" maxlength=30 required />
              </div>
              <label for="email">Correo Electrónico</label>
              <div class="p-inputgroup flex-1 mb-3 mt-2">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-envelope"></i>
                </span>
                <InputText id="email" type="email" name="email" v-model="user.email" maxlength=100 required />
              </div>
              <label for="user">Usuario</label>
              <div class="p-inputgroup flex-1 mb-3 mt-2">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
                </span>
                <InputText id="user" type="text" name="user" v-model="user.user" maxlength=20 required />
              </div>
              <label for="password">Contraseña</label>
              <div class="p-inputgroup flex-1 mt-2">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-lock"></i>
                </span>
                <Password id="password" name="password" v-model="user.password" maxlength=20 required />
              </div>
              <div class="field text-center mt-4">
                <Button size="normal" label="Registrar" class="p-button-block" @click="createUser(user)" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>


<script>
import { Codigos } from '../../js/sitioPublicidad'

const urlBase = import.meta.env.VITE_BASE_URL;

export default {
  data() {
    return {
      user: { 'name': '', 'email': '', 'user': '', 'password': '' },
      message: null
    }
  },
  components: {

  },
  methods: {
    mostrarMensaje(mensaje) {
      this.message = `${mensaje.Code} - ${mensaje.message}`;
    },
    async createUser(u) {
      console.log(u);
      try {
        const respuestaHttp = await fetch(`${urlBase}/seguridad/register`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(u)
          });
        console.log(respuestaHttp);
        const respuesta = await respuestaHttp.json();
        if (respuesta && (respuesta.Code == Codigos.CodeSuccess)) {
          router.push('/login');
        } else {
          this.mostrarMensaje(respuesta);
        }
      } catch (error) {
        console.log(error);
        this.mostrarMensaje({ Code: Codigos.CodeError, message: "Ocurrió un error al registrar el usuario" });
      }
    }
  }
}
</script>