<template>
    <v-sheet class="home" id="home">

        <v-sheet class="home-container">

            <v-sheet class="home-encabezado">

                <v-sheet class="hook">
                    <h1>ISC: Ingeniería Servicios & Construcción</h1>
                </v-sheet>

                <v-sheet class="home-description">
                    <p>Somos una empresa de construcción ubicada en <strong>Monterrey</strong> especializada en servicios de Gerencia y administración de proyectos, Ejecución y supervisión de obra, Diseño, Desarrollo de ingenierías, Cálculos estructurales y Gestión con metodología PMI.</p>
                </v-sheet>

            </v-sheet>
            <v-sheet class="buttons-container">
                <a class="button" href="mailto:axelcruz.dev@gmail.com">Contacto</a>
            </v-sheet>

        </v-sheet>
    </v-sheet>
</template>

<script setup>

</script>

<style scoped>
.home {
    display: flex;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/hero.jpg');
    background-position: center center;
    background-size: cover;
    min-height: 90vh;
}

.home-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 120rem;
    background: transparent;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.home-encabezado {
    background: transparent;
    
    @media only screen and (min-width: 1024px) {
        max-width: 700px;
    }
}



.hook {
    color: var(--primary-background);
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    background: transparent;
    max-width: 90%;
    margin: 0 auto;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 60px;
        line-height: 1;
        max-width: none;
    }
}

.home-description {
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 18px;
    line-height: 1.5;
    margin: 15px 0;
    color: var(--primary-background);

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: start;
        font-size: 24px;
        gap: 20px;
    }
}

.buttons-container {
   
    margin: 15px 0;
    
}

.button {
    background-color: var(--primary-gold);
    color: white;
    padding: 10px 35px;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    width: 85%;
    font-size: 20px;

    @media only screen and (min-width: 1024px) {
        width: auto;
    }
}

.button:hover {
    background-color: var(--secondary-gold);
}
</style>