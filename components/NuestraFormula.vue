<template>

    <v-sheet class="nuestraformula-container">

        <v-sheet class="background-container">

            <v-sheet class="text-container pt-6">

                <p>Nuestra fórmula</p>

                <h2>Transformando desafíos en soluciones</h2>

                <p>En ISC vemos cada proyecto como un desafío único e integral y tenemos el mejor equipo para llevarlo
                    adelante. Contamos con profesionales con amplia experiencia en el ramo y fuerza de trabajo altamente
                    capacitada con conocimientos y experiencia diferencial en las áreas en que operamos. <br>
                    <br>Nuestro
                    espíritu
                    innovador y la capacidad de crear soluciones integrales apostando a la calidad y la transparencia lo
                    que
                    nos convierten en socios estratégicos de nuestros clientes.
                </p>

            </v-sheet>

            <v-sheet class="d-flex justify-center flex-wrap mt-16 ga-6 pb-16" color="transparent">
                <v-card class="card mb-6" color="transparent" v-for="element in elements" max-width="400">

                    <div class="d-flex mb-3">
                        <v-icon color="#bc8c34" :icon="element.icon" size="large"></v-icon>
                        <h3 class="ml-2">{{ element.title }}</h3>
                    </div>
                    <p class="text-white">{{ element.description }}</p>
                </v-card>
            </v-sheet>

        </v-sheet>

    </v-sheet>

</template>

<script setup>

const elements = [
    {
        title: 'Gestión Eficiente de proyectos',
        icon: 'mdi-bag-checked',
        description: 'No somos solo una Empresa constructora, sino una compañía con capacidades de desarrollar proyectos integrales y agregar valor a través de la ingeniería y una cadena de suministros en los proyectos en los que participamos. ',

    },
    {
        title: 'Garantía de Entrega',
        icon: 'mdi-package-check',
        description: 'Nunca, en nuestros años de historia, hemos dejamos un proyecto sin terminar. ISC es garantía de que una obra llegará a su fin, y será entregada bajo los más altos estándares de calidad, seguridad y transparencia a través de la gestión eficiente de los recursos.',

    },
    {
        title: 'Visión a futuro',
        icon: 'mdi-bridge',
        description: 'Nuestro modelo de negocio se caracteriza por una visión a largo plazo que promueve el desarrollo de las personas con equidad y diversidad, el crecimiento económico y el cuidado del medioambiente.',

    },
    {
        title: 'Pasión por el trabajo',
        icon: 'mdi-heart-box-outline',
        description: 'Somos un equipo multicultural de profesionales y colaboradores con vasta experiencia, apasionados por los grandes desafíos, siempre en búsqueda de nuevos retos',

    },
    {
        title: 'Transformación ',
        icon: 'mdi-cog',
        description: 'Trabajamos aplicando las mejores prácticas y en la implementación de herramientas y tecnologías que nos permitan liderar los cambios en la industria y mantenernos a la vanguardia.',

    },
    {
        title: 'Solidez Financiera',
        icon: 'mdi-cash-multiple',
        description: 'Contamos con una capacidad financiera que nos permite cumplir con todos nuestros compromisos contractuales y nos da la flexibilidad necesaria para poder afrontar las crisis',

    }
];

</script>

<style scoped>
.nuestraformula-container {
    background-color: var(--secondary-blue);
}

.background-container {
    max-width: 85%;
    margin: 0 auto;
    background-color: var(--secondary-blue);
    background-image: linear-gradient(to bottom, #0b1935, #0b1930);

    @media only screen and (min-width: 1024px) {
        max-width: 90%;
    }
}

.text-container {
    background: transparent;
    max-width: 90%;
    margin: 20px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media only screen and (min-width: 1024px) {
        max-width: 60%;
    }
}

.text-container p {
    font-size: 14px;
    line-height: 1.5;
    color: white;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.text-container p:first-of-type {
    font-size: 14px;
    line-height: 1.5;
    color: var(--secondary-gold);
    font-weight: bold;

    @media only screen and (min-width: 1024px) {

        font-size: 16px;
    }
}

.text-container h2 {
    font-size: 25px;
    font-weight: bold;
    color: white;

    @media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
}

h3 {
    font-weight: bold;
    color: var(--primary-gold);
}

.card p{
    font-size: 14px;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {

        font-size: 16px;

    }
}

</style>