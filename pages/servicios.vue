<template>
    <v-sheet class="servicios">
        <v-sheet class="heading">
            <p>Servicios</p>
            <h1>Ingeniería, Construcción y Diseño.</h1>
            <p>En ISC ofrecemos un servicio integral para todos los requerimientos de cualquier tipo de desarrollo,
                desde residenciales hasta urbanos. Estamos comprometidos con ofrecer la mayor calidad en cada uno de
                ellos</p>
        </v-sheet>

        <v-sheet class="list-services">

            <v-sheet class="service mb-16" v-for="service in services">
                <v-sheet class="service-image">
                    <img :src="service.image" alt="Imagen Sobre Nosotros" loading="lazy" />
                </v-sheet>

                <v-sheet class="service-text">

                    <v-icon color="#bc8c34" :icon="service.icon" size="large"></v-icon>
                    <h2>{{ service.title }}</h2>

                    <div class="service-description" v-html="service.description"></div>


                </v-sheet>
            </v-sheet>

        </v-sheet>

        <myParallax/>
        <myContact/>
    </v-sheet>
</template>

<script setup>
import imgGerencia from '../assets/sobre-nosotros1.webp';
import imgSupervision from '../assets/supervision-obra.webp';
import imgObraCivil from '../assets/obra-civil.webp';
import imgDiseñoArquitectonico from '../assets/diseño-arquitectonico.webp';
import imgIngenierias from '../assets/ingenierias.webp';
import imgCalculoEstructural from '../assets/calculos-estructurales.webp';
import imgMetodologiaPMI from '../assets/metodologia-pmi.webp';

import myParallax from '../components/Parallax.vue';
  import myContact from '../components/Contact.vue';

