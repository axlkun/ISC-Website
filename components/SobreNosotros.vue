<template>
    <v-sheet class="aboutme" id="aboutme">
        <v-sheet class="description">

            <v-sheet class="description-container">

                <v-sheet class="container-aboutme-title">
                    <h2>Sobre nosotros</h2>
                </v-sheet>

                <v-sheet class="container-aboutme-description">
                    <p>
                        ISC: Ingeniería Servicios & Construcción fue fundada en la ciudad de <strong>Monterrey, Nuevo León</strong> por un grupo de profesionales con más de <strong>10 años de experiencia</strong> en el sector.
                    </p>

                    <p>
                        Nuestra empresa surgió con la visión de ofrecer un valor agregado a la sociedad a través del
                        desarrollo de infraestructura de calidad. 
                    </p>

                    <p>
                        Hemos evolucionado para convertirnos en líderes en nuestro campo, comprometidos
                        con la excelencia y la innovación en cada proyecto que emprendemos.
                    </p>
                </v-sheet>

                <v-sheet class="button-container">
                    <a class="button" href="/sobre-nosotros">Leer más...</a>
                </v-sheet>

            </v-sheet>

        </v-sheet>
        <v-sheet class="technologies">


            <v-sheet class="img-container">
                <img class="myImg" :src="img1" alt="Imagen Sobre Nosotros" />
            </v-sheet>


        </v-sheet>
    </v-sheet>
</template>

<script setup>
import img1 from '../assets/edificio-8.jpg';

</script>

<style scoped>
.aboutme {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
}

.description,
.technologies {
    flex-grow: 1;
    flex-basis: 50%;
}

.description {
    background-color: var(--secondary-blue);
    padding: 15px 0 30px 0;
    display: flex;

    @media only screen and (min-width: 768px) {
        padding: 0;
    }
}

.description-container{
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container-aboutme-title {
    font-size: 35px;
    font-weight: bold;
    min-width: 90%;
    margin: 0 auto;
    background: transparent;
    color: var(--primary-background);
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        text-align: start;
        min-width: 80%;
    }
}

.container-aboutme-description {
    background: transparent;
    color: var(--primary-background);
    width: 90%;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 16px;
    line-height: 1.5;

    @media only screen and (min-width: 1024px) {
        width: 80%;
        font-size: 20px;
    }
}

.technologies {
    background-color: var(--primary-blue);
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 768px) {
        padding: 0;
    }
}

.img-container {

    background: transparent;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 15px;
}

.img-container .myImg {

    width: 100%;
    height: 100%;

    @media only screen and (min-width: 1024px) {
        min-width: 400px;
    }
}

.button-container {

    background: transparent;
    margin: 15px 0;

    @media only screen and (min-width: 1024px) {
        width: 80%;
    }
    
}

.button {
    background-color: var(--primary-gold);
    color: white;
    padding: 10px 35px;
    border-radius: 8px;
    cursor: pointer;
    width: 85%;
    font-size: 20px;

    @media only screen and (min-width: 1024px) {
        width: auto;
    }

    &:hover{
        background-color: var(--secondary-gold);
    }
}
</style>