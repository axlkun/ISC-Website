<template>
    <v-sheet class="services" id="services">
        <v-sheet class="container-service">
            <v-sheet class="title-container">
                <h2>Servicios</h2>
                <p>Ofrecemos servicios profesionales de Ingeniería, Construcción y Diseño.</p>
            </v-sheet>

            <v-sheet class="d-flex justify-center flex-wrap" color="transparent">
                <v-card color="#dad9d6" class="service" v-for="service in services" :key="service.title" max-width="300" variant="elevated" elevation="1">

                    <v-icon color="#bc8c34" :icon="service.icon" size="large"></v-icon>
                    <h3>{{ service.title }} </h3>
                    <p>{{ service.description }}</p>
                </v-card>
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>

export default {

    name: 'servicesSection',

    data: () => ({
        services: [
            {
                title: 'Gerencia y Administración de proyectos',
                icon: 'mdi-bag-checked',
                description: 'Nos encargamos de todo el proceso de Pre-construccion, planeación, Ejecucion, Control y conclusion de proyectos.',

            },
            {
                title: 'Ejecución y Supervición de obra',
                icon: 'mdi-office-building-cog',
                description: 'Coordinamos los equipos y supervisamos cada etapa para garantizar la calidad y el cumplimiento de los plazos establecidos.',

            },
            {
                title: 'Obra civil',
                icon: 'mdi-bridge',
                description: 'Desarrollamos proyectos urbanos y de infraestructura a gran escala, priorizando en todo momento los más altos estándares de seguridad y durabilidad',

            },
            {
                title: 'Diseño arquitectónico',
                icon: 'mdi-home-city',
                description: 'Nuestro equipo especializado se dedica a crear espacios innovadores y funcionales que reflejen la visión y las necesidades de nuestros clientes.',

            },
            {
                title: 'Desarrollo de Ingenierías',
                icon: 'mdi-cog',
                description: 'Bajo voltaje, Electrico, Hidrosanitario, Mecanico, Gases Medicinales, Sistema HVAC.',

            },
            {
                title: 'Cálculos Estructurales',
                icon: 'mdi-calculator',
                description: 'Nuestro equipo de ingenieros realiza análisis detallados para asegurar que cada estructura cumpla con los estándares de seguridad y resistencia necesarios.',

            },
            {
                title: 'Gestion de proyectos con metodologia PMI',
                icon: 'mdi-calendar-clock',
                description: 'Nuestra gestión de proyectos se basa en un enfoque reconocido internacionalmente que garantiza  una gestión eficiente del tiempo, los recursos y el alcance.',

            }
        ]
    })

}
</script>

<style scoped>
.services {
    min-height: 100vh;
    background-color: var(--primary-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container-service {
    background: transparent;
}

.title-container {

    margin: 0 auto;
    color: var(--primary-blue);
    background: transparent;
    text-align: center;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {
        max-width: 50%;
    }
}

.title-container h2 {
    font-size: 35px;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
    }
}

.title-container p {
    font-size: 16px;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}

.service {
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    height: 250px;
    width: 100%;
    margin: 10px;
}

.service h3 {
    font-size: 20px;
    color: var(--primary-blue);
    line-height: 1;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {

        font-size: 25px;

    }
}

.service p,
li {
    font-size: 16px;
    line-height: 1;
    color: var(--primary-blue);

    @media only screen and (min-width: 1024px) {

        font-size: 20px;

    }
}

li {
    margin: 15px 0;
    display: flex;
    flex-direction: row;
}

span {
    margin-right: 15px;

}
</style>