const services = [
    {
        title: 'Gerencia y Administración de proyectos',
        icon: 'mdi-bag-checked',
        image: imgGerencia,
        description: `<p>Nos especializamos en ofrecer soluciones integrales para la gestión eficiente de proyectos de
                        construcción. Desde la etapa inicial de pre-construcción hasta la conclusión del proyecto,
                        nuestro equipo de expertos se encarga de coordinar cada fase con meticulosidad y
                        profesionalismo.</p>

                    <p>Nuestros servicio abarca desde la planificación estratégica y la gestión de recursos hasta el
                        control de calidad y el cumplimiento de plazos. Nos comprometemos a mantener una comunicación
                        transparente y constante con nuestros clientes, proporcionando informes detallados y
                        actualizaciones regulares sobre el progreso del proyecto.</p>`,

    },
    {
        title: 'Ejecución y Supervisión de obra',
        icon: 'mdi-office-building-cog',
        image: imgSupervision,
        description: `<p>
    Nuestro equipo altamente capacitado coordina de manera efectiva todos los aspectos operativos para garantizar que la visión del proyecto se materialice con excelencia y puntualidad.
</p>
<p>
    Desde el inicio de la construcción, nuestra labor va más allá de la simple ejecución; nos esforzamos por fusionar la experiencia técnica con una visión estratégica. Coordinamos minuciosamente a los equipos de trabajo, supervisando cada detalle con atención meticulosa para asegurar la coherencia con los planos y especificaciones.
</p>`,

    },
    {
        title: 'Obra civil',
        icon: 'mdi-bridge',
        image: imgObraCivil,
        description: `<p>
    Enfocados en el desarrollo de proyectos urbanos y de infraestructura a gran escala, nuestro equipo se compromete a priorizar los más altos estándares de seguridad y durabilidad en cada etapa del proceso.
</p>
<p>
    Nos dedicamos a concebir y ejecutar obras civiles que no solo transforman entornos, sino que también enriquecen comunidades. Desde la planificación inicial hasta la implementación final, nuestra atención se centra en la creación de estructuras sólidas y funcionales que perduren en el tiempo.
</p>`,

    },
    {
        title: 'Diseño arquitectónico',
        image: imgDiseñoArquitectonico,
        icon: 'mdi-home-city',
        description: `<p>
    Enfocados en la creación de espacios innovadores y funcionales, nuestro equipo especializado se dedica a materializar la visión y las necesidades de nuestros clientes a través de diseños arquitectónicos inspiradores.
</p>
<p>
    Cada proyecto es abordado con creatividad y atención al detalle, buscando no solo cumplir con los requisitos funcionales, sino también superar las expectativas estéticas y emocionales de nuestros clientes y usuarios finales.
</p>`,

    },
    {
        title: 'Desarrollo de Ingenierías',
        icon: 'mdi-cog',
        image: imgIngenierias,
        description: `
    Nos especializamos en el diseño y desarrollo de ingenierías en una amplia gama de disciplinas, incluyendo sistemas de bajo voltaje, eléctricos, hidrosanitarios, mecánicos, gases medicinales y sistemas HVAC.
</p>
<p>
    Nuestro equipo de ingenieros altamente calificados trabaja en estrecha colaboración para crear soluciones técnicas innovadoras y eficientes que cumplan con los más altos estándares de calidad y seguridad.
</p>`,

    },
    {
        title: 'Cálculos Estructurales',
        icon: 'mdi-calculator',
        image: imgCalculoEstructural,
        description: `<p>
    Nuestro equipo de ingenieros especializados se dedica a realizar análisis detallados para garantizar que cada estructura diseñada cumpla con los más altos estándares de seguridad y resistencia requeridos.
</p>
<p>
    Nuestro enfoque se basa en la combinación de experiencia técnica y conocimientos especializados. Consideramos factores como la carga, la resistencia del material, la estabilidad y la seguridad sísmica para garantizar que cada diseño estructural sea sólido, seguro y funcional.
</p>
<p>
    Utilizando herramientas avanzadas y técnicas de modelado estructural, llevamos a cabo una evaluación exhaustiva de cada componente y sistema estructural. Esto nos permite asegurar la integridad estructural del proyecto.
</p>`,

    },
    {
        title: 'Gestion de proyectos con metodologia PMI',
        icon: 'mdi-calendar-clock',
        image: imgMetodologiaPMI,
        description: `<p>
    Adoptamos un enfoque de gestión de proyectos basado en la metodología PMI (Project Management Institute), reconocida internacionalmente por su eficacia en garantizar una gestión eficiente del tiempo, los recursos y el alcance del proyecto.
</p>
<p>
    Nuestro equipo de gestión de proyectos está altamente capacitado y certificado en la metodología PMI, lo que nos permite aplicar las mejores prácticas y estándares de la industria en cada proyecto que emprendemos.
</p>
<p>
    Nos comprometemos a seguir los principios fundamentales de la metodología PMI, incluida la planificación detallada, la gestión de riesgos, el control del cambio y la comunicación efectiva. Estos principios nos ayudan a mantenernos en el camino correcto, minimizar los riesgos y asegurar la entrega exitosa del proyecto dentro del tiempo y el presupuesto establecidos.
</p>`,

    }
]
</script>

<style scoped>
.servicios {
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

.list-services {
    max-width: 90%;
    margin: 30px auto;
    background: transparent;
}

.service {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--secondary-blue);

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
}

.service-image {
    /* Ajusta el tamaño de la imagen al 50% del contenedor */
    flex: 0 0 50%;
    background: transparent;
}

.service-image img {
    /* Ajusta el tamaño de la imagen al 100% del contenedor */
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.service-text {
    background: transparent;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
}

.service-text h2 {
    font-size: 20px;
    font-weight: bold;
    color: var(--primary-gold);
    line-height: 1.2;
}

.service-text p {
    font-size: 14px;
    line-height: 1.2;
    color: white;

    @media only screen and (min-width: 1024px) {

        font-size: 16px;

    }
}

.service-description {
    font-size: 14px;
    line-height: 1.2;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}
</style>