<template>
    <v-sheet class="projects" id="projects">
        <v-sheet class="container-projects">
            <v-sheet class="title-container">

                <v-sheet class="title-subcontainer">

                    <h2>Proyectos</h2>
                    <p>Nuestros proyectos más recientes</p>
                </v-sheet>

                <v-sheet class="title-subcontainer">
                    <a class="button" href="#">Todos los proyectos</a>
                </v-sheet>

            </v-sheet>

            <v-sheet class="d-flex flex-wrap justify-center justify-lg-space-between ga-8 pb-5" color="transparent">
                <v-card v-for="project in projects" link>
                    <v-img :src="project.image" class="align-end"
                        gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)" width="400px" height="400px" cover>
                        <v-card-title class="text-white">{{ project.title }}</v-card-title>
                        <v-card-subtitle class="text-white mb-4">{{ project.location }}</v-card-subtitle>
                    </v-img>

                </v-card>
            </v-sheet>


        </v-sheet>
    </v-sheet>
</template>

<script setup>

import edificio1 from 'assets/edificio-3.webp'
import edificio2 from 'assets/edificio-7.webp'
import edificio3 from 'assets/edificio-1.webp'
import edificio4 from 'assets/edificio-2.webp'
import edificio5 from 'assets/edificio-5.webp'
import edificio6 from 'assets/edificio-9.webp'

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
.projects {
    background-color: var(--primary-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container-projects {
    background: transparent;
    width: 90%;
    max-width: 120rem;
    margin: 25px auto;
}

.title-container {

    background: transparent;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: start;
    }
}

/*.title-container h2 {
    color: var(--primary-gold);
    font-size: 25px;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
}

.title-container p {
    font-size: 14px;
    color: var(--secondary-blue);

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}*/

.title-container p {
    font-size: 25px;
    color: var(--secondary-blue);

    @media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
}

.title-container h2 {
    font-size: 14px;
    color: var(--primary-gold);

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.title-subcontainer {
    background: transparent;
    color: white;
    max-width: 600px;
    margin: 15px 0;
}

.button {
    background-color: var(--primary-gold);
    color: white;
    padding: 10px 35px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    min-width: 100px;

    &:hover {
        background-color: var(--secondary-gold);
    }
}
</style>