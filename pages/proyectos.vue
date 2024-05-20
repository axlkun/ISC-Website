<template>
    <v-sheet class="proyectos">
        <v-sheet class="heading">
            <p>Proyectos</p>
            <h1>Nuestros proyectos hablan por nosotros.</h1>
            <p>En ISC estamos comprometidos en desarrollar proyectos de la mas alta calidad para nuestros clientes. Nos enorgullecemos de desarrollar proyectos, donde la innovación, la eficiencia y la sostenibilidad son pilares fundamentales en cada etapa del proceso.</p>
        </v-sheet>

        <v-sheet class="skeleton d-flex flex-column-reverse flex-md-column " v-if="loading" color="#f5f1f1">
            <template v-for="rowIndex in 1">
                <v-row :class="rowIndex === 1 ? 'pt-md-6' : ''" class="pb-md-6">
                    <template v-for="colIndex in 3">
                        <v-col cols="12" md="4">
                            <v-skeleton-loader :height="rowIndex == 1 ? 510 : 350" type="image, article, chip"
                                color="#f5f1f1"></v-skeleton-loader>
                        </v-col>
                    </template>
                </v-row>
            </template>
        </v-sheet>

        <v-sheet v-else class="d-flex flex-wrap justify-center justify-lg-space-between ga-8 pb-5 project-container" color="transparent">
            <v-card v-for="project in projects" :href="'/proyecto/' + project.slug">
                <v-img :src="`${dominio}${project.imageUrl}`" class="align-end"
                    gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)" width="400px" height="400px" cover>
                    <v-card-title class="text-white">{{ project.title }}</v-card-title>
                    <v-card-subtitle class="text-white mb-4">{{ project.service }}</v-card-subtitle>
                </v-img>

            </v-card>
        </v-sheet>

        <myParallax/>
        <myContact/>
    </v-sheet>
</template>

<script setup>

import myParallax from '../components/Parallax.vue';
import myContact from '../components/Contact.vue';

import api from '../api';

const dominio = api.defaults.baseURL;
const projects = ref([]);
const loading = ref(true);

const getProjects = async () => {
    try {
        const response = await api.get('/api/projects');

        if (response.status === 200) {
            projects.value = response.data.data;
        } else {
            console.error('Respuesta no exitosa:', response);
            $router.push('/');
        }
    } catch (error) {
        console.error('Error al hacer la solicitud GET:', error);
        $router.push('/');
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    getProjects();
})

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