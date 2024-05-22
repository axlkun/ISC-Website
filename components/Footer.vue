<template>
    <v-footer class="d-flex flex-column" color="#0b1930">

        <div class="d-flex flex-sm-row flex-column justify-space-between footer-section">

            <div class="section">

                <a class="logo" href="/">

                    <img :src="logo" alt="Icono" />

                </a>

                <h3>ISC Ingeniería Servicios y Construcción</h3>

                <p>Profesionales Expertos en Construcción con +10 años de experiencia. Comprometidos con la excelencia y
                    la innovación en cada proyecto que emprendemos</p>

            </div>

            <div class="section">
                <h3>Navegación</h3>

                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
                    <li><a href="/servicios">Servicios</a></li>
                    <li><a href="/proyectos">Proyectos</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </div>

            <div class="section">
                <h3>Redes sociales</h3>

                <ul>
                    <li><a href="#" target="_blank">Linkdln</a></li>
                    <li><a href="https://www.facebook.com/share/mVrZuFkdR591uQzo/?mibextid=YMEMSu" target="_blank">Facebook</a></li>
                    <li><a href="https://www.instagram.com/isc.mexico" target="_blank">Instagram</a></li>
                    <li><a href="mailto:contacto@isc-mexico.com">Email</a></li>
                </ul>
            </div>

        </div>

        <div class="d-flex flex-row justify-center pt-2 pb-2 w-100 section">
            <p>
                {{ new Date().getFullYear() }} — Todos los derechos reservados ©
                <!-- <a href="https://www.instagram.com/axlkun/" target="_blank">
            <strong>@axlkun</strong>
          </a> -->

            </p>

        </div>

    </v-footer>
</template>

<script setup>
import logo from '../assets/logo-blanco.jpg';
</script>


<style scoped>
.footer-section {
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid var(--primary-background);

    @media only screen and (min-width: 1024px) {
        width: 90%;
    }
}

.section {
    margin-top: 15px;
    max-width: 350px;
}

.footer-section {
    line-height: 1.8;
}

.footer-section h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 5px 0;
    color: var(--primary-background);
}

ul,
ol {
    list-style: none;
}

.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: fit-content;
}

.logo img {
    width: 48px;
    height: 48px;
}

.section a {
    color: white;

    &:hover {
        color: var(--primary-gold);
        cursor: pointer;
    }
}
</style>