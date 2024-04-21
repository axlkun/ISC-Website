<template>
    <v-parallax src="/assets/hero.webp" class="h-screen" color="grey">
        <div class="d-flex flex-column fill-height justify-center align-center text-white ma-3 text-center">

            <div class="home-encabezado">
                <h1 class="text-h4 font-weight-thin mb-4">
                    ISC: Ingeniería Servicios & Construcción
                </h1>
                <h2 class="subheading ">
                    Desarrollamos los proyectos de mayor complejidad técnica, mejorando la calidad de vida de las personas y potenciando el desarrollo económico.
                </h2>
    
                <div class="button-container">
                    <a class="button" href="mailto:#">Contacto</a>
                </div>
            </div>
            
        </div>
        
    </v-parallax>
</template>

<script setup>

</script>

<style scoped>

.home-encabezado {
    
    max-width: 95%;
    
    @media only screen and (min-width: 1024px) {
        max-width: 700px;
    }
}

.button-container {
   
    margin: 25px 0;
    
}

.button {
    background-color: var(--primary-gold);
    color: white;
    padding: 10px 35px;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    width: 85%;
    font-size: 16px;

    @media only screen and (min-width: 1024px) {
        width: auto;
    }
}

.button:hover {
    background-color: var(--secondary-gold);
}
</style>