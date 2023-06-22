<template>
  <main>
    <article id="registro" class="flex flex-wrap align-items-center justify-content-center">
      <div class="p-jc-center p-ai-center">
        <div class="p-card p-p-2 mt-4 w-28rem">
          <div class="p-card-title">
            <br />
            <h3 class="text-center text-black-alpha-80 font-normal">
              Bienvenido de vuelta!
            </h3>
          </div>
          <div class="card-body">
            <form class="form-stacked m-3">
              <template v-if="message">
                <div>
                  <message severity="error">{{ message }}</message>
                </div>
              </template>

              <label for="email">Correo electrónico</label>
              <div class="p-inputgroup flex-1 mb-3 mt-2">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-envelope"></i>
                </span>
                <InputText class=" " id="email" type="email" name="email" v-model="user.email" required />
              </div>
              <label for="password">Contraseña</label>
              <div class="p-inputgroup flex-1 mt-2">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-lock"></i>
                </span>
                <Password id="password" name="password" v-model="user.password" required />
              </div>

              <div class="field text-center mt-4">
                <Button size="normal" label="Iniciar Sesión" class="p-button-block" @click="loginUser(user)" />
              </div>
              <div class="text-small text-center">
                Necesita registrarse?
                <RouterLink to="/register">Crear una cuenta</RouterLink>
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
      user: { 'email': '', 'password': '' },
      message: null
    }
  },
  components: {

  },
  methods: {
    mostrarMensaje(mensaje) {
      this.message = `${mensaje.Code} - ${mensaje.message}`;
    },
    async loginUser(u) {
      console.log("llega",u); // kslzkdl
      try {

        const respuestaHttp = await fetch(`${urlBase}/seguridad/autenticate`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(u)
          });
        console.log('RERS' + respuestaHttp);
        const respuesta = await respuestaHttp.json();
        console.log('RESPUESTA ' + respuesta);
        if (respuesta && (respuesta.Code == Codigos.CodeSuccess)) {
          this.$router.push(`/sitioInterno/${respuesta.id}`);
        } else {
          this.mostrarMensaje(respuesta);
        }
      } catch (error) {
        console.log(error);
        this.mostrarMensaje({ Code: Codigos.CodeError, message: "Ocurrió un error al autenticar el usuario" });
      }
    }
  }
}
</script>