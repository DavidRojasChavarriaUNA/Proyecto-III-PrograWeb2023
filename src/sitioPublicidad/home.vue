<template>
    <main class="uk-container">
       
        <section id="lstClientes" class="text-center surface-50 m-5">
            <article>
                <p class="font-light text-center text-5xl">Algunos de nuestros clientes</p>
                <div class="grid">
                    <div class="col flex flex-row-reverse flex-wrap scalein animation-duration-1000">
                        <div class="p-card w-4 ml-2  text-center surface-200 font-bold max-h-7rem">
                            <div class="p-card-body">
                                <img src="/assets/imagenes/playstation.png" class="w-full">
                            </div>
                        </div>
                    </div>
                    <div
                        class="col flex flex-wrap align-items-center scalein animation-duration-1000 justify-content-center ">
                        <div class="p-card w-4 ml-2  text-center surface-200 font-bold max-h-7rem">
                            <div class="p-card-body">
                                <img src="/assets/imagenes/intel.png" class="w-full">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div
                            class="p-card w-4 ml-2  text-center surface-200 font-bold max-h-7rem scalein animation-duration-1000">
                            <div class="p-card-body">
                                <img src="/assets/imagenes/amd.png" class="w-full">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid" style="margin-bottom:6%;">
                    <div class="col flex flex-row-reverse flex-wrap">
                        <div
                            class="p-card w-4 ml-2  text-center surface-200 font-bold max-h-7rem scalein animation-duration-1000">
                            <div class="p-card-body">
                                <img src="/assets/imagenes/cube.png" class="w-full">
                            </div>
                        </div>
                    </div>
                    <div class="col flex flex-wrap align-items-center justify-content-center">
                        <div
                            class="p-card w-4 ml-2  text-center surface-200 font-bold max-h-7rem scalein animation-duration-1000">
                            <div class="p-card-body">
                                <img src="/assets/imagenes/nvidia.png" class="w-12">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div
                            class="p-card w-4 ml-2  text-center surface-200 font-bold max-h-7rem scalein animation-duration-1000">
                            <div class="p-card-body">
                                <img src="/assets/imagenes/lego.png" class="w-10">
                            </div>
                        </div>
                    </div>
                </div>
                <section class="text-center">
                    <div class="h-7rem m-5">
                        <div class="p-card p-card-default p-card-body text-center surface-200">
                            <br>
                            <p class="font-light">Empresas reconocidas internacionalmente confian en nosostros, animate a
                                ser parte de nuestra
                                familia</p>
                            <br>
                        </div>
                    </div>

                </section>
            </article>
        </section>
        <section id="lstCaractFuncUsuario" class="m-auto p-auto">
            <h1 class="text-center font-light text-5xl" style="margin-top:6%">Caracteristicas funcionales</h1>
            <div class="grid">
                <div class="col flex flex-row-reverse flex-wrap">
                    <div class=" p-3">
                        <div class="p-card mt-4 surface-200" style="width: 20em">
                            <div class="p-card-title">
                                <div class="grid">
                                    <div class="col-4 text-center ml-2">
                                        <img src="/assets/imagenes/Mail.png" class="w-9 mt-1">
                                    </div>
                                    <div class="col">
                                        <p class="font-normal">
                                            Notificaciones
                                        </p>
                                    </div>
                                </div>
                                <Divider />
                            </div>
                            <div class="p-card-body text-center">
                                <p>Se envian los enlaces para votar a los que sean de interes por medio de correo
                                    electrónico</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col flex flex-wrap align-items-center justify-content-center">
                    <div class="p-3">
                        <div class="p-card mt-4 surface-200" style="width: 20em">
                            <div class="p-card-title">
                                <div class="grid">
                                    <div class="col-4 text-center ml-2">
                                        <img src="/assets/imagenes/Voto.png" class="w-9 mt-1">
                                    </div>
                                    <div class="col">
                                        <p class="font-normal">
                                            Voto seguro
                                        </p>
                                    </div>
                                </div>
                                <Divider />
                            </div>
                            <div class="p-card-body text-center">
                                <p>El voto se realiza de forma segura, confiable y confidencial, nadie podrá identificar el
                                    dueño del
                                    resultado</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3">
                        <div class="p-card mt-4 surface-200" style="width: 20em">
                            <div class="p-card-title">
                                <div class="grid">
                                    <div class="col-4 text-center ml-2">
                                        <img src="/assets/imagenes/formulario.png" class="w-9 mt-1">
                                    </div>
                                    <div class="col">
                                        <p class="font-normal">
                                            Crear voto
                                        </p>
                                    </div>
                                </div>
                                <Divider />
                            </div>
                            <div class="p-card-body text-center">
                                <p>Facilidad para crear votaciones o encuestas rapidamente por medio de arrastrar y soltar
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="lstCaractTenicas" class="p-auto surface-50 m-5">
            <br>
            <h1 class="text-center font-normal text-5xl">Caracteristicas técnicas</h1>
            <article>
                <div class="flex align-items-center justify-content-center ">
                    <div class="bg-no-repeat bg-primary-100 bg-center w-full h-25rem bg-black-alpha-10"
                        style="background-image: url('/assets/imagenes/Seguridad.jpg')">
                        <section class="text-center m-auto p-auto font-normal">
                            <h1
                                class="text-white-alpha-90 scalein animation-duration-2000 animation-iteration-infinite text-5xl">
                                Integridad de
                                datos
                            </h1>
                            <p class="text-white-alpha-90 scalein animation-duration-2000 animation-iteration-infinite">La
                                protección
                                de
                                datos es vital para evitar modificaciones no autorizadas.</p>
                        </section>
                    </div>
                </div>
            </article>
            <article>
                <div class="flex align-items-center justify-content-center ">
                    <div class="bg-no-repeat bg-primary-100 bg-center w-full h-25rem bg-black-alpha-10"
                        style="background-image: url('/assets/imagenes/Soporte.jpg')">
                        <section class="text-center m-auto p-auto font-normal ">
                            <h1
                                class="text-white-alpha-90 scalein animation-duration-2000 animation-iteration-infinite text-5xl">
                                Servicio disponible
                            </h1>
                            <p class="text-white-alpha-90 scalein animation-duration-2000 animation-iteration-infinite">
                                plataforma
                                dispoible en tiempo real, para realizar las votaciones en cualquier momento con una gran
                                cantidad de
                                usuarios
                                simultaneamente</p>
                        </section>
                    </div>
                </div>

            </article>
            <article>
                <div class="flex align-items-center justify-content-center ">
                    <div class="bg-no-repeat bg-primary-100 bg-center w-full h-25rem bg-black-alpha-10"
                        style="background-image: url('/assets/imagenes/SecurityLoggin.png')">
                        <section class="text-left p-auto font-normal" style="margin-left:10%;">
                            <h1
                                class="text-white-alpha-90 scalein animation-duration-2000 animation-iteration-infinite text-5xl">
                                Monitorero y registro de logs
                            </h1>
                            <p class="text-white-alpha-90 scalein animation-duration-2000 animation-iteration-infinite">
                                Todas
                                las actividades realizadas se registran en los logs, </p>
                            <p class="text-white-alpha-90 scalein animation-duration-2000 animation-iteration-infinite">
                                cualquier actividad inusual se notifica al
                                administrador</p>
                        </section>
                    </div>
                </div>
            </article>

            <br>
        </section>
        <section id="lstFuncAdministradores" class="m-8 text-center">
            <h1 class="font-light text-5xl" style="margin-top:6%">Caracteristicas especiales para administradores</h1>

            <div class="grid">
                <div class="col">
                    <div class="p-card surface-200">
                        <div class="p-card-title">
                            <img src="/assets/imagenes/accesibility.png" class="w-8 mt-5" alt="">
                        </div>
                        <div class="p-card-body">
                            <h3 class="p-card-title font-normal">Accesibilidad</h3>
                            <p>Acceda a datos de las votaciones en tiempo real desde cualquier dispositivo, gracias a
                                nuestro diseño
                                responsivo</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="p-card surface-200">
                        <div class="p-card-title">
                            <img src="/assets/imagenes/auditoria.jpg" class="w-8 mt-5" alt="">
                        </div>
                        <div class="p-card-body">
                            <h3 class="p-card-title font-normal">Auditoria de votos</h3>
                            <p>Contamos con documentación juridica y extra seguridad para votaciones importantes</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="p-card surface-200">
                        <div class="p-card-title">
                            <img src="/assets/imagenes/analitica.jpg" class="w-8 mt-5" alt="">
                        </div>
                        <div class="p-card-body">
                            <h3 class="p-card-title font-normal">Analitica y reporteria</h3>
                            <p>Tenemos a su disposición gran cantidad de opciones de reportería y herramientas de
                                análisis</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="srvCliente" class="p-auto text-center surface-50 m-5">
            <br>
            <h1 class="text-center font-light text-4xl">Servicio al cliente personalizado para
                asegurar sus elecciones</h1>
            <div class="grid surface-200 m-8 border-round">
                <div class="col">
                    <img src="/assets/imagenes/customerservice.webp" alt="">
                </div>
                <div class="col mt-5">
                    <h3 class="font-normal text-3xl">Servicio al cliente para tí y tus votantes</h3>
                    <p class="font-ligth">A medida que preparas las elecciones o mientras éstas suceden, pueden surgir
                        dudas, aquí estamos
                        para lo
                        que necesites</p>
                </div>
            </div>

            <div class="grid surface-200 m-8 border-round">
                <div class="col">
                    <img src="/assets/imagenes/teamMeeting.jpg" style="width:100%" alt="">
                </div>
                <div class="col mt-5">
                    <h3 class="font-normal text-3xl">Diferentes niveles de soporte para obtener un servicio a la medida</h3>
                    <p class="font-ligth">Independientemente de las necesidades de tu organización, con nuestros diferentes
                        planes, te
                        aseguramos que
                        siempre estarás cubierto</p>
                </div>
            </div>
            <br>
        </section>
        <section id="planesPrecios">
            <article class="m-auto text-center">
                <h1 class="font-light text-5xl">Nuestros Planes</h1>
                <div class="flex flex-wrap align-items-center justify-content-center">
                    <div class="grid">
                        <div class="col">
                            <div class="p-card surface-200 w-20rem">
                                <div class="p-card-title">
                                    <div class="flex-1 flex align-items-center">
                                        <img src="/assets/imagenes/happyFacepng.png" class=" w-3 mt-1 ml-3">
                                        <div>
                                            <h4 class="font-normal">Pro</h4>
                                            <p class="font-normal ml-4">A tan solo $200</p>
                                        </div>
                                    </div>
                                    <Divider></Divider>
                                </div>
                                <div class="p-card-body ">
                                    <p class="text-normal"><strong>Incluye:</strong></p>
                                    <div class="flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Votos ilimitados</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Votaciones seguras</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Sistemas anti-fraude</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>100 opciones por voto</p>
                                    </div>
                                    <div class="uflex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Datos de las elecciones</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Notificaciones de votacion</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Soporte via email</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Voto anonimo</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <div class="p-card surface-200 w-20rem">
                                <div class="p-card-title">
                                    <div class="flex-1 flex align-items-center">
                                        <img src="/assets/imagenes/nerdface.png" class=" w-3 mt-1 ml-3">
                                        <div>
                                            <h4 class="font-normal">Organización</h4>
                                            <p class="font-normal ml-4">A tan solo $400</p>
                                        </div>
                                    </div>
                                    <Divider></Divider>
                                </div>
                                <div class="p-card-body ">
                                    <p class="text-normal"><strong>Incluye:</strong></p>
                                    <div class="flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Votos ilimitados</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Votaciones seguras</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Sistemas anti-fraude</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>100 opciones por voto</p>
                                    </div>
                                    <div class="uflex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Datos de las elecciones</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Notificaciones de votacion</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Soporte via chat/email</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Voto anonimo</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Opciones de auditoria</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Metodos personalizados de conteo de votos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-card surface-200 w-20rem">
                                <div class="p-card-title">
                                    <div class="flex-1 flex align-items-center">
                                        <img src="/assets/imagenes/cooldFace.png" class=" w-3 mt-1 ml-3">
                                        <div>
                                            <h4 class="font-normal">Business</h4>
                                            <p class="font-normal ml-4">ADesde $1000</p>
                                        </div>
                                    </div>
                                    <Divider></Divider>
                                </div>
                                <div class="p-card-body ">
                                    <p class="text-normal"><strong>Incluye:</strong></p>
                                    <div class="flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Votos ilimitados</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Votaciones seguras</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Sistemas anti-fraude</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>100 opciones por voto</p>
                                    </div>
                                    <div class="uflex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Datos en tiempo real</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Notificaciones personalizadas</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Soporte via chat/email/voz</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Integracion con Single Sign On (SSO)</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Voto anonimo</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Mejores opciones de auditoria</p>
                                    </div>
                                    <div class="flex-1 flex align-items-center">
                                        <span><i class="pi pi-check" style="color: green"></i></span>
                                        <p>Metodos personalizados de conteo de votos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section id="registro" class="m-5 surface-50">
            <br>
        <h1 class="text-center font-normal text-4xl">Registrese y obtenga acceso a una demo completa</h1>
        <div class="text-center">
            <a href="/register" class="p-button p-button-primary p-button-lg">Registro</a>
        </div>
        <br>
    </section>
    </main>
</template>
  
<script>
import { Codigos } from '../js/sitioPublicidad'
const urlBase = 'http://localhost:8089/server'

export default {
    data() {
        return {
        }
    },
    components: {
    },
    methods: {
    }
}
</script>