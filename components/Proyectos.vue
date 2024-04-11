<template>
    <v-sheet class="services" id="services">
        <v-sheet class="container-service">
            <v-sheet class="title-container">

                <v-sheet class="litle-container">
                
                    <h2>Proyectos</h2>
                    <p>Conoce algunos de nuestros proyectos más recientes. Desde residencias modernas hasta complejos comerciales de vanguardia,</p>
                </v-sheet>

                <v-sheet class="litle-container">
                    <a class="button" href="/sobre-nosotros">Todos los proyectos</a>
                </v-sheet>
                
            </v-sheet>

            <v-sheet class="d-flex flex-wrap justify-center justify-lg-space-between ga-8 pb-5" color="transparent">
                <v-card v-for="project in projects" link>
                    <v-img
                      :src="project.image"
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                      width="400px"
                      height="400px"
                      cover
                    >
                      <v-card-title class="text-white">{{ project.title }}</v-card-title>
                      <v-card-subtitle class="text-white mb-4">{{ project.location }}</v-card-subtitle>
                    </v-img>
        
                  </v-card>
            </v-sheet>

            
        </v-sheet>
    </v-sheet>
</template>

<script>

export default {

    name: 'servicesSection',

    data: () => ({
        projects: [
            {
                title: 'Edificio Corporativo',
                image: '/_nuxt/assets/edificio-3.webp',
                location: 'Monterrey, Nuevo León.',

            },
            {
                title: 'Complejo Habitacional',
                image: '/_nuxt/assets/edificio-7.webp',
                location: 'Monterrey, Nuevo León.',

            },
            {
                title: 'Obra residencial',
                image: '/_nuxt/assets/edificio-1.webp',
                location: 'Monterrey, Nuevo León.',

            },
            {
                title: 'Obra civil',
                image: '/_nuxt/assets/edificio-2.webp',
                location: 'Monterrey, Nuevo León.',

            },
            {
                title: 'Desarrollo urbano',
                image: '/_nuxt/assets/edificio-5.webp',
                location: 'Monterrey, Nuevo León.',

            },
            {
                title: 'Torre de departamentos',
                image: '/_nuxt/assets/edificio-9.webp',
                location: 'Monterrey, Nuevo León.',

            },
           
        ]
    })

}
</script>

<style scoped>
.services {
    background-color: var(--secondary-blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container-service {
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

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: start;
    }
}

.title-container h2 {
    color: var(--primary-gold);
    font-size: 25px;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
}

.title-container p {
    font-size: 14px;
    color: white;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.litle-container{
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

    &:hover{
        background-color: var(--secondary-gold);
    }
}
</style>