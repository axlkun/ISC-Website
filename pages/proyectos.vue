<template>
    <v-sheet class="proyectos">
        <v-sheet class="heading">
            <p>Proyectos</p>
            <h1>Nuestros proyectos hablan por nosotros.</h1>
            <p>En ISC estamos comprometidos en desarrollar proyectos de la mas alta calidad para nuestros clientes. Nos enorgullecemos de desarrollar proyectos, donde la innovación, la eficiencia y la sostenibilidad son pilares fundamentales en cada etapa del proceso.</p>
        </v-sheet>

        <v-sheet class="d-flex flex-wrap justify-center justify-lg-space-between ga-8 pb-5 project-container" color="transparent">
            <v-card v-for="project in projects" link>
                <v-img :src="project.image" class="align-end"
                    gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)" width="400px" height="400px" cover>
                    <v-card-title class="text-white">{{ project.title }}</v-card-title>
                    <v-card-subtitle class="text-white mb-4">{{ project.location }}</v-card-subtitle>
                </v-img>

            </v-card>
        </v-sheet>

        <myParallax/>
        <myContact/>
    </v-sheet>
</template>

<script setup>
import edificio1 from 'assets/edificio-3.webp';
import edificio2 from 'assets/edificio-7.webp';
import edificio3 from 'assets/edificio-1.webp';
import edificio4 from 'assets/edificio-2.webp';
import edificio5 from 'assets/edificio-5.webp';
import edificio6 from 'assets/edificio-9.webp';

import myParallax from '../components/Parallax.vue';
  import myContact from '../components/Contact.vue';

const projects = [
    {
        title: 'Edificio Corporativo',
        image: edificio1,
        location: 'Monterrey, Nuevo León.',

    },
    {
        title: 'Complejo Habitacional',
        image: edificio2,
        location: 'Monterrey, Nuevo León.',

    },
    {
        title: 'Obra residencial',
        image: edificio3,
        location: 'Monterrey, Nuevo León.',

    },
    {
        title: 'Obra civil',
        image: edificio4,
        location: 'Monterrey, Nuevo León.',

    },
    {
        title: 'Desarrollo urbano',
        image: edificio5,
        location: 'Monterrey, Nuevo León.',

    },
    {
        title: 'Torre de departamentos',
        image: edificio6,
        location: 'Monterrey, Nuevo León.',

    },

]
</script>

<style scoped>
.proyectos {
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
    padding-top: 30px;

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

.project-container{
    background: transparent;
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 60px 0;
    margin-bottom: 30px;
}
</style>