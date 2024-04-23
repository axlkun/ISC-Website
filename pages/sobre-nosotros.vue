<template>
    <v-sheet class="sobre-nosotros">
        <v-sheet class="heading">
            <p>Sobre nosotros</p>
            <h1>ISC: Ingeniería Servicios & Construcción</h1>
            <p>Somos un equipo de profesionales con +10 años de experiencia, comprometidos con la excelencia y la innovación en cada proyecto que emprendemos</p>
        </v-sheet>

        <v-sheet class="image-container-parallax">
            <v-parallax
            height="500"
            src="/assets/sobre-nosotros.webp"
          ></v-parallax>
        </v-sheet>

        <v-sheet class="aboutme" id="aboutme">
            <v-sheet class="description">
    
                <v-sheet class="description-container">
    
                    <v-sheet class="container-aboutme-title">
                        <h2>Nuestra historia</h2>
                    </v-sheet>
    
                    <v-sheet class="container-aboutme-description">
                        <p>
                            ISC: Ingeniería Servicios & Construcción es el resultado de la pasión y la experiencia de un grupo de profesionales con más de una década de trayectoria en el sector. Fundada en la ciudad de Monterrey, Nuevo León nuestra empresa nació con la firme convicción de brindar un valor diferencial a la sociedad a través del desarrollo de infraestructuras de calidad. 
                        </p>
    
                        <p>
                            Hemos evolucionado para convertirnos en líderes en nuestro campo, comprometidos
                            con la excelencia y la innovación en cada proyecto que emprendemos.
                        </p>
                        <p>
                            En ISC, cada proyecto es una oportunidad para superar expectativas y dejar una marca positiva en el mundo. Nuestro compromiso con la excelencia y la innovación sigue impulsándonos a alcanzar nuevas metas y a seguir creciendo como empresa.
                        </p>
                    </v-sheet>
    
                </v-sheet>
    
            </v-sheet>
            <v-sheet class="image">
    
    
                <v-sheet class="img-container">
                    <img class="myImg" :src="img1" alt="Imagen Sobre Nosotros" loading="lazy" />
                </v-sheet>
    
    
            </v-sheet>
        </v-sheet>

        <v-sheet class="nuestraformula-container">

            <v-sheet class="background-container">
    
                <v-sheet class="text-container pt-6">
    
                    <p>Nuestros valores</p>
    
                    <h2>Calidad, innovación y compromiso</h2>
    
                    <p> Estos valores no solo guían nuestras acciones diarias, sino que también reflejan nuestro compromiso inquebrantable con la excelencia en cada proyecto que emprendemos. Con un enfoque centrado en la calidad, la búsqueda constante de la innovación y un compromiso firme con nuestros clientes y la comunidad, nos esforzamos por superar expectativas y dejar una huella positiva en el mundo de la construcción.
                    </p>
    
                </v-sheet>
    
                <v-sheet class="d-flex justify-center flex-wrap mt-16 ga-6 pb-16" color="transparent">
                    <v-card class="card mb-6 pa-6" color="transparent" max-width="400">
    
                        <div class="d-flex mb-3">
                            <v-icon color="#bc8c34" icon="mdi-shield-star" size="large"></v-icon>
                            <h3 class="ml-2">Misión</h3>
                        </div>
                        <p>Prestar nuestros servicios en sinergia con nuestros colaboradores y clientes para llevar de la mano la ejecución de sus proyectos, brindando un servicio con los más altos estandares de calidad.</p>
                    </v-card>

                    <v-card class="card mb-6 pa-6" color="transparent" max-width="400">
    
                        <div class="d-flex mb-3">
                            <v-icon color="#bc8c34" icon="mdi-account-group" size="large"></v-icon>
                            <h3 class="ml-2">Visión</h3>
                        </div>
                        <p>Ser una empresa constructora reconocida, lider en el ramo de la construcción con personal altamente capacitado para lograr el correcto aprovechamiento de los recursos de nuestros clientes y maximizar la rentabilidad de los proyectos encomendados.</p>
                    </v-card>
                </v-sheet>
    
            </v-sheet>
    
        </v-sheet>

        <myParallax/>
        <myContact/>
        
    </v-sheet>
</template>

<script setup>
import img1 from '../assets/sobre-nosotros1.webp';
import myParallax from '../components/Parallax.vue';
  import myContact from '../components/Contact.vue';
</script>

<style scoped>
.sobre-nosotros{
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

.image-container-parallax{
    max-width: 90%;
    margin: 40px auto;
}

.aboutme {
    display: flex;
    flex-direction: column;
    min-height: 70vh;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
}

.description,
.image {
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
    font-size: 25px;
    font-weight: bold;
    min-width: 90%;
    margin: 0 auto;
    padding: 15px 0;
    text-align: center;
    background: transparent;
    color: var(--primary-background);

    @media only screen and (min-width: 1024px) {
        font-size: 30px;
        min-width: 80%;
        text-align: start;
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
    font-size: 14px;
    line-height: 1.5;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        width: 80%;
        font-size: 16px;
        text-align: start;
    }
}

.image {
    background-color: var(--secondary-blue);
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
    max-width: 90%;
    margin: 30px auto;
    margin-top: 15px;
}

.img-container .myImg {

    width: 100%;
    height: 100%;

    @media only screen and (min-width: 1024px) {
        max-width: 500px;
    }
}

.container-description-title,
    .container-description-description {
        background: transparent;
        color: var(--primary-background);
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 16px;
        line-height: 1.2;
        margin-top: 30px;
    
        @media only screen and (min-width: 1024px) {
    
            font-size: 20px;
        }
    }
    
    .container-description-title p{
    
        font-size: 35px;
        line-height: 1;
        font-weight: bold;
    
        @media only screen and (min-width: 1024px) {
    
            font-size: 55px;
        }
    
    }

    .nuestraformula-container {
        background-color: var(--primary-background);
    }
    
    .text-container {
        background: transparent;
        max-width: 90%;
        margin: 0 auto;
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
        color: var(--secondary-blue);
    
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
        color: var(--secondary-blue);
    
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
        line-height: 1.5;
    
        @media only screen and (min-width: 1024px) {
    
            font-size: 16px;
    
        }
    }
</style>