<template>
    <div class="proyecto">

        <div v-if="loading" class="skeleton">
            <!-- Contenedor principal -->
            <v-sheet color="#f5f1f1" class="d-flex flex-column">
                <v-sheet color="#f5f1f1">
                    <v-row justify-center>
                        <!-- Contenedor 70% -->
                        <v-col cols="12" md="6" class="pt-12">
                            <v-skeleton-loader type="heading" color="#f5f1f1"></v-skeleton-loader>
                            
                        </v-col>
                        <!-- Contenedor 30% -->
                        <v-col cols="12" md="6" class="pt-12">
                            <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </v-sheet>

                <v-sheet color="#f5f1f1">
                    <!-- Skeleton de la imagen -->
                    <v-skeleton-loader type="image" color="#f5f1f1" class="pt-md-12 pb-md-12"></v-skeleton-loader>

                    <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>
                    <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>
                    <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>
                    <v-skeleton-loader type="paragraph" color="#f5f1f1" class="pb-10"></v-skeleton-loader>
                </v-sheet>
            </v-sheet>

        </div>

        <div v-else>
            <div class="proyecto-heading">
                <div class="proyecto-tittle">
                    <h1>{{ project.title }}</h1>
                </div>
    
                <div class="proyecto-small-description">
    
                    <p>{{ project.summary }}</p>
    
                </div>
            </div>
    
            <div class="proyecto-image">
                <img :src="`${dominio}${project.imageUrl}`" alt="Imagen Sobre Nosotros" loading="lazy"/>
            </div>
    
            <div class="proyecto-data">
                <div class="proyecto-details">
    
                    <div>
                        <p>Ubicación: </p>
                        <h2>{{ project.location }}</h2>
                    </div>
                    <div>
                        <p>Fecha: </p>
                        <h2> {{ project.date }}</h2>
                    </div>
                    
                </div>
    
            </div>
    
            <!-- <div class="proyecto-html">
    
                <div class="proyecto-html-text" v-html="project.description"></div>
                
            </div> -->

            <v-sheet class="proyecto-html">
                <div class="html-content" v-html="project.description"></div>
            </v-sheet>
    
            <!-- <myProyectosRecientes/> -->
        </div>
        
    </div>
</template>

<script setup>
import api from '../api';

const route = useRoute();
const slug = ref(route.params.slug);
const dominio = api.defaults.baseURL;
const project = ref(null);
const projects = ref(null);
const loading = ref(true);


const loadData = async () => {
    // loading.value = true;

    try {
        const projectResponse = await loadProject();
        if (projectResponse.status === 200) {
            project.value = projectResponse.data.data;

            console.log(project);

        } else {
            // Redirige al índice en caso de respuesta no exitosa
            this.$router.push('/');
        }
    } catch (error) {
        handleError(error);
    }
    finally {
        loading.value = false;
    }

    // Realiza la otra petición en segundo plano
    loadRelatedProjects();
}


const loadProject = async () => {
    return await api.get(`/api/projects/${slug.value}`);
}


const loadRelatedProjects = async () => {
    try {
        const relatedProjectResponse = await api.get(`/api/related-projects/${slug.value}`);
        projects.value = relatedProjectResponse.data.data;
    } catch (error) {
        console.error('Error al obtener proyectos relacionados:', error);
    }
}

const handleError = (error) => {
    console.error('Error al hacer la solicitud GET:', error);
    this.$router.push('/');
}



watch(() => route.params.slug, () => {
    slug.value = route.params.slug;
    loadData();
});

onMounted(() => {
    loadData();
});

</script>

<style>
.proyecto {
    background-color: var(--primary-background);
}

.proyecto-heading, .proyecto-data {
    max-width: 90%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 768px) {

        flex-direction: row;
        max-width: 70%;

    }
}

.proyecto-tittle,
  .proyecto-small-description, .proyecto-details, .proyecto-data-small-description {
    flex: 1; /* Ambos elementos ocuparán el 50% del espacio disponible */
  }

  .proyecto-details{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .proyecto-details div{ 
    gap: 15px;
    border-bottom: 1px solid gray;
  }

  .proyecto-details div h2{
    font-weight: bold;
  }

  .proyecto-heading h1{
    font-size: 30px;
    font-weight: bold;
    color: var(--secondary-blue);
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        font-size: 45px;
    }
  }

   .proyecto-heading p {
    font-size: 14px;
    line-height: 1.5;
    color: var(--secondary-blue);

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.proyecto-image{
    max-width: 90%;
    max-height: 500px;
    margin: 30px auto;
    overflow: hidden;
}

.proyecto-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.proyecto-html{
    width: 90%;
    max-width: 120rem;
    margin: 30px auto;

    @media (min-width: 768px) {

        max-width: 70%;

    }
}

.proyecto-html-text{
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 35px 0;
    line-height: 1.5;

    @media (min-width: 768px) {
        max-width: 70%;

    }
}

.proyecto-html-text h2{
    color: white;
    font-weight: bold;
    font-size: 20px;
}

.proyecto-html-text p{
    color: white;
}
</style>