<template>
<v-sheet class="contacto">
    <v-sheet class="heading">
        <p>Contacto</p>
        <h1>¿Tienes dudas? Contactános.</h1>
        <p>En ISC estamos comprometidos en desarrollar proyectos de la mas alta calidad para nuestros clientes. Tenemos un horario de atención de: <strong> a Viernes de 8:00 AM a 6:00 PM </strong> y <strong>Sábado de 8:00 AM a 1:00 PM</strong></p>
    </v-sheet>

    <myParallax/>
        <myContact/>
</v-sheet>
</template>

<script setup>
import myParallax from '../components/Parallax.vue';
  import myContact from '../components/Contact.vue';
</script>

<style scoped>
.contacto {
    background-color: var(--primary-background);
}

.heading {
    background: transparent;
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;

    @media only screen and (min-width: 1024px) {
        padding-top: 60px;
        max-width: 50%;
    }
}

.heading p {
    font-size: 14px;
    line-height: 1.5;
    color: var(--secondary-blue);

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.heading p:first-of-type {
    font-size: 14px;
    line-height: 1.5;
    color: var(--secondary-gold);
    font-weight: bold;

    @media only screen and (min-width: 1024px) {

        font-size: 16px;
    }
}

.heading h1 {
    font-size: 30px;
    font-weight: bold;
    color: var(--secondary-blue);
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        font-size: 45px;
    }
}
</style>