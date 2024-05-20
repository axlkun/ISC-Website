<template>
    <v-sheet class="projects" id="projects">
        <v-sheet class="container-projects pb-lg-16">
            <v-sheet class="title-container">

                <v-sheet class="title-subcontainer">

                    <h2>Proyectos</h2>
                    <p>Nuestros proyectos más recientes</p>
                </v-sheet>

                <v-sheet class="title-subcontainer">
                    <a class="button" href="/proyectos">Todos los proyectos</a>
                </v-sheet>

            </v-sheet>


            <v-sheet class="skeleton d-flex flex-column-reverse flex-md-column" v-if="loading" color="#f5f1f1">
                <template v-for="rowIndex in 2">
                    <v-row :class="rowIndex === 1 ? 'pt-md-6' : ''" class="pb-md-6">
                        <template v-for="colIndex in 2">
                            <v-col cols="12" md="6">
                                <v-skeleton-loader :height="rowIndex == 1 ? 510 : 350" type="image, article, chip"
                                    color="#f5f1f1"></v-skeleton-loader>
                            </v-col>
                        </template>
                    </v-row>
                </template>
            </v-sheet>

            <v-sheet v-else class="d-flex flex-wrap justify-center justify-lg-space-between ga-8 pb-5" color="transparent">
                <v-card v-for="project in projects" :href="'/proyecto/' + project.slug">
                    <v-img :src="`${dominio}${project.imageUrl}`" class="align-end"
                        gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)" width="400px" height="400px" cover>
                        <v-card-title class="text-white">{{ project.title }}</v-card-title>
                        <v-card-subtitle class="text-white mb-4">{{ project.service }}</v-card-subtitle>
                    </v-img>

                </v-card>
            </v-sheet>


        </v-sheet>
    </v-sheet>
</template>

<script setup>
import api from '../api';

const dominio = api.defaults.baseURL;
const projects = ref([]);
const loading = ref(true);

const getProjects = async () => {
    try {
        const response = await api.get('/api/projects?limit=6');

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