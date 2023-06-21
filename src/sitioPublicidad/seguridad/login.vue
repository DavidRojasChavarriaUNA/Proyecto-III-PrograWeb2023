<template>
  <main class="container">
    <article id="registro" class="section section-muted d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="mt-4 mx-auto card card-default card-body box-shadow-large" style="max-width: 400px">
              <h3 class="card-title text-center mt-3">
                Bienvenido de vuelta!
              </h3>
              <form class="form-stacked text-center mt-3">
                <template v-if="message">
                  <div>
                    <message severity="error">{{ message }}</message>
                  </div>
                </template>
                <div class="field text-center">
                  <label for="email">Correo electrónico</label>
                  <span class="input-group-addon">
                    <i class="pi pi-envelope"></i>
                  </span> 
                  <InputText class=" h-3rem w-9" id="email" type="email" name="email" v-model="user.email" required />
                </div>

                <div class="field">
                  <label for="password">Contraseña  </label>
                  <span class="input-group-addon">
                    <i class="pi pi-lock"></i>
                  </span>
                  <br>
                  <Password class="h-3rem text-center" id="password" name="password" v-model="user.password" required />
                </div>

                <div class="field text-center">
                  <Button type="button" class="p-button-primary p-button-lg p-button-block" @click="loginUser(user)">
                    Iniciar Sesión
                  </Button>
                </div>
                <div class="text-small text-center">
                  Necesita registrarse?
                  <RouterLink to="/register">Crear una cuenta</RouterLink>
                </div>
              </form>
            </div>
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
      console.log(u);
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